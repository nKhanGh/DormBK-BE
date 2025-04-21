import { Request, Response } from "express";
import prisma from "../../Config/prisma.config";

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

  static getStudentBySsn(req: Request, res: Response) {
    //todo
  }

  static post(req: Request, res: Response) {
    //todo
  }

  static async put(req: Request, res: Response) {
    const { Sssn } = req.params;
    const { studyStatus, className } = req.body;

    try {
      const updatedStudent = await prisma.student.update({
        where: { Sssn },
        data: {
          studyStatus,
          className,
        },
      });
      res.json(updatedStudent);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: 'Update failed', details: error.message });
      } else {
        res.status(500).json({ error: 'Update failed', details: String(error) });
      }
    }
    
  }

  static delete(req: Request, res: Response) {
    //todo
  }

  static getNoRelative(req: Request, res: Response) {
    //todo
  }
}

export default StudentController;
