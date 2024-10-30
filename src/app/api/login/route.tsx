import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = 'tu_clave_secreta';

interface LoginRequest extends NextApiRequest {
  body: {
    username: string;
    password: string;
  };
}

export default async function handler(req: LoginRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { username, password } = req.body;
  const user = { username: 'admin', password: '1234' }; // Usuario ficticio

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).json({ message: 'Credenciales incorrectas' });
}
