import { sqlitePrisma } from "@/libs/prisma"; // Prisma para SQLite
import { mysqlPrisma } from "@/libs/prisma"; // Prisma para MySQL
// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB
import { NextResponse } from "next/server";

// const dynamoClient = new DynamoDBClient({ region: "us-west-2" }); // Cambia la región según tu configuración

// Función para seleccionar la base de datos
function getDatabase(db: string | null) {
  switch (db) {
    case "sqlite":
      return sqlitePrisma;
    case "mysql":
      return mysqlPrisma;
    // case 'dynamodb':
    //   return dynamoClient;
    default:
      throw new Error("Invalid database selection");
  }
}

export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");

  try {
    const database = getDatabase(db);
    let user;

    if (db === "dynamodb") {
      // En DynamoDB, deberías realizar una búsqueda diferente
      throw new Error("DynamoDB GET not implemented yet");
    } else {
      user = await database.tbluser.findMany();
    }

    return NextResponse.json({ user });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request: {
  json: () =>
    | PromiseLike<{
        db: string | null;
        name: string;
        password: string;
        telefono: string;
        direccion: string;
        email: string;
      }>
    | {
      db: string | null;
      name: string;
      password: string;
      telefono: string;
      direccion: string;
      email: string;
    };
}) {
  const { db, name, password, telefono, direccion, email } = await request.json();

  try {
    // Validación de entrada
    if (!db || !name || !password || !telefono || !direccion || !email) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Guardar en DynamoDB
      const dynamoParams = {
        TableName: "tbluser",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          name: { S: name },
          password: { S: password },
          telefono: { S: telefono },
          direccion: { S: direccion },
          email: { S: email },
        },
      };
      // await dynamoClient.send(new PutItemCommand(dynamoParams)); // Descomentar si usas DynamoDB

      return NextResponse.json({ message: "Group added to DynamoDB" });
    } else {
      // Guardar en SQLite o MySQL
      const newUser = await database.tbluser.create({
        data: { name, password, telefono, direccion, email },
      });

      return NextResponse.json(newUser);
    }
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  console.error(error);
  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : "Internal Server Error",
    },
    { status: 500 }
  );
}
