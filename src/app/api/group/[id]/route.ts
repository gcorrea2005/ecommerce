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

// Método GET para obtener un registro por ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");

  // Extract the `id` from the URL path `/group/:id`
  const urlParts = request.url.split("/");
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Fetch the item from DynamoDB
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      const item = await dynamoClient.send(new GetItemCommand(dynamoParams));
      if (!item.Item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Transform the DynamoDB item to a plain JavaScript object
      const groupData = {
        id: item.Item.id.S,
        group: item.Item.group.S,
        description: item.Item.description.S,
        image: item.Item.image?.S || null,
      };

      return NextResponse.json(groupData);
    } else {
      // Parse `id` as an integer for SQL-based databases
      const groupId = parseInt(id);
      if (isNaN(groupId)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
      }

      // Fetch the group from SQLite or MySQL
      const group = await database.tblgroup.findUnique({
        where: { id: groupId },
      });

      if (!group) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      return NextResponse.json(group);
    }
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json(
      { message: "Failed to fetch item", error: error.message },
      { status: 500 }
    );
  }
}


// Método PUT para actualizar un registro
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");

  // Extract the `id` from the URL path `/group/:id`
  const urlParts = request.url.split("/");
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const body = await request.json();
  const { group, description, image } = body;

  if (!group || !description) {
    return NextResponse.json(
      { message: "Group name and description are required" },
      { status: 400 }
    );
  }

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Check if the item exists in DynamoDB
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      const existingItem = await dynamoClient.send(new GetItemCommand(dynamoParams));
      if (!existingItem.Item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Update the item in DynamoDB
      const updateParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
        UpdateExpression: "SET #group = :group, description = :description, image = :image",
        ExpressionAttributeNames: { "#group": "group" },
        ExpressionAttributeValues: {
          ":group": { S: group },
          ":description": { S: description },
          ":image": { S: image ?? "" },
        },
      };
      await dynamoClient.send(new UpdateItemCommand(updateParams));
    } else {
      // Parse `id` as an integer for SQL-based databases
      const groupId = parseInt(id);
      if (isNaN(groupId)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
      }

      // Check if the group exists in SQLite or MySQL
      const existingGroup = await database.tblgroup.findUnique({
        where: { id: groupId },
      });
      if (!existingGroup) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Update the group in SQLite or MySQL
      await database.tblgroup.update({
        where: { id: groupId },
        data: { group, description, image },
      });
    }

    // Return success response
    return NextResponse.json({ message: "Item updated successfully" });
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { message: "Failed to update item", error: error.message },
      { status: 500 }
    );
  }
}


// Método DELETE para eliminar un registro
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const db = searchParams.get("db");

  // Extract the `id` from the URL path `/group/:id`
  const urlParts = request.url.split("/");
  const id = urlParts[urlParts.length - 1];

  console.log("urlParts: ", urlParts);

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }
  console.log("Delete -- id: ", id);

  try {
    const database = getDatabase(db);

    if (db === "dynamodb") {
      // Check if the item exists in DynamoDB
      const dynamoParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      const existingItem = await dynamoClient.send(new GetItemCommand(dynamoParams));
      if (!existingItem.Item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Delete the item in DynamoDB
      const deleteParams = {
        TableName: "tblgroup",
        Key: { id: { S: id } },
      };
      await dynamoClient.send(new DeleteItemCommand(deleteParams));
    } else {
      // Parse `id` as an integer for SQL-based databases
      const groupId = parseInt(id);
      if (isNaN(groupId)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
      }

      // Check if the group exists in SQLite or MySQL
      const existingGroup = await database.tblgroup.findUnique({
        where: { id: groupId },
      });
      if (!existingGroup) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
      }

      // Delete the group in SQLite or MySQL
      await database.tblgroup.delete({ where: { id: groupId } });
    }

    // Return success response
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json({ message: "Failed to delete item", error: error.message }, { status: 500 });
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
