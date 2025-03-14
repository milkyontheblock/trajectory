import jwt from 'jsonwebtoken'

const SECRET_KEY = 'replace_this_key_milky_this_is_ins3cure'

export function signToken(payload: object, expiresIn: string = '1h'): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}