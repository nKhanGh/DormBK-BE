import { Request, Response } from 'express';
import { login } from '../../Services/auth.services';

class AuthController {
  static async postLogin(req: Request, res: Response) {
    try {
      const result = await login(req.body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  static postLogout(req: Request, res: Response) {
    res
      .status(200)
      .json({ message: 'Logged out (frontend should clear token)' });
  }
}

export default AuthController;
