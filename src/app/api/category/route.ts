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
    let category;

    if (db === "dynamodb") {
      // En DynamoDB, deberías realizar una búsqueda diferente
      throw new Error("DynamoDB GET not implemented yet");
    } else {
      category = await database.tblcategory.findMany();
    }

    return NextResponse.json({ category });
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request: {
  json: () =>
    | PromiseLike<{
        db: string | null;
        category: string;
        description: string;
        image: string;
      }>
    | {
        db: string | null;
        category: string;
        description: string;
        image: string;
      };
}) {
  const { db, category, description, image } = await request.json();

  try {
    // Validación de entrada
    if (!db || !category || !description || !image) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Guardar en DynamoDB
      const dynamoParams = {
        TableName: "tblcategory",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          subgroup: { S: category },
          description: { S: description },
          image: { S: image },
        },
      };
      // await dynamoClient.send(new PutItemCommand(dynamoParams)); // Descomentar si usas DynamoDB

      return NextResponse.json({ message: "Group added to DynamoDB" });
    } else {
      // Guardar en SQLite o MySQL
      const newSubGroup = await database.tblsubgroup.create({
        data: { category, description, image },
      });

      return NextResponse.json(newSubGroup);
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
