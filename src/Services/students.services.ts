import pool from '@/Config/db.config'; // Cấu hình kết nối với DB
import { Student } from '@/Interface/student.interface';

export class StudentService {
  static async getAllStudents(): Promise<Student[]> {
    const [rows] = await pool.query('CALL getStudent()');
    return (rows as any[])[0];
  }
}
