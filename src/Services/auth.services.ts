import { RowDataPacket } from 'mysql2/promise';
import bcrypt from 'bcryptjs';  // mã hóa mật khẩu
import jwt from 'jsonwebtoken'; // tạo và kiểm tra token
import db from '../Config/dp.config';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';



type manager = {
    user_name: string;
    password: string;
};

// hamf tạo mật khẩu
async function seedUser() {
  const connection = await db();
  const password = 'admin123';
  const hashed = await bcrypt.hash(password, 10);

  await connection.query(
    'INSERT INTO managerDorm (user_name, password) VALUES (?, ?)',
    ['sManager', hashed]
  );

  console.log('User sManager seeded with hashed password:', hashed);
  await connection.end();
}

export const login = async (data: { user_name: string; password: string }) => {
    const { user_name, password } = data;
  
    const connection = await db();
    const [managers] = await connection.query<(manager & RowDataPacket)[]>(
      'SELECT * FROM managerDorm WHERE user_name = ?',
      [user_name]
    );
  
    const manager = managers[0];
    if (!manager) throw new Error('Manager not found');
  
    const isMatch = await bcrypt.compare(password, manager.password);
    if (!isMatch) throw new Error('Invalid credentials');
  
    const token = jwt.sign({ user_name: manager.user_name }, JWT_SECRET, { expiresIn: '1h' });
  
    return {
      token,
      user: { user_name: manager.user_name },
    };
  };

export const logout = async (req: Request) => {
    return;
};