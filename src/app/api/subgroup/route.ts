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

// Método GET: Obtener subGrupos
export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");
  const group = searchParams.get("groupId");

  // Validación de parámetros
  if (!db || !group) {
    return NextResponse.json({ message: "Database type and groupId are required" }, { status: 400 });
  }

  const groupIdInt = parseInt(group);
  if (isNaN(groupIdInt)) {
    return NextResponse.json({ message: "Invalid groupId format. Must be a number." }, { status: 400 });
  }

  const database = getDatabase(db); // Asegúrate de que esta función devuelve la conexión correcta

  try {
    if (db === "dynamodb") {
      // Implementación de DynamoDB (debes usar la API de DynamoDB aquí si es necesario)
      return NextResponse.json({ message: "DynamoDB GET not implemented yet" }, { status: 501 });
    }

    // Consulta en Prisma para obtener subgrupos
    const subgroup = await database.tblsubgroup.findMany({
      where: { groupId: groupIdInt },
    });
    
    // Verifica si no se encontraron subgrupos
    if (subgroup.length === 0) {
      return NextResponse.json({ message: "No subgroups found for the specified groupId" }, { status: 404 });
    }

    // Devuelve los subgrupos encontrados
    return NextResponse.json({ subgroup });
  } catch (error) {
    console.error("Error fetching subgroups:", error);
    return NextResponse.json({ message: "Error fetching subgroups", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}


// Método POST: Crear un nuevo subgrupo
export async function POST(request: {
  url: string | URL;
  json: () => unknown;
}) {
  try {
    const { searchParams } = new URL(request.url);
    const db = searchParams.get("db");
    const groupId = searchParams.get("groupId");

    if (!db || !groupId) {
      return NextResponse.json(
        { message: "Both 'db' and 'groupId' query parameters are required" },
        { status: 400 }
      );
    }

    const { subgroup, description, image } = (await request.json()) as {
      subgroup: string;
      description: string;
      image: string;
    };

    if (!subgroup || !description || !image) {
      return NextResponse.json(
        { message: "All fields (subgroup, description, image) are required" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);

    if (db === "dynamodb") {
      const dynamoParams = {
        TableName: "tblsubgroup",
        Item: {
          id: { S: groupId },
          subgroup: { S: subgroup },
          description: { S: description },
          image: { S: image },
          groupId: { N: groupId },
        },
      };

      const result = await dynamoClient.send(
        new UpdateItemCommand(dynamoParams)
      );
      return NextResponse.json({
        message: "Subgroup created in DynamoDB",
        result,
      });
    } else {
      const groupIdInt = parseInt(groupId);
      if (isNaN(groupIdInt)) {
        return NextResponse.json(
          { message: "Invalid groupId. Must be a number." },
          { status: 400 }
        );
      }

      const newSubGroup = await database.tblsubgroup.create({
        data: { subgroup, description, image, groupId: groupIdInt },
      });

      return NextResponse.json({
        message: "Subgroup created successfully",
        newSubGroup,
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error creating subgroup",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
