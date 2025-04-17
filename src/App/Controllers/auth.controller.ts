import { Request, Response } from 'express';
import { login } from '../../Services/auth.services';
import connection from '../../Config/dp.config';

class AuthController {
  static async postLogin(req: Request, res: Response) {
    try {
      const result = await login(req.body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
  static async getLogin(req: Request, res: Response){
    try {
      const db = await connection();
      const [rows] = await db.query('SELECT * FROM managerDorm'); // ví dụ bảng tên 'students'
      res.status(200).json(rows);
  } catch (error) {
      console.error('Lỗi khi lấy danh sách sinh viên:', error);
      res.status(500).json({ error: 'Lỗi máy chủ' });
  }
  }

  static postLogout(req: Request, res: Response) {
    res.status(200).json({ message: 'Logged out (frontend should clear token)' });
  }
}

export default AuthController;
