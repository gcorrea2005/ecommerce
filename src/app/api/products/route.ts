// import { prisma } from "@/libs/prisma";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const products = await prisma.product.findMany();
//     return NextResponse.json({ products });
//   } catch (error) {
//     if (error instanceof Error) {
//       return NextResponse.json(
//         {
//           message: error.message,
//         },
//         { status: 500 }
//       );
//     }
//   }
// }

// export async function POST(request: Request) {
//   const { name, price, stock, image } = await request.json();

//   try {
//     const newProduct = await prisma.product.create({
//       data: {
//         name,
//         price,
//         stock,
//         image,
//       },
//     });
//     return NextResponse.json(newProduct);
//   } catch (error) {
//     console.error(error); // Agrega un console.error para depuración
//     return NextResponse.json(
//       {
//         message: error instanceof Error ? error.message : 'Internal Server Error',
//       },
//       { status: 500 }
//     );
//   }
// }

import { prisma as sqlitePrisma } from "@/libs/prisma/sqlite"; // Prisma para SQLite
import { prisma as mysqlPrisma } from "@/libs/prisma/mysql"; // Prisma para MySQL
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB
import { NextResponse } from "next/server";

const dynamoClient = new DynamoDBClient({ region: "us-west-2" }); // Cambia la región según tu configuración

// Función para seleccionar la base de datos
function getDatabase(db) {
  switch (db) {
    case 'sqlite':
      return sqlitePrisma;
    case 'mysql':
      return mysqlPrisma;
    case 'dynamodb':
      return dynamoClient;
    default:
      throw new Error("Invalid database selection");
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get('db');

  try {
    const database = getDatabase(db);
    let products;

    if (db === 'dynamodb') {
      // En DynamoDB, deberías realizar una búsqueda diferente
      throw new Error("DynamoDB GET not implemented yet");
    } else {
      products = await database.product.findMany();
    }

    return NextResponse.json({ products });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request) {
  const { db, name, price, stock, image } = await request.json();

  try {
    const database = getDatabase(db);

    if (db === 'dynamodb') {
      // Guardar en DynamoDB
      const dynamoParams = {
        TableName: "Products",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          name: { S: name },
          price: { N: price.toString() },
          stock: { N: stock.toString() },
          image: { S: image },
        },
      };
      await dynamoClient.send(new PutItemCommand(dynamoParams));

      return NextResponse.json({ message: "Product added to DynamoDB" });
    } else {
      // Guardar en SQLite o MySQL
      const newProduct = await database.product.create({
        data: { name, price, stock, image },
      });

      return NextResponse.json(newProduct);
    }
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error) {
  console.error(error);
  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : 'Internal Server Error',
    },
    { status: 500 }
  );
}
