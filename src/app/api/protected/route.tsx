import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'tu_clave_secreta';

interface AuthRequest extends NextApiRequest {
  headers: {
    authorization?: string;
  };
}

export default function handler(req: AuthRequest, res: NextApiResponse) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({ message: 'Token requerido' });
  }

  try {
    const token = authorization.split(' ')[1];
    const user = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: 'Acceso concedido', user });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}
