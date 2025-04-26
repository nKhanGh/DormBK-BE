import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/Config/db.config';
import { ApiError } from '@/utils/ApiErorr';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function seedUser() {
  try {
    const user_name = 'sManager';
    const plainPassword = 'admin123';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await pool.query('CALL insert_manager_dorm(?, ?)', [
      user_name,
      hashedPassword,
    ]);

    console.log(`User ${user_name} seeded with password: ${plainPassword}`);
  } catch (error) {
    console.error('Error seeding user:', error);
  }
}

export const login = async (data: { user_name: string; password: string }) => {
  const { user_name, password } = data;

  try {
    const [rows]: any[] = await pool.query(
      'SELECT check_user_exists(?) AS user_exists',
      [user_name],
    );

    if (!rows[0].user_exists) {
      throw new ApiError(404, 'Manager not found');
    }

    const [managerRows]: any[] = await pool.query(
      'CALL get_manager_dorm_by_username(?)',
      [user_name],
    );

    if (managerRows[0].length === 0) {
      throw new ApiError(404, 'Manager not found');
    }

    const manager = managerRows[0][0];

    const isMatch = await bcrypt.compare(password, manager.password);
    if (!isMatch) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const token = jwt.sign({ user_name: manager.user_name }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return {
      token,
      user: { user_name: manager.user_name },
    };
  } catch (error) {
    console.error('Login error:', error);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'An unexpected error occurred during login');
  }
};

export const logout = async (_req: Request) => {
  return;
};
