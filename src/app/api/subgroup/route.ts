import { sqlitePrisma } from "@/libs/prisma"; // Prisma para SQLite
import { mysqlPrisma } from "@/libs/prisma"; // Prisma para MySQL
import { NextResponse } from "next/server";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB

// Configuración de DynamoDB Client (descomenta si usas DynamoDB)
const dynamoClient = new DynamoDBClient({ region: "us-west-1" });

// Función para seleccionar la base de datos
function getDatabase(db: string | null) {
  switch (db) {
    case "sqlite":
      return sqlitePrisma;
    case "mysql":
      return mysqlPrisma;
    case "dynamodb":
      return dynamoClient;
    default:
      throw new Error("Invalid database selection");
  }
}

// Método GET: Obtener subgrupos
export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");

  try {
    const database = getDatabase(db);
    let subgroup;

    if (db === "dynamodb") {
      // Implementación futura para DynamoDB GET
      throw new Error("DynamoDB GET not implemented yet");
    } else {
      // Obtener todos los subgrupos en SQLite o MySQL
      subgroup = await database.tblsubgroup.findMany();
    }

    return NextResponse.json({ subgroup });
  } catch (error) {
    return handleError(error);
  }
}

// Método POST: Crear un subgrupo
export async function POST(request: {
  json: () =>
    | PromiseLike<{
        db: string | null;
        subgroup: string;
        description: string;
        image: string;
        groupId: string;
      }>
    | {
        db: string | null;
        subgroup: string;
        description: string;
        image: string;
        groupId: string;
      };
}) {
  try {
    const { db, subgroup, description, image, groupId } = await request.json();

    // Validación de entrada
    if (!db || !subgroup || !description || !image || !groupId) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Configuración para guardar en DynamoDB
      const dynamoParams = {
        TableName: "tblsubgroup",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          subgroup: { S: subgroup },
          description: { S: description },
          image: { S: image },
          grouId: { S: groupId },
        },
      };

      // Guardar en DynamoDB
      await dynamoClient.send(new PutItemCommand(dynamoParams));
      return NextResponse.json({ message: "Group added to DynamoDB" });
    } else {
      // Guardar en SQLite o MySQL
      const newSubGroup = await database.tblsubgroup.create({
        data: { subgroup, description, image, groupId },
      });
      return NextResponse.json(newSubGroup);
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
