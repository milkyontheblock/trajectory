import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10;

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}