import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ products });
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
  const { name, price, stock, image } = await request.json();

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        stock,
        image,
      },
    });
    return NextResponse.json(newProduct);
  } catch (error) {
    console.error(error); // Agrega un console.error para depuración
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
