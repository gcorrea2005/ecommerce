import { PrismaClient as SqliteClient } from '../generated/sqlite-client';
import { PrismaClient as MysqlClient } from '../generated/mysql-client';
// Importa el cliente de DynamoDB si lo necesitas

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var sqlitePrisma: SqliteClient | undefined;
  var mysqlPrisma: MysqlClient | undefined;
  var dynamodbPrisma: DynamoDBClient | undefined; // Descomentar si usas DynamoDB
}

export const sqlitePrisma = global.sqlitePrisma || new SqliteClient();
export const mysqlPrisma = global.mysqlPrisma || new MysqlClient();
// export const dynamodbPrisma = global.dynamodbPrisma || new DynamoDBClient(); // Descomentar si usas DynamoDB

if (process.env.NODE_ENV !== 'production') {
  global.sqlitePrisma = sqlitePrisma;
  global.mysqlPrisma = mysqlPrisma;
  // global.dynamodbPrisma = dynamodbPrisma; // Descomentar si usas DynamoDB
}
