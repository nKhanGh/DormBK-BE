import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

type Manager = {
  user_name: string;
  password: string;
};

export async function seedUser() {
  
}

export const login = async (data: { user_name: string; password: string }) => {

  
};

export const logout = async (_req: Request) => {
  return;
};
