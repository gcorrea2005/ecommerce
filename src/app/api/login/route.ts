"use client";

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Ejemplo de usuario (en una aplicación real usarías una base de datos)
const USERS_DB = [
  {
    id: 1,
    email: "test@example.com",
    // Usamos bcrypt para hash de la contraseña
    password: bcrypt.hashSync("123", 10), // La contraseña es "123" en texto plano
  },
];

// Clave secreta para firmar el JWT (guárdala en variables de entorno para producción)
const JWT_SECRET = process.env.JWT_SECRET || "ipodxavier2024";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Solo permite métodos POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { email, password } = req.body;
  console.log(email, password);

  // Verificar el usuario
  const user = USERS_DB.find((u) => u.email === email);

  // Comprueba si el usuario existe y si la contraseña es correcta
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  // Generar el token JWT
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h", // El token expirará en 1 hora
  });

  // Configurar la cookie con el JWT
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
  );

  // Responder con un mensaje de éxito
  res.status(200).json({ message: "Inicio de sesión exitoso" });
}
