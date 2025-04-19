import { Request, Response } from "express";
import connection from "../../Config/dp.config";

class StudentController {
  static async getStudent(req: Request, res: Response) {
    try {
      const db = await connection();
      const [rows] = await db.query("SELECT * FROM student JOIN people"); // ví dụ bảng tên 'students'
      res.status(200).json(rows);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sinh viên:", error);
      res.status(500).json({ error: "Lỗi máy chủ" });
    }
  }

  static getStudentBySsn(req: Request, res: Response) {
    //todo
  }

  static post(req: Request, res: Response) {
    //todo
  }

  static put(req: Request, res: Response) {
    //todo
  }

  static delete(req: Request, res: Response) {
    //todo
  }

  static getNoRelative(req: Request, res: Response) {
    //todo
  }
}

export default StudentController;
