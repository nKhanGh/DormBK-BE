import { Request, Response } from 'express';
import { StudentService } from '@/Services/students.services';
import { Student } from '@/Interface/student.interface';

class StudentController {
  static async getStudent(req: Request, res: Response) {
    try {
      const students: Student[] = await StudentService.getAllStudents();

      const formatted = students.map((student: Student) => ({
        ssn: student.ssn,
        full_name: student.full_name,
        birthday: student.birthday,
        sex: student.sex,
        health_state: student.health_state || 'Unknown',
        ethnic_group: student.ethnic_group || 'Unknown',

        student_id: student.student_id,
        has_health_insurance: student.has_health_insurance,
        study_status: student.study_status || 'Unknown',
        class_name: student.class_name || 'Unknown',
        faculty: student.faculty || 'Unknown',
        building_id: student.building_id,
        room_id: student.room_id,

        phones: student.phones ? student.phones.split(';') : [],
        emails: student.emails ? student.emails.split(';') : [],
        addresses: student.addresses
          ? student.addresses.split(';').map((addr) => addr.trim())
          : [],
      }));

      res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getStudentBySsn(req: Request, res: Response): Promise<void> {}

  static async createStudent(req: Request, res: Response) {}

  static async put(req: Request, res: Response): Promise<void> {}

  static async delete(req: Request, res: Response): Promise<void> {}

  static async getNoRelative(req: Request, res: Response) {}
}

export default StudentController;
