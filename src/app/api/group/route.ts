import { sqliteClient, mysqlClient } from "@/libs/prisma"; // Prisma para SQLite y MySQL
import { NextResponse } from "next/server";
// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB

// Configuración de DynamoDB Client (descomenta si usas DynamoDB)
// const dynamoClient = new DynamoDBClient({ region: "us-west-1" });

// Función para seleccionar la base de datos
function getDatabase(db: string | null) {
  switch (db) {
    case "sqlite":
      return sqliteClient;
    case "mysql":
      return mysqlClient;
    // case "dynamodb":
    //   return dynamoClient;
    default:
      throw new Error("Invalid database selection");
  }
}

// Método GET: Obtener grupos
export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");
  try {
    const database = getDatabase(db);
    let group;

    if (db === "dynamodb") {
      console.log("dinamoDB");
      // Implementación futura para DynamoDB GET
      // throw new Error("DynamoDB GET not implemented yet");
    } else {
      // Obtener todos los subgrupos en SQLite o MySQL
      group = await database.tblgroup.findMany();
    }

    return NextResponse.json({ group });
  } catch (error) {
    return handleError(error);
  }
}

// Método POST: Crear un subgrupo
export async function POST(request: {
  json: () =>
    | PromiseLike<{
        db: string | null;
        group: string;
        description: string;
        image: string;
      }>
    | {
        db: string | null;
        group: string;
        description: string;
        image: string;
      };
}) {
  try {
    const { db, group, description, image } = await request.json();

    // Validación de entrada
    if (!db || !group || !description || !image) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Configuración para guardar en DynamoDB
      const dynamoParams = {
        TableName: "tblgroup",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          group: { S: group },
          description: { S: description },
          image: { S: image },
        },
      };

      // Guardar en DynamoDB
      // await dynamoClient.send(new PutItemCommand(dynamoParams));
      return NextResponse.json({ message: "Group added to DynamoDB" });
    } else {
      // Guardar en SQLite o MySQL
      const newGroup = await database.tblgroup.create({
        data: { group, description, image },
      });
      return NextResponse.json(newGroup);
    }
  } catch (error) {
    return handleError(error);
  }
}

// Función de manejo de errores
function handleError(error: unknown) {
  console.error(error);
  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : "Internal Server Error",
    },
    { status: 500 }
  );
}
