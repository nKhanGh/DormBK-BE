import { Request, Response } from "express";
import prisma from "@/Config/prisma.config";
import { CreateStudentSchema } from "@/Schemas/Students.schema";

class StudentController {
  static formatStudentData(student: any) {
    return {
      ssn: student.sssn,
      studentId: student.student_id,
      hasHealthInsurance: student.has_health_insurance,
      studyStatus: student.study_status,
      className: student.class_name,
      faculty: student.faculty,
      buildingId: student.building_id,
      roomId: student.room_id,
      fullName: `${student.people.first_name} ${student.people.last_name}`,
      birthday: student.people.birthday,
      sex: student.people.sex,
      healthState: student.people.health_state,
      ethnicGroup: student.people.ethnic_group,
      addresses: student.people.address.map((a: any) => ({
        commune: a.commune,
        district: a.district,
        province: a.province,
      })),
      emails: student.people.email.map((e: any) => e.email),
      phoneNumbers: student.people.phone_number.map((p: any) => p.phone_number),
    };
  }

  static async getStudent(req: Request, res: Response) {
    try {
      const students = await prisma.student.findMany({
        include: {
          people: { include: { address: true, email: true, phone_number: true } },
        },
      });
      const formatted = students.map(StudentController.formatStudentData);
      res.status(200).json(formatted);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getStudentBySsn(req: Request, res: Response): Promise<void> {
    const { ssn } = req.params;
    try {
      const student = await prisma.student.findUnique({
        where: { sssn: ssn },
        include: {
          people: { include: { address: true, email: true, phone_number: true } },
        },
      });

      if (!student) {
         res.status(404).json({ message: "Student not found" });
         return;
      }
      res.status(200).json(StudentController.formatStudentData(student));
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createStudent(req: Request, res: Response) {
    try {
      const parsed = CreateStudentSchema.parse(req.body);
      const { people, address, email, phoneNumber, student } = parsed;

      const created = await prisma.people.create({
        data: {
          ssn: people.SSN,
          first_name: people.First_Name,
          last_name: people.Last_Name,
          birthday: new Date(people.Birthday),
          sex: people.Sex,
          health_state: people.Health_State,
          ethnic_group: people.Ethnic_Group,
          address: { create: [address] },
          email: { create: [email] },
          phone_number: { create: [{ phone_number: phoneNumber.phoneNumber }] },
          student: {
            create: {
              student_id: student.studentId,
              has_health_insurance: student.hasHealthInsurance,
              study_status: student.studyStatus,
              class_name: student.className,
              faculty: student.faculty,
              building_id: student.building_id,
              room_id: student.room_id,
            },
          },
        },
      });

      res.status(201).json(created);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async put(req: Request, res: Response): Promise<void> {
    const { ssn } = req.params;
    const updateData = req.body;

    try {
      const current = await prisma.people.findUnique({
        where: { ssn },
        include: { student: true },
      });

      if (!current) {
        res.status(404).json({ error: "Student not found" });
        return;
      }

      const peopleUpdates: any = {};
      const studentUpdates: any = {};

      const peopleFields = ["first_name", "last_name", "birthday", "sex", "health_state", "ethnic_group"];
      const studentFields = ["student_id", "has_health_insurance", "study_status", "class_name", "faculty", "building_id", "room_id"];

      peopleFields.forEach((field) => {
        if (updateData[field] !== undefined && updateData[field] !== (current as any)[field]) {
          peopleUpdates[field] = field === "birthday" ? new Date(updateData[field]) : updateData[field];
        }
      });

      if (current.student) {
        studentFields.forEach((field) => {
          if (updateData[field] !== undefined && updateData[field] !== (current.student as any)[field]) {
            studentUpdates[field] = updateData[field];
          }
        });
      }

      const updated = await prisma.people.update({
        where: { ssn },
        data: {
          ...peopleUpdates,
          student: Object.keys(studentUpdates).length > 0 ? { update: studentUpdates } : undefined,
        },
        include: { student: true },
      });

      res.json(updated);
    } catch (error: any) {
      res.status(500).json({ error: "Update failed", details: error.message });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    const { ssn } = req.params;
    try {
      const student = await prisma.people.findUnique({ where: { ssn } });
      if (!student){
        res.status(404).json({ error: "Student not found" });
        return;
      }

      await prisma.people.delete({ where: { ssn } });
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: "Delete failed", details: error.message });
    }
  }

  static async getNoRelative(req: Request, res: Response) {
    try {
      const result = await prisma.$queryRaw<{ f0: string; f1: string; f2: string }[]>`CALL list_student_not_family()`;
      const formatted = result.map((r: { f0: any; f1: any; f2: any; }) => ({
        ssn: r.f0,
        firstName: r.f1,
        lastName: r.f2,
      }));
      res.status(200).json(formatted);
    } catch (error: any) {
      res.status(500).json({ error: "Stored procedure failed", details: error.message });
    }
  }
}

export default StudentController;
