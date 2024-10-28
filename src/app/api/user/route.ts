
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }
  }
}

export async function POST(request: Request) {
  const { name, password, telefono, direccion, email } = await request.json();

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        password,
        telefono,
        direccion,
        email,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error); // Agrega un console.error para depuración
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
