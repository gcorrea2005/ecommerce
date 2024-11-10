import { sqliteClient, mysqlClient } from "@/libs/prisma"; // Prisma para SQLite y MySQL
import { log } from "console";
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

// Método GET: Obtener Categorías
export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");
  const subGroupId = searchParams.get("subGroupId");

  // Validación de parámetros
  if (!db || !subGroupId) {
    return NextResponse.json(
      { message: "Database type and subGroupId are required" },
      { status: 400 }
    );
  }

  const subGroupIdInt = parseInt(subGroupId);
  if (isNaN(subGroupIdInt)) {
    return NextResponse.json(
      { message: "Invalid subGroupId format. Must be a number." },
      { status: 400 }
    );
  }

  const database = getDatabase(db); // Asegúrate de que esta función devuelve la conexión correcta

  try {
    if (db === "dynamodb") {
      return NextResponse.json(
        { message: "DynamoDB GET for categories not implemented yet" },
        { status: 501 }
      );
    }

    // Consulta en Prisma para obtener categorías
    const categories = await database.tblcategory.findMany({
      where: { subgroupId: subGroupIdInt },
    });

    // Verifica si no se encontraron categorías
    if (categories.length === 0) {
      return NextResponse.json(
        { message: "No categories found for the specified subGroupId" },
        { status: 404 }
      );
    }

    // Devuelve las categorías encontradas
    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Error fetching categories", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}




// Método POST: Crear un nuevo category
export async function POST(request: { url: string | URL; json: () => unknown }) {
  try {
    const { searchParams } = new URL(request.url);
    const db = searchParams.get("db");
    const subGroupId = searchParams.get("subGroupId");

    // Validación de parámetros
    if (!db || !subGroupId) {
      return NextResponse.json(
        { message: "'db' and 'subGroupId' query parameters are required" },
        { status: 400 }
      );
    }

    const { category, description } = (await request.json()) as {
      category: string;
      description: string;
    };

    // Validación de campos
    if (!category || !description) {
      return NextResponse.json(
        { message: "Fields 'category' and 'description' are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      // DynamoDB insert
      const dynamoParams = {
        TableName: "tblcategory",
        Item: {
          id: { S: subGroupId },
          category: { S: category },
          description: { S: description },
          subgroupId: { N: subGroupId },
        },
      };

      const result = await dynamoClient.send(new PutItemCommand(dynamoParams));
      return NextResponse.json({
        message: "Category created in DynamoDB",
        result,
      });
    } else {
      // Prisma insert
      const subgroupIdInt = parseInt(subGroupId);
      if (isNaN(subgroupIdInt)) {
        return NextResponse.json(
          { message: "Invalid 'subGroupId'. Must be a number." },
          { status: 400 }
        );
      }

      const newCategory = await database.tblcategory.create({
        data: { category, description, subgroupId: subgroupIdInt },
      });

      return NextResponse.json({
        message: "Category created successfully",
        newCategory,
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating category",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
