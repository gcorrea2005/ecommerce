Archivo completo que incluye la implementación de las operaciones CRUD para manejar productos en SQLite, MySQL y DynamoDB. Este archivo se colocaría en la ruta /app/api/products/[id]/route.js.

Archivo Completo: app/api/products/[id]/route.js
javascript
Copiar código
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
Descripción de las Funciones CRUD
GET: Obtiene un producto específico por su ID de la base de datos seleccionada (SQLite, MySQL o DynamoDB).

POST: Agrega un nuevo producto a la base de datos seleccionada.

PUT: Actualiza un producto existente por su ID en la base de datos seleccionada.

DELETE: Elimina un producto existente por su ID en la base de datos seleccionada.

Consideraciones Adicionales
Prisma: Asegúrate de que tus modelos en Prisma estén correctamente configurados para SQLite y MySQL. La tabla en DynamoDB también debe estar configurada con los atributos apropiados.

Configuración de AWS: Verifica que tu entorno esté configurado con las credenciales de AWS necesarias para acceder a DynamoDB.

Validaciones: Considera agregar validaciones para la entrada de datos, especialmente para los campos requeridos.

Manejo de Errores: El manejo de errores es básico; puedes mejorarlo según las necesidades de tu aplicación.

Ejemplo de Solicitudes
Obtener un Producto:

http
Copiar código
GET /api/products/123?db=sqlite
Agregar un Producto:

http
Copiar código
POST /api/products
Content-Type: application/json

{
  "db": "mysql",
  "name": "Product Name",
  "price": 100,
  "stock": 50,
  "image": "image-url"
}
Actualizar un Producto:

http
Copiar código
PUT /api/products/123
Content-Type: application/json

{
  "db": "dynamodb",
  "name": "Updated Product Name",
  "price": 120,
  "stock": 60,
  "image": "updated-image-url"
}
Eliminar un Producto:

http
Copiar código
DELETE /api/products/123?db=sqlite
Con este archivo, tienes una API completa que puede manejar productos en tres bases de datos diferentes. ¡Buena suerte con tu desarrollo!