import { Request, Response } from "express";
import pool from "@/Config/db.config"

class StudentController {

  static async getStudent(req: Request, res: Response) {
    const [rows] = await pool.query("SELECT * FROM student");
    res.status(200).json(rows);
  }

  static async getStudentBySsn(req: Request, res: Response): Promise<void> {
    
  }

  static async createStudent(req: Request, res: Response) {
    
  }

  static async put(req: Request, res: Response): Promise<void> {
    
  }

  static async delete(req: Request, res: Response): Promise<void> {
    
  }

  static async getNoRelative(req: Request, res: Response) {
  }
};

export default StudentController;
