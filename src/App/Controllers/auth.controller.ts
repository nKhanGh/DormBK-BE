import { Request, Response } from 'express';
import { login } from '../../Services/auth.service';

class AuthController {
  static async postLogin(req: Request, res: Response) {
    try {
      const result = await login(req.body);
      res.status(200).json(result);
    } catch (error: any) {
      const statusCode = error.statusCode || 500;
      const message = error.message || 'An unexpected error occurred';
      res.status(statusCode).json({ message });
    }
  }

  static postLogout(req: Request, res: Response) {
    res
      .status(200)
      .json({ message: 'Logged out (frontend should clear token)' });
  }
}

export default AuthController;
