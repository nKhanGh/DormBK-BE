import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/Config/db.config';

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
  // seedUser();
  const { user_name, password } = data;

  try {
    const [rows]: any[] = await pool.query(
      'SELECT check_user_exists(?) AS user_exists',
      [user_name],
    );

    if (!rows[0].user_exists) {
      throw new Error('Manager not found');
    }

    const [managerRows]: any[] = await pool.query(
      'SELECT * FROM manager_dorm WHERE user_name = ?',
      [user_name],
    );

    if (managerRows.length === 0) {
      throw new Error('Manager not found');
    }

    const manager = managerRows[0];

    const isMatch = await bcrypt.compare(password, manager.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ user_name: manager.user_name }, JWT_SECRET, {
      expiresIn: '1h',
    });

    return {
      token,
      user: { user_name: manager.user_name },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error('Login error:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Unexpected error during login:', error);
      throw new Error('An unexpected error occurred during login');
    }
  }
};

export const logout = async (_req: Request) => {
  return;
};
