import { PrismaClient as SqliteClient } from '../../generated/sqlite-client';
import { PrismaClient as MysqlClient } from '../../generated/mysql-client';
// import { DynamoDBClient } from '@aws-sdk/client-dynamodb'; // Only if needed

declare global {
  // allow global `var` declarations
  let sqlitePrisma: SqliteClient | undefined;
  let mysqlPrisma:  MysqlClient  | undefined;
  // var dynamodbPrisma: DynamoDBClient | undefined; // Descomentar si usas DynamoDB
}

export const sqlitePrisma = global.sqlitePrisma || new SqliteClient();
export const mysqlPrisma = global.mysqlPrisma || new MysqlClient();
// export const dynamodbPrisma = global.dynamodbPrisma || new DynamoDBClient(); // Descomentar si usas DynamoDB

if (process.env.NODE_ENV !== 'production') {
  global.sqlitePrisma = sqlitePrisma;
  global.mysqlPrisma  = mysqlPrisma;
  // global.dynamodbPrisma = dynamodbPrisma; // Descomentar si usas DynamoDB
}
