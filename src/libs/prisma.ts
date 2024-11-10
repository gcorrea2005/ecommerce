import { PrismaClient as SqliteClient } from '../../generated/sqlite-client';
import { PrismaClient as MysqlClient } from '../../generated/mysql-client';
// import { PrismaClient as DynamodbClient } from '../../generated/dynamodb-client';

const sqliteClientSingleton = () => new SqliteClient();
const mysqlClientSingleton = () => new MysqlClient();
// const dynamodbClientSingleton = () => new DynamodbClient();

declare const globalThis: {
  sqliteGlobal?: ReturnType<typeof sqliteClientSingleton>;
  mysqlGlobal?: ReturnType<typeof mysqlClientSingleton>;
  // dynamodbGlobal?: ReturnType<typeof dynamodbClientSingleton>;
} & typeof global;

// Initialize clients with singleton pattern
const sqliteClient = globalThis.sqliteGlobal ?? sqliteClientSingleton();
const mysqlClient = globalThis.mysqlGlobal ?? mysqlClientSingleton();
// const dynamodbClient = globalThis.dynamodbGlobal ?? dynamodbClientSingleton();

// Set global instances for development mode
if (process.env.NODE_ENV !== 'production') {
  globalThis.sqliteGlobal = sqliteClient;
  globalThis.mysqlGlobal = mysqlClient;
  // globalThis.dynamodbGlobal = dynamodbClient;
}

export { sqliteClient, mysqlClient };
