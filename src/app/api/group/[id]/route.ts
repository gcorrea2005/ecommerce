import { sqlitePrisma as sqlitePrisma } from "@/libs/prisma"; // Prisma para SQLite
import { mysqlPrisma as mysqlPrisma } from "@/libs/prisma"; // Prisma para MySQL
import { DynamoDBClient, PutItemCommand, DeleteItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB
import { NextResponse } from "next/server";

// Cliente de DynamoDB
const dynamoClient = new DynamoDBClient({ region: "us-west-2" });

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

// Método GET para obtener un solo registro por ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const database = getDatabase(db);
    let group;

    if (db === "dynamodb") {
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      const result = await dynamoClient.send(new GetItemCommand(dynamoParams));
      group = result.Item;
      if (!group) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }
    } else {
      group = await database.tblgroup.findUnique({
        where: { id: parseInt(id) },
      });
      if (!group) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }
    }

    return NextResponse.json(group);
  } catch (error) {
    return handleError(error);
  }
}

// Método POST para crear un nuevo registro
export async function POST(request: {
  json: () =>
    | PromiseLike<{ db: unknown; group: unknown; description: unknown; image: unknown }>
    | { db: unknown; group: unknown; description: unknown; image: unknown };
}) {
  const { db, group, description, image } = await request.json();

  if (!db || !group || !description || !image) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      const dynamoParams = {
        TableName: "tblgroup",
        Item: {
          id: { S: `${Date.now()}` }, // Generar un ID único
          group: { S: group },
          description: { S: description },
          image: { S: image },
        },
      };
      await dynamoClient.send(new PutItemCommand(dynamoParams));
      return NextResponse.json({ message: "Item added to DynamoDB" });
    } else {
      const newGroup = await database.tblgroup.create({
        data: { group, description, image },
      });
      return NextResponse.json(newGroup);
    }
  } catch (error) {
    return handleError(error);
  }
}

// Método PUT para actualizar un registro existente
export async function PUT(request: {
  json: () =>
    | PromiseLike<{ db: unknown; id: number; group: string; description: string; image: string }>
    | { db: unknown; id: number; group: string; description: string; image: string };
}) {
  const { db, id, group, description, image } = await request.json();

  if (!db || !id || !group || !description || !image) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id.toString() } },
      };
      const existingItem = await dynamoClient.send(new GetItemCommand(dynamoParams));
      if (!existingItem.Item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Actualizar el item en DynamoDB
      const updateParams = {
        TableName: "tblgroup",
        Key: { id: { S: id.toString() } },
        UpdateExpression: "SET #group = :group, #description = :description, #image = :image",
        ExpressionAttributeNames: {
          "#group": "group",
          "#description": "description",
          "#image": "image",
        },
        ExpressionAttributeValues: {
          ":group": { S: group },
          ":description": { S: description },
          ":image": { S: image },
        },
      };
      await dynamoClient.send(new UpdateItemCommand(updateParams));
      return NextResponse.json({ message: "Item updated in DynamoDB" });
    } else {
      const existingGroup = await database.tblgroup.findUnique({
        where: { id: parseInt(id) },
      });
      if (!existingGroup) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      const updatedGroup = await database.tblgroup.update({
        where: { id: parseInt(id) },
        data: { group, description, image },
      });
      return NextResponse.json(updatedGroup);
    }
  } catch (error) {
    return handleError(error);
  }
}

// Método DELETE para eliminar un registro
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Comprobar si el item existe
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      const existingItem = await dynamoClient.send(new GetItemCommand(dynamoParams));
      if (!existingItem.Item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Eliminar el item en DynamoDB
      const deleteParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      await dynamoClient.send(new DeleteItemCommand(deleteParams));
    } else {
      // Verificar si el grupo existe en SQLite o MySQL
      const existingGroup = await database.tblgroup.findUnique({
        where: { id: parseInt(id) },
      });
      if (!existingGroup) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Eliminar el grupo en SQLite o MySQL
      await database.tblgroup.delete({ where: { id: parseInt(id) } });
    }

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return handleError(error);
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
