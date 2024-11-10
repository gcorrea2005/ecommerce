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


export async function GET(request: { url: string | URL }) {
  const { searchParams, pathname } = new URL(request.url);

  // Extraer los parámetros de búsqueda y el `subgroupId` de la URL
  const db = searchParams.get("db");
  const groupId = searchParams.get("groupId");

  // Extraer `subgroupId` desde el pathname
  const pathSegments = pathname.split("/");
  const subgroupId = pathSegments[pathSegments.length - 1]; // Último segmento en la ruta

  console.log("GET(I): ---",db,groupId,subgroupId);

  // Validación de parámetros
  if (!db || !groupId || !subgroupId) {
    return NextResponse.json(
      { message: "Database type, groupId, and subgroupId are required" },
      { status: 400 }
    );
  }

  const groupIdInt = parseInt(groupId);
  const subgroupIdInt = parseInt(subgroupId);

  if (isNaN(groupIdInt) || isNaN(subgroupIdInt)) {
    return NextResponse.json(
      { message: "Invalid groupId or subgroupId format. Both must be numbers." },
      { status: 400 }
    );
  }

  const database = getDatabase(db); // Asegúrate de que esta función devuelve la conexión correcta

  try {
    if (db === "dynamodb") {
      // Implementación para DynamoDB si es necesario
      return NextResponse.json(
        { message: "DynamoDB GET not implemented yet" },
        { status: 501 }
      );
    }

    // Consulta en Prisma para obtener un subgrupo específico
    const subgroup = await database.tblsubgroup.findUnique({
      where: {
        id: subgroupIdInt,
        groupId: groupIdInt,
      },
    });

    // Verifica si el subgrupo no se encontró
    if (!subgroup) {
      return NextResponse.json(
        { message: "Subgroup not found for the specified groupId and id" },
        { status: 404 }
      );
    }

    // Devuelve el subgrupo encontrado
    return NextResponse.json({ subgroup });
  } catch (error) {
    console.error("Error fetching subgroup:", error);
    return NextResponse.json(
      {
        message: "Error fetching subgroup",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}



export async function DELETE(request: { url: string | URL }) {
  const { searchParams, pathname } = new URL(request.url);

  // Extraer los parámetros de búsqueda y el `subgroupId` de la URL
  const db = searchParams.get("db");
  const groupId = searchParams.get("groupId");

  // Extraer `subgroupId` desde el pathname
  const pathSegments = pathname.split("/");
  const subgroupId = pathSegments[pathSegments.length - 1]; // Último segmento en la ruta

  console.log("GET(I): ---",db,groupId,subgroupId);

  // Validación de parámetros
  if (!db || !groupId || !subgroupId) {
    return NextResponse.json(
      { message: "Database type, groupId, and subgroupId are required" },
      { status: 400 }
    );
  }

  const groupIdInt = parseInt(groupId);
  const subgroupIdInt = parseInt(subgroupId);

  if (isNaN(groupIdInt) || isNaN(subgroupIdInt)) {
    return NextResponse.json(
      { message: "Invalid groupId or subgroupId format. Both must be numbers." },
      { status: 400 }
    );
  }

  const database = getDatabase(db); // Asegúrate de que esta función devuelve la conexión correcta

  try {
    if (db === "dynamodb") {
      // Implementación para DynamoDB si es necesario
      return NextResponse.json(
        { message: "DynamoDB DELETE not implemented yet" },
        { status: 501 }
      );
    }

    // Consulta en Prisma para eliminar un subgrupo específico
    const deletedSubgroup = await database.tblsubgroup.deleteMany({
      where: {
        id: subgroupIdInt,
        groupId: groupIdInt,
      },
    });

    // Verifica si se eliminó el subgrupo
    if (deletedSubgroup.count === 0) {
      return NextResponse.json(
        { message: "Subgroup not found or already deleted" },
        { status: 404 }
      );
    }

    // Devuelve un mensaje de éxito
    return NextResponse.json({ message: "Subgroup deleted successfully" });
  } catch (error) {
    console.error("Error deleting subgroup:", error);
    return NextResponse.json(
      {
        message: "Error deleting subgroup",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}



export async function PUT(request: { url: string | URL, json: () => unknown }) {
  try {
    const { searchParams } = new URL(request.url);
    const db = searchParams.get("db");
    const groupId = searchParams.get("groupId");
    const id = parseInt(request.url.split("/").pop() || "");

    if (!db || !groupId || isNaN(id)) {
      return NextResponse.json(
        { message: "Both 'db', 'groupId', and valid 'id' are required" },
        { status: 400 }
      );
    }

    const data = (await request.json()) as {
      subgroup?: string;
      description?: string;
      image?: string;
    };
    const { subgroup, description, image } = data;

    // Check for at least one field to update
    if (!subgroup && !description && !image) {
      return NextResponse.json(
        { message: "At least one field (subgroup, description, image) must be provided" },
        { status: 400 }
      );
    }

    const database = getDatabase(db);
    const groupIdInt = parseInt(groupId);

    if (db === "dynamodb") {
      // Implementación de DynamoDB si es necesario
      return NextResponse.json(
        { message: "DynamoDB PUT not implemented yet" },
        { status: 501 }
      );
    }

    // Update record in Prisma-compatible databases
    const updatedSubGroup = await database.tblsubgroup.update({
      where: { id: id },
      data: {
        subgroup: subgroup || undefined,
        description: description || undefined,
        image: image || undefined,
        groupId: groupIdInt,
      },
    });

    return NextResponse.json({
      message: "Subgroup updated successfully",
      updatedSubGroup,
    });
  } catch (error) {
    console.error("Error updating subgroup:", error);
    return NextResponse.json(
      {
        message: "Error updating subgroup",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}




// Función para manejar errores
function handleError(error: unknown) {
  console.error(error);
  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : "Internal Server Error",
    },
    { status: 500 }
  );
}
