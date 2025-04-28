import pool from '@/Config/db.config'; // Cấu hình kết nối với DB
import { Student } from '@/Interfaces/student.interface';

export class StudentService {
  static async getAllStudents(): Promise<Student[]> {
    const result = await pool.query('CALL get_student()');
    const rows = result[0];

    if (Array.isArray(rows) && Array.isArray(rows[0])) {
      return rows[0] as Student[];
    } else {
      throw new Error('Unexpected result format');
    }
  }

  static async getNotFamilyStudent(): Promise<Student[]> {
    const result = await pool.query('CALL list_student_not_family()');
    const rows = result[0];

    if (Array.isArray(rows) && Array.isArray(rows[0])) {
      return rows[0] as Student[];
    } else {
      throw new Error('Unexpected result format');
    }
  }

  static async getStudentBySsn(ssn: string): Promise<Student[]> {
    const result = await pool.query('CALL get_student_by_ssn(?)', [ssn]);
    const rows = result[0];

    if (Array.isArray(rows) && Array.isArray(rows[0])) {
      return rows[0] as Student[];
    } else {
      throw new Error('Unexpected result format');
    }
  }

  static async deleteStudent(ssn: string): Promise<void> {
    await pool.query('CALL delete_student_by_ssn(?)', [ssn]);
  }

  static async insertStudent(student: Student): Promise<void> {
    await pool.query(
      'CALL add_new_student(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        student.ssn,
        student.first_name,
        student.last_name,
        student.birthday,
        student.sex,
        student.health_state,
        student.ethnic_group,

        student.student_id,
        student.has_health_insurance,
        student.study_status,
        student.class_name,
        student.faculty,
        student.building_id,
        student.room_id,

        student.addresses,
        student.phone_numbers,
        student.emails,
      ],
    );
    await pool.query('CALL create_dormitory_card(?)', [student.ssn]);
  }

  static async updateStudent(student: Student): Promise<void> {
    await pool.query(
      'CALL update_student(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        student.new_ssn,
        student.ssn,
        student.first_name,
        student.last_name,
        student.birthday,
        student.sex,
        student.health_state,
        student.ethnic_group,

        student.student_id,
        student.has_health_insurance,
        student.study_status,
        student.class_name,
        student.faculty,
        student.building_id,
        student.room_id,

        student.addresses,
        student.phone_numbers,
        student.emails,
      ],
    );
  }
}
