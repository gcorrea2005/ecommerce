// import { NextResponse } from "next/server";
// import { prisma } from "@/libs/prisma";
// import { Prisma } from "@prisma/client";

// interface Params {
//   params: { id: string };
// }

// export async function GET(request: Request, { params }: Params) {
//   try {
//     const product = await prisma.product.findUnique({
//       where: {
//         id: Number(params.id),
//       },
//     });
//     if (!product) {
//       return NextResponse.json(
//         { message: "Product not found" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json(product);
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

// export async function DELETE(request: Request, { params }: Params) {
//   try {
//     const deleteProduct = await prisma.product.delete({
//       where: {
//         id: Number(params.id),
//       },
//     });
//     if (!deleteProduct) {
//       return NextResponse.json(
//         { message: "Product not found" },
//         { status: 404 }
//       );
//     }
//     return NextResponse.json(deleteProduct);
//   } catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === "P2025") {
//         return NextResponse.json(
//           { message: "Product not found" },
//           { status: 404 }
//         );
//       }
//       return NextResponse.json(
//         {
//           message: error.message,
//         },
//         { status: 500 }
//       );
//     }
//   }
// }

// export async function PUT(request: Request, { params }: Params) {
//   try {
//     const { name, price, stock, image } = await request.json();
//     const updateProduct = await prisma.product.update({
//       where: {
//         id: Number(params.id),
//       },
//       data: {
//         name,
//         price,
//         stock,
//         image,
//       },
//     });
//     return NextResponse.json(updateProduct);
//   } catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       if (error.code === "P2025") {
//         return NextResponse.json(
//           { message: "Product not found" },
//           { status: 404 }
//         );
//       }
//       return NextResponse.json(
//         {
//           message: error.message,
//         },
//         { status: 500 }
//       );
//     }
//   }
// }


import { prisma as sqlitePrisma } from "@/libs/prisma/sqlite"; // Prisma para SQLite
import { prisma as mysqlPrisma } from "@/libs/prisma/mysql"; // Prisma para MySQL
import { DynamoDBClient, PutItemCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb"; // AWS SDK para DynamoDB
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

// Obtener un producto por ID
export async function GET(request, { params }) {
  const { id } = params; // ID del producto
  const { searchParams } = new URL(request.url);
  const db = searchParams.get('db'); // Base de datos seleccionada

  try {
    const database = getDatabase(db);
    let product;

    if (db === 'dynamodb') {
      // Obtener producto de DynamoDB
      const dynamoParams = {
        TableName: "Products",
        Key: {
          id: { S: id },
        },
      };
      const result = await dynamoClient.send(new GetItemCommand(dynamoParams));
      product = result.Item ? {
        id: id,
        name: result.Item.name.S,
        price: parseFloat(result.Item.price.N),
        stock: parseInt(result.Item.stock.N, 10),
        image: result.Item.image.S,
      } : null;
    } else {
      product = await database.product.findUnique({
        where: { id: Number(id) }, // Asegúrate de que el ID es del tipo correcto
      });
    }

    return NextResponse.json({ product });
  } catch (error) {
    return handleError(error);
  }
}

// Agregar un nuevo producto
export async function POST(request) {
  const { db, name, price, stock, image } = await request.json(); // Obtén los datos del cuerpo de la solicitud

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

// Actualizar un producto por ID
export async function PUT(request, { params }) {
  const { id } = params;
  const { db, name, price, stock, image } = await request.json(); // Datos para actualizar

  try {
    const database = getDatabase(db);

    if (db === 'dynamodb') {
      const dynamoParams = {
        TableName: "Products",
        Key: {
          id: { S: id },
        },
        UpdateExpression: "SET #name = :name, #price = :price, #stock = :stock, #image = :image",
        ExpressionAttributeNames: {
          "#name": "name",
          "#price": "price",
          "#stock": "stock",
          "#image": "image",
        },
        ExpressionAttributeValues: {
          ":name": { S: name },
          ":price": { N: price.toString() },
          ":stock": { N: stock.toString() },
          ":image": { S: image },
        },
      };
      await dynamoClient.send(new UpdateItemCommand(dynamoParams));

      return NextResponse.json({ message: "Product updated in DynamoDB" });
    } else {
      const updatedProduct = await database.product.update({
        where: { id: Number(id) },
        data: { name, price, stock, image },
      });

      return NextResponse.json(updatedProduct);
    }
  } catch (error) {
    return handleError(error);
  }
}

// Eliminar un producto por ID
export async function DELETE(request, { params }) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  const db = searchParams.get('db'); // Base de datos seleccionada

  try {
    const database = getDatabase(db);

    if (db === 'dynamodb') {
      const dynamoParams = {
        TableName: "Products",
        Key: {
          id: { S: id },
        },
      };
      await dynamoClient.send(new DeleteItemCommand(dynamoParams));

      return NextResponse.json({ message: "Product deleted from DynamoDB" });
    } else {
      await database.product.delete({
        where: { id: Number(id) },
      });

      return NextResponse.json({ message: "Product deleted" });
    }
  } catch (error) {
    return handleError(error);
  }
}

// Manejo de errores
function handleError(error) {
  console.error(error);
  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : 'Internal Server Error',
    },
    { status: 500 }
  );
}

