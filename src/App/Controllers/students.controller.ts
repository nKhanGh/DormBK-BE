import { Request, Response, RequestHandler } from "express";
import prisma from "@/Config/prisma.config";
import { CreateStudentSchema } from "@/Schemas/Students.schema";

interface Params {
  ssn: string;
}


class StudentController {
  static async getStudent(req: Request, res: Response) {
    try {
      const students = await prisma.student.findMany({
        include: {
          People: {
            include: {
              Address: true,
              Email: true,
              PhoneNumber: true,
            },
          },
        },
      });

      const formatted = students.map((s) => ({
        ssn: s.Sssn,
        studentId: s.studentId,
        hasHealthInsurance: s.hasHealthInsurance,
        studyStatus: s.studyStatus,
        className: s.className,
        faculty: s.faculty,
        buildingId: s.building_id,
        roomId: s.room_id,
        fullName: s.People.Full_Name + ' ' + s.People.Last_Name,
        birthday: s.People.Birthday,
        sex: s.People.Sex,
        healthState: s.People.Health_State,
        ethnicGroup: s.People.Ethnic_Group,
        addresses: s.People.Address.map((a) => ({
          commune: a.commune,
          district: a.district,
          province: a.province,
        })),
        emails: s.People.Email.map((e) => e.email),
        phoneNumbers: s.People.PhoneNumber.map((p) => p.phoneNumber),
      }));

      res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getStudentBySsn(req: Request, res: Response): Promise<void> {
    const { ssn } = req.params;
  
    try {
      const student = await prisma.student.findUnique({
        where: { Sssn: ssn },
        include: {
          People: {
            include: {
              Address: true,
              Email: true,
              PhoneNumber: true,
            },
          },
        },
      });
  
      if (!student) {
        res.status(404).json({ message: 'Student not found' });
        return;
      }
      if (!student.People) {
        res.status(404).json({ message: 'People info not found for this student' });
        return;
      }
  
      const formatted = {
        ssn: student.Sssn,
        studentId: student.studentId,
        hasHealthInsurance: student.hasHealthInsurance,
        studyStatus: student.studyStatus,
        className: student.className,
        faculty: student.faculty,
        buildingId: student.building_id,
        roomId: student.room_id,
        fullName: `${student.People.Full_Name ?? ''} ${student.People.Last_Name ?? ''}`.trim(),
        birthday: student.People.Birthday,
        sex: student.People.Sex,
        healthState: student.People.Health_State,
        ethnicGroup: student.People.Ethnic_Group,
        addresses: student.People.Address?.map((a) => ({
          commune: a.commune,
          district: a.district,
          province: a.province,
        })) ?? [],
        emails: student.People.Email?.map((e) => e.email) ?? [],
        phoneNumbers: student.People.PhoneNumber?.map((p) => p.phoneNumber) ?? [],
      };
  
      res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching student by ssn:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const parsed = CreateStudentSchema.parse(req.body)
  
      const {
        people,
        address,
        email,
        phoneNumber,
        student
      } = parsed
  
      const created = await prisma.people.create({
        data: {
          SSN: people.SSN,
          Full_Name: people.Full_Name,
          Last_Name: people.Last_Name,
          Birthday: new Date(people.Birthday),
          Sex: people.Sex,
          Health_State: people.Health_State,
          Ethnic_Group: people.Ethnic_Group,
          
          Address: {
            create: {
              ...address,
            },
          },
          Email: {
            create: {
              email: email.email,
            },
          },
          PhoneNumber: {
            create: {
              phoneNumber: phoneNumber.phoneNumber,
            },
          },
  
          student: {
            create: {
              studentId: student.studentId,
              hasHealthInsurance: student.hasHealthInsurance,
              studyStatus: student.studyStatus,
              className: student.className,
              faculty: student.faculty,
              building_id: student.building_id,
              room_id: student.room_id,
              Sssn: people.SSN,
            },
          },
        },
      })
  
      res.status(201).json(created)
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async put(req: Request<Params>, res: Response): Promise<void> {
    const { ssn } = req.params;
    const updateData = req.body;

    try {
      const current = await prisma.people.findUnique({
        where: { SSN: ssn },
        include: { student: true }
      });

      if (!current) {
        res.status(404).json({ error: "Student does not exist" });
        return;
      }

      const peopleUpdates: Partial<typeof current> = {};
      const studentUpdates: Partial<typeof current.student> = {};

      const peopleFields = ["Full_Name", "Last_Name", "Birthday", "Sex", "Health_State", "Ethnic_Group"] as const;
      const studentFields = ["studentId", "hasHealthInsurance", "studyStatus", "className", "faculty", "building_id", "room_id"] as const;

      for (const field of peopleFields) {
        if (
          updateData[field] !== undefined &&
          updateData[field] !== current[field]
        ) {
          peopleUpdates[field] =
            field === "Birthday" ? new Date(updateData[field]) : updateData[field];
        }
      }

      if (current.student) {
        for (const field of studentFields) {
          if (
            updateData[field] !== undefined &&
            updateData[field] !== current.student[field]
          ) {
            studentUpdates[field] = updateData[field];
          }
        }
      }

      const updated = await prisma.people.update({
        where: { SSN: ssn },
        data: {
          ...(Object.keys(peopleUpdates).length > 0 ? peopleUpdates : {}),
          student: Object.keys(studentUpdates).length > 0
            ? { update: studentUpdates }
            : undefined
        },
        include: { student: true }
      });

      res.json(updated);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Some errors when update students",
        details: (error as Error).message
      });
    }
  }
  
  static async delete(req: Request, res: Response): Promise<void> {
    const { ssn } = req.params;
    try {
      const student = await prisma.people.findUnique({
        where: { SSN: ssn },
        include: { student: true },
      });
  
      if (!student) {
        res.status(404).json({ error: "Student not found" });
        return;
      }
  
      await prisma.people.delete({
        where: { SSN: ssn }
      });
  
      res.status(200).json({ message: "Student and related records deleted successfully" });
    } catch (error) {
      res.status(500).json({
        error: "Error deleting student",
        details: (error as Error).message,
      });
    }
  }
  

  static async getNoRelative(req: Request, res: Response) {
    try {
      const result = await prisma.$queryRaw<{ f0: string; f1: string; f2: string }[]>`CALL list_student_not_family()`;
      const formattedResult = result.map((row) => ({
        ssn: row.f0,
        firstName: row.f1,
        lastName: row.f2
      }));
  
      res.status(200).json(formattedResult);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: "Error fetching students without relatives",
        details: (error as Error).message,
      });
    }
  }
  
};

export default StudentController;
