import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../Config/prisma.config";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

type Manager = {
  user_name: string;
  password: string;
};

export async function seedUser() {
  const user_name = "sManager";
  const plainPassword = "admin123";
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const existing = await prisma.managerDorm.findFirst({
    where: { user_name },
  });

  if (!existing) {
    await prisma.managerDorm.create({
      data: {
        user_name,
        password: hashedPassword,
      },
    });

    console.log(`User ${user_name} seeded with password: ${plainPassword}`);
  } else {
    console.log(`User ${user_name} already exists.`);
  }
}

export const login = async (data: { user_name: string; password: string }) => {
  const { user_name, password } = data;

  const manager = await prisma.managerDorm.findFirst({
    where: { user_name },
  });

  if (!manager) {
    throw new Error("Manager not found");
  }

  const isMatch = await bcrypt.compare(password, manager.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { user_name: manager.user_name },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    user: { user_name: manager.user_name },
  };
};

export const logout = async (_req: Request) => {
  return;
};
