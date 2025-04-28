import { Request, Response } from 'express';
import { StudentService } from '@/Services/students.service';
import { Student } from '@/Interfaces/student.interface';
import { QueryError } from 'mysql2';

class StudentController {
  static async getStudent(req: Request, res: Response) {
    try {
      const students: Student[] = await StudentService.getAllStudents();

      const formatted = students.map((student: Student) => ({
        new_ssn: student.ssn,
        ssn: student.ssn,
        first_name: student.first_name,
        last_name: student.last_name,
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

        phone_numbers: student.phone_numbers,
        emails: student.emails,
        addresses: student.addresses,
      }));

      res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getStudentBySsn(req: Request, res: Response): Promise<void> {
    try {
      const ssn = req.params.ssn;
      const students: Student[] = await StudentService.getStudentBySsn(ssn);
      const student: Student | undefined = students[0];
      if (!student) {
        res.status(404).json({ message: 'Student not found' });
        return;
      }
      const formatted = {
        new_ssn: student.ssn,
        ssn: student.ssn,
        first_name: student.first_name,
        last_name: student.last_name,
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

        phone_numbers: student.phone_numbers,
        emails: student.emails,
        addresses: student.addresses,
      };
      res.status(200).json(formatted);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async createStudent(req: Request, res: Response) {
    const student: Student = req.body;
    try {
      await StudentService.insertStudent(student);
      res.status(201).json({ message: 'Student created successfully' });
    } catch (error) {
      const mysqlErrorMessage =
        (error as QueryError).message || 'Unknown error';
      res.status(500).json({ success: false, message: mysqlErrorMessage });
    }
  }

  static async put(req: Request, res: Response): Promise<void> {
    const student: Student = req.body;
    try {
      await StudentService.updateStudent(student);
      res.status(200).json({ message: 'Student updated successfully' });
    } catch (error) {
      const mysqlErrorMessage =
        (error as QueryError).message || 'Unknown error';
      res.status(500).json({ success: false, message: mysqlErrorMessage });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const ssn = req.params.ssn;
      await StudentService.deleteStudent(ssn);
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  static async getNoRelative(req: Request, res: Response) {
    try {
      const students: Student[] = await StudentService.getNotFamilyStudent();
      const formatted = students.map((student: Student) => ({
        ssn: student.ssn,
        full_name: student.first_name + ' ' + student.last_name,
      }));
      res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default StudentController;
