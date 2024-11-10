
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tblgroup
 * 
 */
export type tblgroup = $Result.DefaultSelection<Prisma.$tblgroupPayload>
/**
 * Model tblsubgroup
 * 
 */
export type tblsubgroup = $Result.DefaultSelection<Prisma.$tblsubgroupPayload>
/**
 * Model tblcategory
 * 
 */
export type tblcategory = $Result.DefaultSelection<Prisma.$tblcategoryPayload>
/**
 * Model tblproduct
 * 
 */
export type tblproduct = $Result.DefaultSelection<Prisma.$tblproductPayload>
/**
 * Model tblrole
 * 
 */
export type tblrole = $Result.DefaultSelection<Prisma.$tblrolePayload>
/**
 * Model tbluser
 * 
 */
export type tbluser = $Result.DefaultSelection<Prisma.$tbluserPayload>
/**
 * Model tblorder
 * 
 */
export type tblorder = $Result.DefaultSelection<Prisma.$tblorderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tblgroups
 * const tblgroups = await prisma.tblgroup.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tblgroups
   * const tblgroups = await prisma.tblgroup.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tblgroup`: Exposes CRUD operations for the **tblgroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblgroups
    * const tblgroups = await prisma.tblgroup.findMany()
    * ```
    */
  get tblgroup(): Prisma.tblgroupDelegate<ExtArgs>;

  /**
   * `prisma.tblsubgroup`: Exposes CRUD operations for the **tblsubgroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblsubgroups
    * const tblsubgroups = await prisma.tblsubgroup.findMany()
    * ```
    */
  get tblsubgroup(): Prisma.tblsubgroupDelegate<ExtArgs>;

  /**
   * `prisma.tblcategory`: Exposes CRUD operations for the **tblcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblcategories
    * const tblcategories = await prisma.tblcategory.findMany()
    * ```
    */
  get tblcategory(): Prisma.tblcategoryDelegate<ExtArgs>;

  /**
   * `prisma.tblproduct`: Exposes CRUD operations for the **tblproduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblproducts
    * const tblproducts = await prisma.tblproduct.findMany()
    * ```
    */
  get tblproduct(): Prisma.tblproductDelegate<ExtArgs>;

  /**
   * `prisma.tblrole`: Exposes CRUD operations for the **tblrole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblroles
    * const tblroles = await prisma.tblrole.findMany()
    * ```
    */
  get tblrole(): Prisma.tblroleDelegate<ExtArgs>;

  /**
   * `prisma.tbluser`: Exposes CRUD operations for the **tbluser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblusers
    * const tblusers = await prisma.tbluser.findMany()
    * ```
    */
  get tbluser(): Prisma.tbluserDelegate<ExtArgs>;

  /**
   * `prisma.tblorder`: Exposes CRUD operations for the **tblorder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tblorders
    * const tblorders = await prisma.tblorder.findMany()
    * ```
    */
  get tblorder(): Prisma.tblorderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tblgroup: 'tblgroup',
    tblsubgroup: 'tblsubgroup',
    tblcategory: 'tblcategory',
    tblproduct: 'tblproduct',
    tblrole: 'tblrole',
    tbluser: 'tbluser',
    tblorder: 'tblorder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tblgroup" | "tblsubgroup" | "tblcategory" | "tblproduct" | "tblrole" | "tbluser" | "tblorder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tblgroup: {
        payload: Prisma.$tblgroupPayload<ExtArgs>
        fields: Prisma.tblgroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblgroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblgroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          findFirst: {
            args: Prisma.tblgroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblgroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          findMany: {
            args: Prisma.tblgroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>[]
          }
          create: {
            args: Prisma.tblgroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          createMany: {
            args: Prisma.tblgroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblgroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          update: {
            args: Prisma.tblgroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          deleteMany: {
            args: Prisma.tblgroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblgroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblgroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblgroupPayload>
          }
          aggregate: {
            args: Prisma.TblgroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblgroup>
          }
          groupBy: {
            args: Prisma.tblgroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblgroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblgroupCountArgs<ExtArgs>
            result: $Utils.Optional<TblgroupCountAggregateOutputType> | number
          }
        }
      }
      tblsubgroup: {
        payload: Prisma.$tblsubgroupPayload<ExtArgs>
        fields: Prisma.tblsubgroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblsubgroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblsubgroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          findFirst: {
            args: Prisma.tblsubgroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblsubgroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          findMany: {
            args: Prisma.tblsubgroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>[]
          }
          create: {
            args: Prisma.tblsubgroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          createMany: {
            args: Prisma.tblsubgroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblsubgroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          update: {
            args: Prisma.tblsubgroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          deleteMany: {
            args: Prisma.tblsubgroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblsubgroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblsubgroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblsubgroupPayload>
          }
          aggregate: {
            args: Prisma.TblsubgroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblsubgroup>
          }
          groupBy: {
            args: Prisma.tblsubgroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblsubgroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblsubgroupCountArgs<ExtArgs>
            result: $Utils.Optional<TblsubgroupCountAggregateOutputType> | number
          }
        }
      }
      tblcategory: {
        payload: Prisma.$tblcategoryPayload<ExtArgs>
        fields: Prisma.tblcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          findFirst: {
            args: Prisma.tblcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          findMany: {
            args: Prisma.tblcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>[]
          }
          create: {
            args: Prisma.tblcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          createMany: {
            args: Prisma.tblcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          update: {
            args: Prisma.tblcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          deleteMany: {
            args: Prisma.tblcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblcategoryPayload>
          }
          aggregate: {
            args: Prisma.TblcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblcategory>
          }
          groupBy: {
            args: Prisma.tblcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TblcategoryCountAggregateOutputType> | number
          }
        }
      }
      tblproduct: {
        payload: Prisma.$tblproductPayload<ExtArgs>
        fields: Prisma.tblproductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblproductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblproductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          findFirst: {
            args: Prisma.tblproductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblproductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          findMany: {
            args: Prisma.tblproductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>[]
          }
          create: {
            args: Prisma.tblproductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          createMany: {
            args: Prisma.tblproductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblproductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          update: {
            args: Prisma.tblproductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          deleteMany: {
            args: Prisma.tblproductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblproductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblproductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblproductPayload>
          }
          aggregate: {
            args: Prisma.TblproductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblproduct>
          }
          groupBy: {
            args: Prisma.tblproductGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblproductGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblproductCountArgs<ExtArgs>
            result: $Utils.Optional<TblproductCountAggregateOutputType> | number
          }
        }
      }
      tblrole: {
        payload: Prisma.$tblrolePayload<ExtArgs>
        fields: Prisma.tblroleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblroleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblroleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          findFirst: {
            args: Prisma.tblroleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblroleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          findMany: {
            args: Prisma.tblroleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>[]
          }
          create: {
            args: Prisma.tblroleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          createMany: {
            args: Prisma.tblroleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblroleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          update: {
            args: Prisma.tblroleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          deleteMany: {
            args: Prisma.tblroleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblroleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblroleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblrolePayload>
          }
          aggregate: {
            args: Prisma.TblroleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblrole>
          }
          groupBy: {
            args: Prisma.tblroleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblroleGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblroleCountArgs<ExtArgs>
            result: $Utils.Optional<TblroleCountAggregateOutputType> | number
          }
        }
      }
      tbluser: {
        payload: Prisma.$tbluserPayload<ExtArgs>
        fields: Prisma.tbluserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbluserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbluserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          findFirst: {
            args: Prisma.tbluserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbluserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          findMany: {
            args: Prisma.tbluserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>[]
          }
          create: {
            args: Prisma.tbluserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          createMany: {
            args: Prisma.tbluserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tbluserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          update: {
            args: Prisma.tbluserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          deleteMany: {
            args: Prisma.tbluserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbluserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tbluserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbluserPayload>
          }
          aggregate: {
            args: Prisma.TbluserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbluser>
          }
          groupBy: {
            args: Prisma.tbluserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TbluserGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbluserCountArgs<ExtArgs>
            result: $Utils.Optional<TbluserCountAggregateOutputType> | number
          }
        }
      }
      tblorder: {
        payload: Prisma.$tblorderPayload<ExtArgs>
        fields: Prisma.tblorderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblorderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblorderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          findFirst: {
            args: Prisma.tblorderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblorderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          findMany: {
            args: Prisma.tblorderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>[]
          }
          create: {
            args: Prisma.tblorderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          createMany: {
            args: Prisma.tblorderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblorderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          update: {
            args: Prisma.tblorderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          deleteMany: {
            args: Prisma.tblorderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblorderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblorderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblorderPayload>
          }
          aggregate: {
            args: Prisma.TblorderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblorder>
          }
          groupBy: {
            args: Prisma.tblorderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblorderGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblorderCountArgs<ExtArgs>
            result: $Utils.Optional<TblorderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TblgroupCountOutputType
   */

  export type TblgroupCountOutputType = {
    subgroups: number
  }

  export type TblgroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subgroups?: boolean | TblgroupCountOutputTypeCountSubgroupsArgs
  }

  // Custom InputTypes
  /**
   * TblgroupCountOutputType without action
   */
  export type TblgroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblgroupCountOutputType
     */
    select?: TblgroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblgroupCountOutputType without action
   */
  export type TblgroupCountOutputTypeCountSubgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblsubgroupWhereInput
  }


  /**
   * Count Type TblsubgroupCountOutputType
   */

  export type TblsubgroupCountOutputType = {
    categories: number
  }

  export type TblsubgroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TblsubgroupCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TblsubgroupCountOutputType without action
   */
  export type TblsubgroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblsubgroupCountOutputType
     */
    select?: TblsubgroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblsubgroupCountOutputType without action
   */
  export type TblsubgroupCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblcategoryWhereInput
  }


  /**
   * Count Type TblcategoryCountOutputType
   */

  export type TblcategoryCountOutputType = {
    products: number
  }

  export type TblcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | TblcategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * TblcategoryCountOutputType without action
   */
  export type TblcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblcategoryCountOutputType
     */
    select?: TblcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblcategoryCountOutputType without action
   */
  export type TblcategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblproductWhereInput
  }


  /**
   * Count Type TblproductCountOutputType
   */

  export type TblproductCountOutputType = {
    orders: number
  }

  export type TblproductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TblproductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TblproductCountOutputType without action
   */
  export type TblproductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblproductCountOutputType
     */
    select?: TblproductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblproductCountOutputType without action
   */
  export type TblproductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblorderWhereInput
  }


  /**
   * Count Type TblroleCountOutputType
   */

  export type TblroleCountOutputType = {
    subgroups: number
  }

  export type TblroleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subgroups?: boolean | TblroleCountOutputTypeCountSubgroupsArgs
  }

  // Custom InputTypes
  /**
   * TblroleCountOutputType without action
   */
  export type TblroleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblroleCountOutputType
     */
    select?: TblroleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblroleCountOutputType without action
   */
  export type TblroleCountOutputTypeCountSubgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbluserWhereInput
  }


  /**
   * Count Type TbluserCountOutputType
   */

  export type TbluserCountOutputType = {
    categories: number
  }

  export type TbluserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TbluserCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TbluserCountOutputType without action
   */
  export type TbluserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TbluserCountOutputType
     */
    select?: TbluserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TbluserCountOutputType without action
   */
  export type TbluserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblorderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tblgroup
   */

  export type AggregateTblgroup = {
    _count: TblgroupCountAggregateOutputType | null
    _avg: TblgroupAvgAggregateOutputType | null
    _sum: TblgroupSumAggregateOutputType | null
    _min: TblgroupMinAggregateOutputType | null
    _max: TblgroupMaxAggregateOutputType | null
  }

  export type TblgroupAvgAggregateOutputType = {
    id: number | null
  }

  export type TblgroupSumAggregateOutputType = {
    id: number | null
  }

  export type TblgroupMinAggregateOutputType = {
    id: number | null
    group: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TblgroupMaxAggregateOutputType = {
    id: number | null
    group: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TblgroupCountAggregateOutputType = {
    id: number
    group: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TblgroupAvgAggregateInputType = {
    id?: true
  }

  export type TblgroupSumAggregateInputType = {
    id?: true
  }

  export type TblgroupMinAggregateInputType = {
    id?: true
    group?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TblgroupMaxAggregateInputType = {
    id?: true
    group?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TblgroupCountAggregateInputType = {
    id?: true
    group?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TblgroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblgroup to aggregate.
     */
    where?: tblgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblgroups to fetch.
     */
    orderBy?: tblgroupOrderByWithRelationInput | tblgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblgroups
    **/
    _count?: true | TblgroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblgroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblgroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblgroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblgroupMaxAggregateInputType
  }

  export type GetTblgroupAggregateType<T extends TblgroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTblgroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblgroup[P]>
      : GetScalarType<T[P], AggregateTblgroup[P]>
  }




  export type tblgroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblgroupWhereInput
    orderBy?: tblgroupOrderByWithAggregationInput | tblgroupOrderByWithAggregationInput[]
    by: TblgroupScalarFieldEnum[] | TblgroupScalarFieldEnum
    having?: tblgroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblgroupCountAggregateInputType | true
    _avg?: TblgroupAvgAggregateInputType
    _sum?: TblgroupSumAggregateInputType
    _min?: TblgroupMinAggregateInputType
    _max?: TblgroupMaxAggregateInputType
  }

  export type TblgroupGroupByOutputType = {
    id: number
    group: string
    description: string | null
    image: string
    createdAt: Date
    updatedAt: Date
    _count: TblgroupCountAggregateOutputType | null
    _avg: TblgroupAvgAggregateOutputType | null
    _sum: TblgroupSumAggregateOutputType | null
    _min: TblgroupMinAggregateOutputType | null
    _max: TblgroupMaxAggregateOutputType | null
  }

  type GetTblgroupGroupByPayload<T extends tblgroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblgroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblgroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblgroupGroupByOutputType[P]>
            : GetScalarType<T[P], TblgroupGroupByOutputType[P]>
        }
      >
    >


  export type tblgroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subgroups?: boolean | tblgroup$subgroupsArgs<ExtArgs>
    _count?: boolean | TblgroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblgroup"]>


  export type tblgroupSelectScalar = {
    id?: boolean
    group?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tblgroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subgroups?: boolean | tblgroup$subgroupsArgs<ExtArgs>
    _count?: boolean | TblgroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblgroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblgroup"
    objects: {
      subgroups: Prisma.$tblsubgroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      group: string
      description: string | null
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tblgroup"]>
    composites: {}
  }

  type tblgroupGetPayload<S extends boolean | null | undefined | tblgroupDefaultArgs> = $Result.GetResult<Prisma.$tblgroupPayload, S>

  type tblgroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblgroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblgroupCountAggregateInputType | true
    }

  export interface tblgroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblgroup'], meta: { name: 'tblgroup' } }
    /**
     * Find zero or one Tblgroup that matches the filter.
     * @param {tblgroupFindUniqueArgs} args - Arguments to find a Tblgroup
     * @example
     * // Get one Tblgroup
     * const tblgroup = await prisma.tblgroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblgroupFindUniqueArgs>(args: SelectSubset<T, tblgroupFindUniqueArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblgroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblgroupFindUniqueOrThrowArgs} args - Arguments to find a Tblgroup
     * @example
     * // Get one Tblgroup
     * const tblgroup = await prisma.tblgroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblgroupFindUniqueOrThrowArgs>(args: SelectSubset<T, tblgroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblgroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupFindFirstArgs} args - Arguments to find a Tblgroup
     * @example
     * // Get one Tblgroup
     * const tblgroup = await prisma.tblgroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblgroupFindFirstArgs>(args?: SelectSubset<T, tblgroupFindFirstArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblgroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupFindFirstOrThrowArgs} args - Arguments to find a Tblgroup
     * @example
     * // Get one Tblgroup
     * const tblgroup = await prisma.tblgroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblgroupFindFirstOrThrowArgs>(args?: SelectSubset<T, tblgroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblgroups
     * const tblgroups = await prisma.tblgroup.findMany()
     * 
     * // Get first 10 Tblgroups
     * const tblgroups = await prisma.tblgroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblgroupWithIdOnly = await prisma.tblgroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblgroupFindManyArgs>(args?: SelectSubset<T, tblgroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblgroup.
     * @param {tblgroupCreateArgs} args - Arguments to create a Tblgroup.
     * @example
     * // Create one Tblgroup
     * const Tblgroup = await prisma.tblgroup.create({
     *   data: {
     *     // ... data to create a Tblgroup
     *   }
     * })
     * 
     */
    create<T extends tblgroupCreateArgs>(args: SelectSubset<T, tblgroupCreateArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblgroups.
     * @param {tblgroupCreateManyArgs} args - Arguments to create many Tblgroups.
     * @example
     * // Create many Tblgroups
     * const tblgroup = await prisma.tblgroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblgroupCreateManyArgs>(args?: SelectSubset<T, tblgroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblgroup.
     * @param {tblgroupDeleteArgs} args - Arguments to delete one Tblgroup.
     * @example
     * // Delete one Tblgroup
     * const Tblgroup = await prisma.tblgroup.delete({
     *   where: {
     *     // ... filter to delete one Tblgroup
     *   }
     * })
     * 
     */
    delete<T extends tblgroupDeleteArgs>(args: SelectSubset<T, tblgroupDeleteArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblgroup.
     * @param {tblgroupUpdateArgs} args - Arguments to update one Tblgroup.
     * @example
     * // Update one Tblgroup
     * const tblgroup = await prisma.tblgroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblgroupUpdateArgs>(args: SelectSubset<T, tblgroupUpdateArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblgroups.
     * @param {tblgroupDeleteManyArgs} args - Arguments to filter Tblgroups to delete.
     * @example
     * // Delete a few Tblgroups
     * const { count } = await prisma.tblgroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblgroupDeleteManyArgs>(args?: SelectSubset<T, tblgroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblgroups
     * const tblgroup = await prisma.tblgroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblgroupUpdateManyArgs>(args: SelectSubset<T, tblgroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblgroup.
     * @param {tblgroupUpsertArgs} args - Arguments to update or create a Tblgroup.
     * @example
     * // Update or create a Tblgroup
     * const tblgroup = await prisma.tblgroup.upsert({
     *   create: {
     *     // ... data to create a Tblgroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblgroup we want to update
     *   }
     * })
     */
    upsert<T extends tblgroupUpsertArgs>(args: SelectSubset<T, tblgroupUpsertArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupCountArgs} args - Arguments to filter Tblgroups to count.
     * @example
     * // Count the number of Tblgroups
     * const count = await prisma.tblgroup.count({
     *   where: {
     *     // ... the filter for the Tblgroups we want to count
     *   }
     * })
    **/
    count<T extends tblgroupCountArgs>(
      args?: Subset<T, tblgroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblgroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblgroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblgroupAggregateArgs>(args: Subset<T, TblgroupAggregateArgs>): Prisma.PrismaPromise<GetTblgroupAggregateType<T>>

    /**
     * Group by Tblgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblgroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblgroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblgroupGroupByArgs['orderBy'] }
        : { orderBy?: tblgroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblgroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblgroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblgroup model
   */
  readonly fields: tblgroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblgroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblgroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subgroups<T extends tblgroup$subgroupsArgs<ExtArgs> = {}>(args?: Subset<T, tblgroup$subgroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblgroup model
   */ 
  interface tblgroupFieldRefs {
    readonly id: FieldRef<"tblgroup", 'Int'>
    readonly group: FieldRef<"tblgroup", 'String'>
    readonly description: FieldRef<"tblgroup", 'String'>
    readonly image: FieldRef<"tblgroup", 'String'>
    readonly createdAt: FieldRef<"tblgroup", 'DateTime'>
    readonly updatedAt: FieldRef<"tblgroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblgroup findUnique
   */
  export type tblgroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblgroup to fetch.
     */
    where: tblgroupWhereUniqueInput
  }

  /**
   * tblgroup findUniqueOrThrow
   */
  export type tblgroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblgroup to fetch.
     */
    where: tblgroupWhereUniqueInput
  }

  /**
   * tblgroup findFirst
   */
  export type tblgroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblgroup to fetch.
     */
    where?: tblgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblgroups to fetch.
     */
    orderBy?: tblgroupOrderByWithRelationInput | tblgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblgroups.
     */
    cursor?: tblgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblgroups.
     */
    distinct?: TblgroupScalarFieldEnum | TblgroupScalarFieldEnum[]
  }

  /**
   * tblgroup findFirstOrThrow
   */
  export type tblgroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblgroup to fetch.
     */
    where?: tblgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblgroups to fetch.
     */
    orderBy?: tblgroupOrderByWithRelationInput | tblgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblgroups.
     */
    cursor?: tblgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblgroups.
     */
    distinct?: TblgroupScalarFieldEnum | TblgroupScalarFieldEnum[]
  }

  /**
   * tblgroup findMany
   */
  export type tblgroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblgroups to fetch.
     */
    where?: tblgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblgroups to fetch.
     */
    orderBy?: tblgroupOrderByWithRelationInput | tblgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblgroups.
     */
    cursor?: tblgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblgroups.
     */
    skip?: number
    distinct?: TblgroupScalarFieldEnum | TblgroupScalarFieldEnum[]
  }

  /**
   * tblgroup create
   */
  export type tblgroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * The data needed to create a tblgroup.
     */
    data: XOR<tblgroupCreateInput, tblgroupUncheckedCreateInput>
  }

  /**
   * tblgroup createMany
   */
  export type tblgroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblgroups.
     */
    data: tblgroupCreateManyInput | tblgroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblgroup update
   */
  export type tblgroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * The data needed to update a tblgroup.
     */
    data: XOR<tblgroupUpdateInput, tblgroupUncheckedUpdateInput>
    /**
     * Choose, which tblgroup to update.
     */
    where: tblgroupWhereUniqueInput
  }

  /**
   * tblgroup updateMany
   */
  export type tblgroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblgroups.
     */
    data: XOR<tblgroupUpdateManyMutationInput, tblgroupUncheckedUpdateManyInput>
    /**
     * Filter which tblgroups to update
     */
    where?: tblgroupWhereInput
  }

  /**
   * tblgroup upsert
   */
  export type tblgroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * The filter to search for the tblgroup to update in case it exists.
     */
    where: tblgroupWhereUniqueInput
    /**
     * In case the tblgroup found by the `where` argument doesn't exist, create a new tblgroup with this data.
     */
    create: XOR<tblgroupCreateInput, tblgroupUncheckedCreateInput>
    /**
     * In case the tblgroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblgroupUpdateInput, tblgroupUncheckedUpdateInput>
  }

  /**
   * tblgroup delete
   */
  export type tblgroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
    /**
     * Filter which tblgroup to delete.
     */
    where: tblgroupWhereUniqueInput
  }

  /**
   * tblgroup deleteMany
   */
  export type tblgroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblgroups to delete
     */
    where?: tblgroupWhereInput
  }

  /**
   * tblgroup.subgroups
   */
  export type tblgroup$subgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    where?: tblsubgroupWhereInput
    orderBy?: tblsubgroupOrderByWithRelationInput | tblsubgroupOrderByWithRelationInput[]
    cursor?: tblsubgroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TblsubgroupScalarFieldEnum | TblsubgroupScalarFieldEnum[]
  }

  /**
   * tblgroup without action
   */
  export type tblgroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblgroup
     */
    select?: tblgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblgroupInclude<ExtArgs> | null
  }


  /**
   * Model tblsubgroup
   */

  export type AggregateTblsubgroup = {
    _count: TblsubgroupCountAggregateOutputType | null
    _avg: TblsubgroupAvgAggregateOutputType | null
    _sum: TblsubgroupSumAggregateOutputType | null
    _min: TblsubgroupMinAggregateOutputType | null
    _max: TblsubgroupMaxAggregateOutputType | null
  }

  export type TblsubgroupAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type TblsubgroupSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type TblsubgroupMinAggregateOutputType = {
    id: number | null
    subgroup: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    groupId: number | null
  }

  export type TblsubgroupMaxAggregateOutputType = {
    id: number | null
    subgroup: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    groupId: number | null
  }

  export type TblsubgroupCountAggregateOutputType = {
    id: number
    subgroup: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    groupId: number
    _all: number
  }


  export type TblsubgroupAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type TblsubgroupSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type TblsubgroupMinAggregateInputType = {
    id?: true
    subgroup?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
  }

  export type TblsubgroupMaxAggregateInputType = {
    id?: true
    subgroup?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
  }

  export type TblsubgroupCountAggregateInputType = {
    id?: true
    subgroup?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    groupId?: true
    _all?: true
  }

  export type TblsubgroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblsubgroup to aggregate.
     */
    where?: tblsubgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblsubgroups to fetch.
     */
    orderBy?: tblsubgroupOrderByWithRelationInput | tblsubgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblsubgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblsubgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblsubgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblsubgroups
    **/
    _count?: true | TblsubgroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblsubgroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblsubgroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblsubgroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblsubgroupMaxAggregateInputType
  }

  export type GetTblsubgroupAggregateType<T extends TblsubgroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTblsubgroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblsubgroup[P]>
      : GetScalarType<T[P], AggregateTblsubgroup[P]>
  }




  export type tblsubgroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblsubgroupWhereInput
    orderBy?: tblsubgroupOrderByWithAggregationInput | tblsubgroupOrderByWithAggregationInput[]
    by: TblsubgroupScalarFieldEnum[] | TblsubgroupScalarFieldEnum
    having?: tblsubgroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblsubgroupCountAggregateInputType | true
    _avg?: TblsubgroupAvgAggregateInputType
    _sum?: TblsubgroupSumAggregateInputType
    _min?: TblsubgroupMinAggregateInputType
    _max?: TblsubgroupMaxAggregateInputType
  }

  export type TblsubgroupGroupByOutputType = {
    id: number
    subgroup: string
    description: string | null
    image: string
    createdAt: Date
    updatedAt: Date
    groupId: number
    _count: TblsubgroupCountAggregateOutputType | null
    _avg: TblsubgroupAvgAggregateOutputType | null
    _sum: TblsubgroupSumAggregateOutputType | null
    _min: TblsubgroupMinAggregateOutputType | null
    _max: TblsubgroupMaxAggregateOutputType | null
  }

  type GetTblsubgroupGroupByPayload<T extends tblsubgroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblsubgroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblsubgroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblsubgroupGroupByOutputType[P]>
            : GetScalarType<T[P], TblsubgroupGroupByOutputType[P]>
        }
      >
    >


  export type tblsubgroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subgroup?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | tblgroupDefaultArgs<ExtArgs>
    categories?: boolean | tblsubgroup$categoriesArgs<ExtArgs>
    _count?: boolean | TblsubgroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblsubgroup"]>


  export type tblsubgroupSelectScalar = {
    id?: boolean
    subgroup?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupId?: boolean
  }

  export type tblsubgroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | tblgroupDefaultArgs<ExtArgs>
    categories?: boolean | tblsubgroup$categoriesArgs<ExtArgs>
    _count?: boolean | TblsubgroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblsubgroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblsubgroup"
    objects: {
      group: Prisma.$tblgroupPayload<ExtArgs>
      categories: Prisma.$tblcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subgroup: string
      description: string | null
      image: string
      createdAt: Date
      updatedAt: Date
      groupId: number
    }, ExtArgs["result"]["tblsubgroup"]>
    composites: {}
  }

  type tblsubgroupGetPayload<S extends boolean | null | undefined | tblsubgroupDefaultArgs> = $Result.GetResult<Prisma.$tblsubgroupPayload, S>

  type tblsubgroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblsubgroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblsubgroupCountAggregateInputType | true
    }

  export interface tblsubgroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblsubgroup'], meta: { name: 'tblsubgroup' } }
    /**
     * Find zero or one Tblsubgroup that matches the filter.
     * @param {tblsubgroupFindUniqueArgs} args - Arguments to find a Tblsubgroup
     * @example
     * // Get one Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblsubgroupFindUniqueArgs>(args: SelectSubset<T, tblsubgroupFindUniqueArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblsubgroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblsubgroupFindUniqueOrThrowArgs} args - Arguments to find a Tblsubgroup
     * @example
     * // Get one Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblsubgroupFindUniqueOrThrowArgs>(args: SelectSubset<T, tblsubgroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblsubgroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupFindFirstArgs} args - Arguments to find a Tblsubgroup
     * @example
     * // Get one Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblsubgroupFindFirstArgs>(args?: SelectSubset<T, tblsubgroupFindFirstArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblsubgroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupFindFirstOrThrowArgs} args - Arguments to find a Tblsubgroup
     * @example
     * // Get one Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblsubgroupFindFirstOrThrowArgs>(args?: SelectSubset<T, tblsubgroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblsubgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblsubgroups
     * const tblsubgroups = await prisma.tblsubgroup.findMany()
     * 
     * // Get first 10 Tblsubgroups
     * const tblsubgroups = await prisma.tblsubgroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblsubgroupWithIdOnly = await prisma.tblsubgroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblsubgroupFindManyArgs>(args?: SelectSubset<T, tblsubgroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblsubgroup.
     * @param {tblsubgroupCreateArgs} args - Arguments to create a Tblsubgroup.
     * @example
     * // Create one Tblsubgroup
     * const Tblsubgroup = await prisma.tblsubgroup.create({
     *   data: {
     *     // ... data to create a Tblsubgroup
     *   }
     * })
     * 
     */
    create<T extends tblsubgroupCreateArgs>(args: SelectSubset<T, tblsubgroupCreateArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblsubgroups.
     * @param {tblsubgroupCreateManyArgs} args - Arguments to create many Tblsubgroups.
     * @example
     * // Create many Tblsubgroups
     * const tblsubgroup = await prisma.tblsubgroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblsubgroupCreateManyArgs>(args?: SelectSubset<T, tblsubgroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblsubgroup.
     * @param {tblsubgroupDeleteArgs} args - Arguments to delete one Tblsubgroup.
     * @example
     * // Delete one Tblsubgroup
     * const Tblsubgroup = await prisma.tblsubgroup.delete({
     *   where: {
     *     // ... filter to delete one Tblsubgroup
     *   }
     * })
     * 
     */
    delete<T extends tblsubgroupDeleteArgs>(args: SelectSubset<T, tblsubgroupDeleteArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblsubgroup.
     * @param {tblsubgroupUpdateArgs} args - Arguments to update one Tblsubgroup.
     * @example
     * // Update one Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblsubgroupUpdateArgs>(args: SelectSubset<T, tblsubgroupUpdateArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblsubgroups.
     * @param {tblsubgroupDeleteManyArgs} args - Arguments to filter Tblsubgroups to delete.
     * @example
     * // Delete a few Tblsubgroups
     * const { count } = await prisma.tblsubgroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblsubgroupDeleteManyArgs>(args?: SelectSubset<T, tblsubgroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblsubgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblsubgroups
     * const tblsubgroup = await prisma.tblsubgroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblsubgroupUpdateManyArgs>(args: SelectSubset<T, tblsubgroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblsubgroup.
     * @param {tblsubgroupUpsertArgs} args - Arguments to update or create a Tblsubgroup.
     * @example
     * // Update or create a Tblsubgroup
     * const tblsubgroup = await prisma.tblsubgroup.upsert({
     *   create: {
     *     // ... data to create a Tblsubgroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblsubgroup we want to update
     *   }
     * })
     */
    upsert<T extends tblsubgroupUpsertArgs>(args: SelectSubset<T, tblsubgroupUpsertArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblsubgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupCountArgs} args - Arguments to filter Tblsubgroups to count.
     * @example
     * // Count the number of Tblsubgroups
     * const count = await prisma.tblsubgroup.count({
     *   where: {
     *     // ... the filter for the Tblsubgroups we want to count
     *   }
     * })
    **/
    count<T extends tblsubgroupCountArgs>(
      args?: Subset<T, tblsubgroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblsubgroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblsubgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblsubgroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblsubgroupAggregateArgs>(args: Subset<T, TblsubgroupAggregateArgs>): Prisma.PrismaPromise<GetTblsubgroupAggregateType<T>>

    /**
     * Group by Tblsubgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblsubgroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblsubgroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblsubgroupGroupByArgs['orderBy'] }
        : { orderBy?: tblsubgroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblsubgroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblsubgroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblsubgroup model
   */
  readonly fields: tblsubgroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblsubgroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblsubgroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends tblgroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblgroupDefaultArgs<ExtArgs>>): Prisma__tblgroupClient<$Result.GetResult<Prisma.$tblgroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    categories<T extends tblsubgroup$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, tblsubgroup$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblsubgroup model
   */ 
  interface tblsubgroupFieldRefs {
    readonly id: FieldRef<"tblsubgroup", 'Int'>
    readonly subgroup: FieldRef<"tblsubgroup", 'String'>
    readonly description: FieldRef<"tblsubgroup", 'String'>
    readonly image: FieldRef<"tblsubgroup", 'String'>
    readonly createdAt: FieldRef<"tblsubgroup", 'DateTime'>
    readonly updatedAt: FieldRef<"tblsubgroup", 'DateTime'>
    readonly groupId: FieldRef<"tblsubgroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tblsubgroup findUnique
   */
  export type tblsubgroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblsubgroup to fetch.
     */
    where: tblsubgroupWhereUniqueInput
  }

  /**
   * tblsubgroup findUniqueOrThrow
   */
  export type tblsubgroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblsubgroup to fetch.
     */
    where: tblsubgroupWhereUniqueInput
  }

  /**
   * tblsubgroup findFirst
   */
  export type tblsubgroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblsubgroup to fetch.
     */
    where?: tblsubgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblsubgroups to fetch.
     */
    orderBy?: tblsubgroupOrderByWithRelationInput | tblsubgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblsubgroups.
     */
    cursor?: tblsubgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblsubgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblsubgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblsubgroups.
     */
    distinct?: TblsubgroupScalarFieldEnum | TblsubgroupScalarFieldEnum[]
  }

  /**
   * tblsubgroup findFirstOrThrow
   */
  export type tblsubgroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblsubgroup to fetch.
     */
    where?: tblsubgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblsubgroups to fetch.
     */
    orderBy?: tblsubgroupOrderByWithRelationInput | tblsubgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblsubgroups.
     */
    cursor?: tblsubgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblsubgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblsubgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblsubgroups.
     */
    distinct?: TblsubgroupScalarFieldEnum | TblsubgroupScalarFieldEnum[]
  }

  /**
   * tblsubgroup findMany
   */
  export type tblsubgroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter, which tblsubgroups to fetch.
     */
    where?: tblsubgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblsubgroups to fetch.
     */
    orderBy?: tblsubgroupOrderByWithRelationInput | tblsubgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblsubgroups.
     */
    cursor?: tblsubgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblsubgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblsubgroups.
     */
    skip?: number
    distinct?: TblsubgroupScalarFieldEnum | TblsubgroupScalarFieldEnum[]
  }

  /**
   * tblsubgroup create
   */
  export type tblsubgroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * The data needed to create a tblsubgroup.
     */
    data: XOR<tblsubgroupCreateInput, tblsubgroupUncheckedCreateInput>
  }

  /**
   * tblsubgroup createMany
   */
  export type tblsubgroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblsubgroups.
     */
    data: tblsubgroupCreateManyInput | tblsubgroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblsubgroup update
   */
  export type tblsubgroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * The data needed to update a tblsubgroup.
     */
    data: XOR<tblsubgroupUpdateInput, tblsubgroupUncheckedUpdateInput>
    /**
     * Choose, which tblsubgroup to update.
     */
    where: tblsubgroupWhereUniqueInput
  }

  /**
   * tblsubgroup updateMany
   */
  export type tblsubgroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblsubgroups.
     */
    data: XOR<tblsubgroupUpdateManyMutationInput, tblsubgroupUncheckedUpdateManyInput>
    /**
     * Filter which tblsubgroups to update
     */
    where?: tblsubgroupWhereInput
  }

  /**
   * tblsubgroup upsert
   */
  export type tblsubgroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * The filter to search for the tblsubgroup to update in case it exists.
     */
    where: tblsubgroupWhereUniqueInput
    /**
     * In case the tblsubgroup found by the `where` argument doesn't exist, create a new tblsubgroup with this data.
     */
    create: XOR<tblsubgroupCreateInput, tblsubgroupUncheckedCreateInput>
    /**
     * In case the tblsubgroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblsubgroupUpdateInput, tblsubgroupUncheckedUpdateInput>
  }

  /**
   * tblsubgroup delete
   */
  export type tblsubgroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
    /**
     * Filter which tblsubgroup to delete.
     */
    where: tblsubgroupWhereUniqueInput
  }

  /**
   * tblsubgroup deleteMany
   */
  export type tblsubgroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblsubgroups to delete
     */
    where?: tblsubgroupWhereInput
  }

  /**
   * tblsubgroup.categories
   */
  export type tblsubgroup$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    where?: tblcategoryWhereInput
    orderBy?: tblcategoryOrderByWithRelationInput | tblcategoryOrderByWithRelationInput[]
    cursor?: tblcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TblcategoryScalarFieldEnum | TblcategoryScalarFieldEnum[]
  }

  /**
   * tblsubgroup without action
   */
  export type tblsubgroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblsubgroup
     */
    select?: tblsubgroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblsubgroupInclude<ExtArgs> | null
  }


  /**
   * Model tblcategory
   */

  export type AggregateTblcategory = {
    _count: TblcategoryCountAggregateOutputType | null
    _avg: TblcategoryAvgAggregateOutputType | null
    _sum: TblcategorySumAggregateOutputType | null
    _min: TblcategoryMinAggregateOutputType | null
    _max: TblcategoryMaxAggregateOutputType | null
  }

  export type TblcategoryAvgAggregateOutputType = {
    id: number | null
    subgroupId: number | null
  }

  export type TblcategorySumAggregateOutputType = {
    id: number | null
    subgroupId: number | null
  }

  export type TblcategoryMinAggregateOutputType = {
    id: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subgroupId: number | null
  }

  export type TblcategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subgroupId: number | null
  }

  export type TblcategoryCountAggregateOutputType = {
    id: number
    category: number
    description: number
    createdAt: number
    updatedAt: number
    subgroupId: number
    _all: number
  }


  export type TblcategoryAvgAggregateInputType = {
    id?: true
    subgroupId?: true
  }

  export type TblcategorySumAggregateInputType = {
    id?: true
    subgroupId?: true
  }

  export type TblcategoryMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    subgroupId?: true
  }

  export type TblcategoryMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    subgroupId?: true
  }

  export type TblcategoryCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    subgroupId?: true
    _all?: true
  }

  export type TblcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblcategory to aggregate.
     */
    where?: tblcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblcategories to fetch.
     */
    orderBy?: tblcategoryOrderByWithRelationInput | tblcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblcategories
    **/
    _count?: true | TblcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblcategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblcategoryMaxAggregateInputType
  }

  export type GetTblcategoryAggregateType<T extends TblcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTblcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblcategory[P]>
      : GetScalarType<T[P], AggregateTblcategory[P]>
  }




  export type tblcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblcategoryWhereInput
    orderBy?: tblcategoryOrderByWithAggregationInput | tblcategoryOrderByWithAggregationInput[]
    by: TblcategoryScalarFieldEnum[] | TblcategoryScalarFieldEnum
    having?: tblcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblcategoryCountAggregateInputType | true
    _avg?: TblcategoryAvgAggregateInputType
    _sum?: TblcategorySumAggregateInputType
    _min?: TblcategoryMinAggregateInputType
    _max?: TblcategoryMaxAggregateInputType
  }

  export type TblcategoryGroupByOutputType = {
    id: number
    category: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    subgroupId: number
    _count: TblcategoryCountAggregateOutputType | null
    _avg: TblcategoryAvgAggregateOutputType | null
    _sum: TblcategorySumAggregateOutputType | null
    _min: TblcategoryMinAggregateOutputType | null
    _max: TblcategoryMaxAggregateOutputType | null
  }

  type GetTblcategoryGroupByPayload<T extends tblcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TblcategoryGroupByOutputType[P]>
        }
      >
    >


  export type tblcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subgroupId?: boolean
    subgroup?: boolean | tblsubgroupDefaultArgs<ExtArgs>
    products?: boolean | tblcategory$productsArgs<ExtArgs>
    _count?: boolean | TblcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblcategory"]>


  export type tblcategorySelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subgroupId?: boolean
  }

  export type tblcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subgroup?: boolean | tblsubgroupDefaultArgs<ExtArgs>
    products?: boolean | tblcategory$productsArgs<ExtArgs>
    _count?: boolean | TblcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblcategory"
    objects: {
      subgroup: Prisma.$tblsubgroupPayload<ExtArgs>
      products: Prisma.$tblproductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      subgroupId: number
    }, ExtArgs["result"]["tblcategory"]>
    composites: {}
  }

  type tblcategoryGetPayload<S extends boolean | null | undefined | tblcategoryDefaultArgs> = $Result.GetResult<Prisma.$tblcategoryPayload, S>

  type tblcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblcategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblcategoryCountAggregateInputType | true
    }

  export interface tblcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblcategory'], meta: { name: 'tblcategory' } }
    /**
     * Find zero or one Tblcategory that matches the filter.
     * @param {tblcategoryFindUniqueArgs} args - Arguments to find a Tblcategory
     * @example
     * // Get one Tblcategory
     * const tblcategory = await prisma.tblcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblcategoryFindUniqueArgs>(args: SelectSubset<T, tblcategoryFindUniqueArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblcategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblcategoryFindUniqueOrThrowArgs} args - Arguments to find a Tblcategory
     * @example
     * // Get one Tblcategory
     * const tblcategory = await prisma.tblcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, tblcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryFindFirstArgs} args - Arguments to find a Tblcategory
     * @example
     * // Get one Tblcategory
     * const tblcategory = await prisma.tblcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblcategoryFindFirstArgs>(args?: SelectSubset<T, tblcategoryFindFirstArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryFindFirstOrThrowArgs} args - Arguments to find a Tblcategory
     * @example
     * // Get one Tblcategory
     * const tblcategory = await prisma.tblcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, tblcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblcategories
     * const tblcategories = await prisma.tblcategory.findMany()
     * 
     * // Get first 10 Tblcategories
     * const tblcategories = await prisma.tblcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblcategoryWithIdOnly = await prisma.tblcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblcategoryFindManyArgs>(args?: SelectSubset<T, tblcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblcategory.
     * @param {tblcategoryCreateArgs} args - Arguments to create a Tblcategory.
     * @example
     * // Create one Tblcategory
     * const Tblcategory = await prisma.tblcategory.create({
     *   data: {
     *     // ... data to create a Tblcategory
     *   }
     * })
     * 
     */
    create<T extends tblcategoryCreateArgs>(args: SelectSubset<T, tblcategoryCreateArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblcategories.
     * @param {tblcategoryCreateManyArgs} args - Arguments to create many Tblcategories.
     * @example
     * // Create many Tblcategories
     * const tblcategory = await prisma.tblcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblcategoryCreateManyArgs>(args?: SelectSubset<T, tblcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblcategory.
     * @param {tblcategoryDeleteArgs} args - Arguments to delete one Tblcategory.
     * @example
     * // Delete one Tblcategory
     * const Tblcategory = await prisma.tblcategory.delete({
     *   where: {
     *     // ... filter to delete one Tblcategory
     *   }
     * })
     * 
     */
    delete<T extends tblcategoryDeleteArgs>(args: SelectSubset<T, tblcategoryDeleteArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblcategory.
     * @param {tblcategoryUpdateArgs} args - Arguments to update one Tblcategory.
     * @example
     * // Update one Tblcategory
     * const tblcategory = await prisma.tblcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblcategoryUpdateArgs>(args: SelectSubset<T, tblcategoryUpdateArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblcategories.
     * @param {tblcategoryDeleteManyArgs} args - Arguments to filter Tblcategories to delete.
     * @example
     * // Delete a few Tblcategories
     * const { count } = await prisma.tblcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblcategoryDeleteManyArgs>(args?: SelectSubset<T, tblcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblcategories
     * const tblcategory = await prisma.tblcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblcategoryUpdateManyArgs>(args: SelectSubset<T, tblcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblcategory.
     * @param {tblcategoryUpsertArgs} args - Arguments to update or create a Tblcategory.
     * @example
     * // Update or create a Tblcategory
     * const tblcategory = await prisma.tblcategory.upsert({
     *   create: {
     *     // ... data to create a Tblcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblcategory we want to update
     *   }
     * })
     */
    upsert<T extends tblcategoryUpsertArgs>(args: SelectSubset<T, tblcategoryUpsertArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryCountArgs} args - Arguments to filter Tblcategories to count.
     * @example
     * // Count the number of Tblcategories
     * const count = await prisma.tblcategory.count({
     *   where: {
     *     // ... the filter for the Tblcategories we want to count
     *   }
     * })
    **/
    count<T extends tblcategoryCountArgs>(
      args?: Subset<T, tblcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblcategoryAggregateArgs>(args: Subset<T, TblcategoryAggregateArgs>): Prisma.PrismaPromise<GetTblcategoryAggregateType<T>>

    /**
     * Group by Tblcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblcategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblcategoryGroupByArgs['orderBy'] }
        : { orderBy?: tblcategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblcategory model
   */
  readonly fields: tblcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subgroup<T extends tblsubgroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblsubgroupDefaultArgs<ExtArgs>>): Prisma__tblsubgroupClient<$Result.GetResult<Prisma.$tblsubgroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    products<T extends tblcategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, tblcategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblcategory model
   */ 
  interface tblcategoryFieldRefs {
    readonly id: FieldRef<"tblcategory", 'Int'>
    readonly category: FieldRef<"tblcategory", 'String'>
    readonly description: FieldRef<"tblcategory", 'String'>
    readonly createdAt: FieldRef<"tblcategory", 'DateTime'>
    readonly updatedAt: FieldRef<"tblcategory", 'DateTime'>
    readonly subgroupId: FieldRef<"tblcategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tblcategory findUnique
   */
  export type tblcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter, which tblcategory to fetch.
     */
    where: tblcategoryWhereUniqueInput
  }

  /**
   * tblcategory findUniqueOrThrow
   */
  export type tblcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter, which tblcategory to fetch.
     */
    where: tblcategoryWhereUniqueInput
  }

  /**
   * tblcategory findFirst
   */
  export type tblcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter, which tblcategory to fetch.
     */
    where?: tblcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblcategories to fetch.
     */
    orderBy?: tblcategoryOrderByWithRelationInput | tblcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblcategories.
     */
    cursor?: tblcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblcategories.
     */
    distinct?: TblcategoryScalarFieldEnum | TblcategoryScalarFieldEnum[]
  }

  /**
   * tblcategory findFirstOrThrow
   */
  export type tblcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter, which tblcategory to fetch.
     */
    where?: tblcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblcategories to fetch.
     */
    orderBy?: tblcategoryOrderByWithRelationInput | tblcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblcategories.
     */
    cursor?: tblcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblcategories.
     */
    distinct?: TblcategoryScalarFieldEnum | TblcategoryScalarFieldEnum[]
  }

  /**
   * tblcategory findMany
   */
  export type tblcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter, which tblcategories to fetch.
     */
    where?: tblcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblcategories to fetch.
     */
    orderBy?: tblcategoryOrderByWithRelationInput | tblcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblcategories.
     */
    cursor?: tblcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblcategories.
     */
    skip?: number
    distinct?: TblcategoryScalarFieldEnum | TblcategoryScalarFieldEnum[]
  }

  /**
   * tblcategory create
   */
  export type tblcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a tblcategory.
     */
    data: XOR<tblcategoryCreateInput, tblcategoryUncheckedCreateInput>
  }

  /**
   * tblcategory createMany
   */
  export type tblcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblcategories.
     */
    data: tblcategoryCreateManyInput | tblcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblcategory update
   */
  export type tblcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a tblcategory.
     */
    data: XOR<tblcategoryUpdateInput, tblcategoryUncheckedUpdateInput>
    /**
     * Choose, which tblcategory to update.
     */
    where: tblcategoryWhereUniqueInput
  }

  /**
   * tblcategory updateMany
   */
  export type tblcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblcategories.
     */
    data: XOR<tblcategoryUpdateManyMutationInput, tblcategoryUncheckedUpdateManyInput>
    /**
     * Filter which tblcategories to update
     */
    where?: tblcategoryWhereInput
  }

  /**
   * tblcategory upsert
   */
  export type tblcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the tblcategory to update in case it exists.
     */
    where: tblcategoryWhereUniqueInput
    /**
     * In case the tblcategory found by the `where` argument doesn't exist, create a new tblcategory with this data.
     */
    create: XOR<tblcategoryCreateInput, tblcategoryUncheckedCreateInput>
    /**
     * In case the tblcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblcategoryUpdateInput, tblcategoryUncheckedUpdateInput>
  }

  /**
   * tblcategory delete
   */
  export type tblcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
    /**
     * Filter which tblcategory to delete.
     */
    where: tblcategoryWhereUniqueInput
  }

  /**
   * tblcategory deleteMany
   */
  export type tblcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblcategories to delete
     */
    where?: tblcategoryWhereInput
  }

  /**
   * tblcategory.products
   */
  export type tblcategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    where?: tblproductWhereInput
    orderBy?: tblproductOrderByWithRelationInput | tblproductOrderByWithRelationInput[]
    cursor?: tblproductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TblproductScalarFieldEnum | TblproductScalarFieldEnum[]
  }

  /**
   * tblcategory without action
   */
  export type tblcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblcategory
     */
    select?: tblcategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblcategoryInclude<ExtArgs> | null
  }


  /**
   * Model tblproduct
   */

  export type AggregateTblproduct = {
    _count: TblproductCountAggregateOutputType | null
    _avg: TblproductAvgAggregateOutputType | null
    _sum: TblproductSumAggregateOutputType | null
    _min: TblproductMinAggregateOutputType | null
    _max: TblproductMaxAggregateOutputType | null
  }

  export type TblproductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
  }

  export type TblproductSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    categoryId: number | null
  }

  export type TblproductMinAggregateOutputType = {
    id: number | null
    product: string | null
    description: string | null
    price: number | null
    stock: number | null
    unit: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type TblproductMaxAggregateOutputType = {
    id: number | null
    product: string | null
    description: string | null
    price: number | null
    stock: number | null
    unit: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type TblproductCountAggregateOutputType = {
    id: number
    product: number
    description: number
    price: number
    stock: number
    unit: number
    image: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type TblproductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    categoryId?: true
  }

  export type TblproductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    categoryId?: true
  }

  export type TblproductMinAggregateInputType = {
    id?: true
    product?: true
    description?: true
    price?: true
    stock?: true
    unit?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type TblproductMaxAggregateInputType = {
    id?: true
    product?: true
    description?: true
    price?: true
    stock?: true
    unit?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type TblproductCountAggregateInputType = {
    id?: true
    product?: true
    description?: true
    price?: true
    stock?: true
    unit?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type TblproductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblproduct to aggregate.
     */
    where?: tblproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblproducts to fetch.
     */
    orderBy?: tblproductOrderByWithRelationInput | tblproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblproducts
    **/
    _count?: true | TblproductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblproductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblproductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblproductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblproductMaxAggregateInputType
  }

  export type GetTblproductAggregateType<T extends TblproductAggregateArgs> = {
        [P in keyof T & keyof AggregateTblproduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblproduct[P]>
      : GetScalarType<T[P], AggregateTblproduct[P]>
  }




  export type tblproductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblproductWhereInput
    orderBy?: tblproductOrderByWithAggregationInput | tblproductOrderByWithAggregationInput[]
    by: TblproductScalarFieldEnum[] | TblproductScalarFieldEnum
    having?: tblproductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblproductCountAggregateInputType | true
    _avg?: TblproductAvgAggregateInputType
    _sum?: TblproductSumAggregateInputType
    _min?: TblproductMinAggregateInputType
    _max?: TblproductMaxAggregateInputType
  }

  export type TblproductGroupByOutputType = {
    id: number
    product: string
    description: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: TblproductCountAggregateOutputType | null
    _avg: TblproductAvgAggregateOutputType | null
    _sum: TblproductSumAggregateOutputType | null
    _min: TblproductMinAggregateOutputType | null
    _max: TblproductMaxAggregateOutputType | null
  }

  type GetTblproductGroupByPayload<T extends tblproductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblproductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblproductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblproductGroupByOutputType[P]>
            : GetScalarType<T[P], TblproductGroupByOutputType[P]>
        }
      >
    >


  export type tblproductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    unit?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | tblcategoryDefaultArgs<ExtArgs>
    orders?: boolean | tblproduct$ordersArgs<ExtArgs>
    _count?: boolean | TblproductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblproduct"]>


  export type tblproductSelectScalar = {
    id?: boolean
    product?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    unit?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type tblproductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | tblcategoryDefaultArgs<ExtArgs>
    orders?: boolean | tblproduct$ordersArgs<ExtArgs>
    _count?: boolean | TblproductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblproductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblproduct"
    objects: {
      category: Prisma.$tblcategoryPayload<ExtArgs>
      orders: Prisma.$tblorderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product: string
      description: string | null
      price: number
      stock: number
      unit: string
      image: string
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["tblproduct"]>
    composites: {}
  }

  type tblproductGetPayload<S extends boolean | null | undefined | tblproductDefaultArgs> = $Result.GetResult<Prisma.$tblproductPayload, S>

  type tblproductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblproductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblproductCountAggregateInputType | true
    }

  export interface tblproductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblproduct'], meta: { name: 'tblproduct' } }
    /**
     * Find zero or one Tblproduct that matches the filter.
     * @param {tblproductFindUniqueArgs} args - Arguments to find a Tblproduct
     * @example
     * // Get one Tblproduct
     * const tblproduct = await prisma.tblproduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblproductFindUniqueArgs>(args: SelectSubset<T, tblproductFindUniqueArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblproduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblproductFindUniqueOrThrowArgs} args - Arguments to find a Tblproduct
     * @example
     * // Get one Tblproduct
     * const tblproduct = await prisma.tblproduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblproductFindUniqueOrThrowArgs>(args: SelectSubset<T, tblproductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblproduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductFindFirstArgs} args - Arguments to find a Tblproduct
     * @example
     * // Get one Tblproduct
     * const tblproduct = await prisma.tblproduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblproductFindFirstArgs>(args?: SelectSubset<T, tblproductFindFirstArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblproduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductFindFirstOrThrowArgs} args - Arguments to find a Tblproduct
     * @example
     * // Get one Tblproduct
     * const tblproduct = await prisma.tblproduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblproductFindFirstOrThrowArgs>(args?: SelectSubset<T, tblproductFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblproducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblproducts
     * const tblproducts = await prisma.tblproduct.findMany()
     * 
     * // Get first 10 Tblproducts
     * const tblproducts = await prisma.tblproduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblproductWithIdOnly = await prisma.tblproduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblproductFindManyArgs>(args?: SelectSubset<T, tblproductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblproduct.
     * @param {tblproductCreateArgs} args - Arguments to create a Tblproduct.
     * @example
     * // Create one Tblproduct
     * const Tblproduct = await prisma.tblproduct.create({
     *   data: {
     *     // ... data to create a Tblproduct
     *   }
     * })
     * 
     */
    create<T extends tblproductCreateArgs>(args: SelectSubset<T, tblproductCreateArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblproducts.
     * @param {tblproductCreateManyArgs} args - Arguments to create many Tblproducts.
     * @example
     * // Create many Tblproducts
     * const tblproduct = await prisma.tblproduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblproductCreateManyArgs>(args?: SelectSubset<T, tblproductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblproduct.
     * @param {tblproductDeleteArgs} args - Arguments to delete one Tblproduct.
     * @example
     * // Delete one Tblproduct
     * const Tblproduct = await prisma.tblproduct.delete({
     *   where: {
     *     // ... filter to delete one Tblproduct
     *   }
     * })
     * 
     */
    delete<T extends tblproductDeleteArgs>(args: SelectSubset<T, tblproductDeleteArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblproduct.
     * @param {tblproductUpdateArgs} args - Arguments to update one Tblproduct.
     * @example
     * // Update one Tblproduct
     * const tblproduct = await prisma.tblproduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblproductUpdateArgs>(args: SelectSubset<T, tblproductUpdateArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblproducts.
     * @param {tblproductDeleteManyArgs} args - Arguments to filter Tblproducts to delete.
     * @example
     * // Delete a few Tblproducts
     * const { count } = await prisma.tblproduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblproductDeleteManyArgs>(args?: SelectSubset<T, tblproductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblproducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblproducts
     * const tblproduct = await prisma.tblproduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblproductUpdateManyArgs>(args: SelectSubset<T, tblproductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblproduct.
     * @param {tblproductUpsertArgs} args - Arguments to update or create a Tblproduct.
     * @example
     * // Update or create a Tblproduct
     * const tblproduct = await prisma.tblproduct.upsert({
     *   create: {
     *     // ... data to create a Tblproduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblproduct we want to update
     *   }
     * })
     */
    upsert<T extends tblproductUpsertArgs>(args: SelectSubset<T, tblproductUpsertArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblproducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductCountArgs} args - Arguments to filter Tblproducts to count.
     * @example
     * // Count the number of Tblproducts
     * const count = await prisma.tblproduct.count({
     *   where: {
     *     // ... the filter for the Tblproducts we want to count
     *   }
     * })
    **/
    count<T extends tblproductCountArgs>(
      args?: Subset<T, tblproductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblproductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblproduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblproductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblproductAggregateArgs>(args: Subset<T, TblproductAggregateArgs>): Prisma.PrismaPromise<GetTblproductAggregateType<T>>

    /**
     * Group by Tblproduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblproductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblproductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblproductGroupByArgs['orderBy'] }
        : { orderBy?: tblproductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblproductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblproductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblproduct model
   */
  readonly fields: tblproductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblproduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblproductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends tblcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblcategoryDefaultArgs<ExtArgs>>): Prisma__tblcategoryClient<$Result.GetResult<Prisma.$tblcategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends tblproduct$ordersArgs<ExtArgs> = {}>(args?: Subset<T, tblproduct$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblproduct model
   */ 
  interface tblproductFieldRefs {
    readonly id: FieldRef<"tblproduct", 'Int'>
    readonly product: FieldRef<"tblproduct", 'String'>
    readonly description: FieldRef<"tblproduct", 'String'>
    readonly price: FieldRef<"tblproduct", 'Float'>
    readonly stock: FieldRef<"tblproduct", 'Int'>
    readonly unit: FieldRef<"tblproduct", 'String'>
    readonly image: FieldRef<"tblproduct", 'String'>
    readonly createdAt: FieldRef<"tblproduct", 'DateTime'>
    readonly updatedAt: FieldRef<"tblproduct", 'DateTime'>
    readonly categoryId: FieldRef<"tblproduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tblproduct findUnique
   */
  export type tblproductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter, which tblproduct to fetch.
     */
    where: tblproductWhereUniqueInput
  }

  /**
   * tblproduct findUniqueOrThrow
   */
  export type tblproductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter, which tblproduct to fetch.
     */
    where: tblproductWhereUniqueInput
  }

  /**
   * tblproduct findFirst
   */
  export type tblproductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter, which tblproduct to fetch.
     */
    where?: tblproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblproducts to fetch.
     */
    orderBy?: tblproductOrderByWithRelationInput | tblproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblproducts.
     */
    cursor?: tblproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblproducts.
     */
    distinct?: TblproductScalarFieldEnum | TblproductScalarFieldEnum[]
  }

  /**
   * tblproduct findFirstOrThrow
   */
  export type tblproductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter, which tblproduct to fetch.
     */
    where?: tblproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblproducts to fetch.
     */
    orderBy?: tblproductOrderByWithRelationInput | tblproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblproducts.
     */
    cursor?: tblproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblproducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblproducts.
     */
    distinct?: TblproductScalarFieldEnum | TblproductScalarFieldEnum[]
  }

  /**
   * tblproduct findMany
   */
  export type tblproductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter, which tblproducts to fetch.
     */
    where?: tblproductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblproducts to fetch.
     */
    orderBy?: tblproductOrderByWithRelationInput | tblproductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblproducts.
     */
    cursor?: tblproductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblproducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblproducts.
     */
    skip?: number
    distinct?: TblproductScalarFieldEnum | TblproductScalarFieldEnum[]
  }

  /**
   * tblproduct create
   */
  export type tblproductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * The data needed to create a tblproduct.
     */
    data: XOR<tblproductCreateInput, tblproductUncheckedCreateInput>
  }

  /**
   * tblproduct createMany
   */
  export type tblproductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblproducts.
     */
    data: tblproductCreateManyInput | tblproductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblproduct update
   */
  export type tblproductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * The data needed to update a tblproduct.
     */
    data: XOR<tblproductUpdateInput, tblproductUncheckedUpdateInput>
    /**
     * Choose, which tblproduct to update.
     */
    where: tblproductWhereUniqueInput
  }

  /**
   * tblproduct updateMany
   */
  export type tblproductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblproducts.
     */
    data: XOR<tblproductUpdateManyMutationInput, tblproductUncheckedUpdateManyInput>
    /**
     * Filter which tblproducts to update
     */
    where?: tblproductWhereInput
  }

  /**
   * tblproduct upsert
   */
  export type tblproductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * The filter to search for the tblproduct to update in case it exists.
     */
    where: tblproductWhereUniqueInput
    /**
     * In case the tblproduct found by the `where` argument doesn't exist, create a new tblproduct with this data.
     */
    create: XOR<tblproductCreateInput, tblproductUncheckedCreateInput>
    /**
     * In case the tblproduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblproductUpdateInput, tblproductUncheckedUpdateInput>
  }

  /**
   * tblproduct delete
   */
  export type tblproductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
    /**
     * Filter which tblproduct to delete.
     */
    where: tblproductWhereUniqueInput
  }

  /**
   * tblproduct deleteMany
   */
  export type tblproductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblproducts to delete
     */
    where?: tblproductWhereInput
  }

  /**
   * tblproduct.orders
   */
  export type tblproduct$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    where?: tblorderWhereInput
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    cursor?: tblorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TblorderScalarFieldEnum | TblorderScalarFieldEnum[]
  }

  /**
   * tblproduct without action
   */
  export type tblproductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblproduct
     */
    select?: tblproductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblproductInclude<ExtArgs> | null
  }


  /**
   * Model tblrole
   */

  export type AggregateTblrole = {
    _count: TblroleCountAggregateOutputType | null
    _avg: TblroleAvgAggregateOutputType | null
    _sum: TblroleSumAggregateOutputType | null
    _min: TblroleMinAggregateOutputType | null
    _max: TblroleMaxAggregateOutputType | null
  }

  export type TblroleAvgAggregateOutputType = {
    id: number | null
  }

  export type TblroleSumAggregateOutputType = {
    id: number | null
  }

  export type TblroleMinAggregateOutputType = {
    id: number | null
    role: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TblroleMaxAggregateOutputType = {
    id: number | null
    role: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TblroleCountAggregateOutputType = {
    id: number
    role: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TblroleAvgAggregateInputType = {
    id?: true
  }

  export type TblroleSumAggregateInputType = {
    id?: true
  }

  export type TblroleMinAggregateInputType = {
    id?: true
    role?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TblroleMaxAggregateInputType = {
    id?: true
    role?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TblroleCountAggregateInputType = {
    id?: true
    role?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TblroleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblrole to aggregate.
     */
    where?: tblroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblroles to fetch.
     */
    orderBy?: tblroleOrderByWithRelationInput | tblroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblroles
    **/
    _count?: true | TblroleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblroleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblroleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblroleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblroleMaxAggregateInputType
  }

  export type GetTblroleAggregateType<T extends TblroleAggregateArgs> = {
        [P in keyof T & keyof AggregateTblrole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblrole[P]>
      : GetScalarType<T[P], AggregateTblrole[P]>
  }




  export type tblroleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblroleWhereInput
    orderBy?: tblroleOrderByWithAggregationInput | tblroleOrderByWithAggregationInput[]
    by: TblroleScalarFieldEnum[] | TblroleScalarFieldEnum
    having?: tblroleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblroleCountAggregateInputType | true
    _avg?: TblroleAvgAggregateInputType
    _sum?: TblroleSumAggregateInputType
    _min?: TblroleMinAggregateInputType
    _max?: TblroleMaxAggregateInputType
  }

  export type TblroleGroupByOutputType = {
    id: number
    role: string
    description: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: TblroleCountAggregateOutputType | null
    _avg: TblroleAvgAggregateOutputType | null
    _sum: TblroleSumAggregateOutputType | null
    _min: TblroleMinAggregateOutputType | null
    _max: TblroleMaxAggregateOutputType | null
  }

  type GetTblroleGroupByPayload<T extends tblroleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblroleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblroleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblroleGroupByOutputType[P]>
            : GetScalarType<T[P], TblroleGroupByOutputType[P]>
        }
      >
    >


  export type tblroleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subgroups?: boolean | tblrole$subgroupsArgs<ExtArgs>
    _count?: boolean | TblroleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblrole"]>


  export type tblroleSelectScalar = {
    id?: boolean
    role?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tblroleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subgroups?: boolean | tblrole$subgroupsArgs<ExtArgs>
    _count?: boolean | TblroleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblrolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblrole"
    objects: {
      subgroups: Prisma.$tbluserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      description: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tblrole"]>
    composites: {}
  }

  type tblroleGetPayload<S extends boolean | null | undefined | tblroleDefaultArgs> = $Result.GetResult<Prisma.$tblrolePayload, S>

  type tblroleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblroleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblroleCountAggregateInputType | true
    }

  export interface tblroleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblrole'], meta: { name: 'tblrole' } }
    /**
     * Find zero or one Tblrole that matches the filter.
     * @param {tblroleFindUniqueArgs} args - Arguments to find a Tblrole
     * @example
     * // Get one Tblrole
     * const tblrole = await prisma.tblrole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblroleFindUniqueArgs>(args: SelectSubset<T, tblroleFindUniqueArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblrole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblroleFindUniqueOrThrowArgs} args - Arguments to find a Tblrole
     * @example
     * // Get one Tblrole
     * const tblrole = await prisma.tblrole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblroleFindUniqueOrThrowArgs>(args: SelectSubset<T, tblroleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblrole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleFindFirstArgs} args - Arguments to find a Tblrole
     * @example
     * // Get one Tblrole
     * const tblrole = await prisma.tblrole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblroleFindFirstArgs>(args?: SelectSubset<T, tblroleFindFirstArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblrole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleFindFirstOrThrowArgs} args - Arguments to find a Tblrole
     * @example
     * // Get one Tblrole
     * const tblrole = await prisma.tblrole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblroleFindFirstOrThrowArgs>(args?: SelectSubset<T, tblroleFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblroles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblroles
     * const tblroles = await prisma.tblrole.findMany()
     * 
     * // Get first 10 Tblroles
     * const tblroles = await prisma.tblrole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblroleWithIdOnly = await prisma.tblrole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblroleFindManyArgs>(args?: SelectSubset<T, tblroleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblrole.
     * @param {tblroleCreateArgs} args - Arguments to create a Tblrole.
     * @example
     * // Create one Tblrole
     * const Tblrole = await prisma.tblrole.create({
     *   data: {
     *     // ... data to create a Tblrole
     *   }
     * })
     * 
     */
    create<T extends tblroleCreateArgs>(args: SelectSubset<T, tblroleCreateArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblroles.
     * @param {tblroleCreateManyArgs} args - Arguments to create many Tblroles.
     * @example
     * // Create many Tblroles
     * const tblrole = await prisma.tblrole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblroleCreateManyArgs>(args?: SelectSubset<T, tblroleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblrole.
     * @param {tblroleDeleteArgs} args - Arguments to delete one Tblrole.
     * @example
     * // Delete one Tblrole
     * const Tblrole = await prisma.tblrole.delete({
     *   where: {
     *     // ... filter to delete one Tblrole
     *   }
     * })
     * 
     */
    delete<T extends tblroleDeleteArgs>(args: SelectSubset<T, tblroleDeleteArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblrole.
     * @param {tblroleUpdateArgs} args - Arguments to update one Tblrole.
     * @example
     * // Update one Tblrole
     * const tblrole = await prisma.tblrole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblroleUpdateArgs>(args: SelectSubset<T, tblroleUpdateArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblroles.
     * @param {tblroleDeleteManyArgs} args - Arguments to filter Tblroles to delete.
     * @example
     * // Delete a few Tblroles
     * const { count } = await prisma.tblrole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblroleDeleteManyArgs>(args?: SelectSubset<T, tblroleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblroles
     * const tblrole = await prisma.tblrole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblroleUpdateManyArgs>(args: SelectSubset<T, tblroleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblrole.
     * @param {tblroleUpsertArgs} args - Arguments to update or create a Tblrole.
     * @example
     * // Update or create a Tblrole
     * const tblrole = await prisma.tblrole.upsert({
     *   create: {
     *     // ... data to create a Tblrole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblrole we want to update
     *   }
     * })
     */
    upsert<T extends tblroleUpsertArgs>(args: SelectSubset<T, tblroleUpsertArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleCountArgs} args - Arguments to filter Tblroles to count.
     * @example
     * // Count the number of Tblroles
     * const count = await prisma.tblrole.count({
     *   where: {
     *     // ... the filter for the Tblroles we want to count
     *   }
     * })
    **/
    count<T extends tblroleCountArgs>(
      args?: Subset<T, tblroleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblroleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblroleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblroleAggregateArgs>(args: Subset<T, TblroleAggregateArgs>): Prisma.PrismaPromise<GetTblroleAggregateType<T>>

    /**
     * Group by Tblrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblroleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblroleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblroleGroupByArgs['orderBy'] }
        : { orderBy?: tblroleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblroleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblroleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblrole model
   */
  readonly fields: tblroleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblrole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblroleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subgroups<T extends tblrole$subgroupsArgs<ExtArgs> = {}>(args?: Subset<T, tblrole$subgroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblrole model
   */ 
  interface tblroleFieldRefs {
    readonly id: FieldRef<"tblrole", 'Int'>
    readonly role: FieldRef<"tblrole", 'String'>
    readonly description: FieldRef<"tblrole", 'String'>
    readonly image: FieldRef<"tblrole", 'String'>
    readonly createdAt: FieldRef<"tblrole", 'DateTime'>
    readonly updatedAt: FieldRef<"tblrole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblrole findUnique
   */
  export type tblroleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter, which tblrole to fetch.
     */
    where: tblroleWhereUniqueInput
  }

  /**
   * tblrole findUniqueOrThrow
   */
  export type tblroleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter, which tblrole to fetch.
     */
    where: tblroleWhereUniqueInput
  }

  /**
   * tblrole findFirst
   */
  export type tblroleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter, which tblrole to fetch.
     */
    where?: tblroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblroles to fetch.
     */
    orderBy?: tblroleOrderByWithRelationInput | tblroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblroles.
     */
    cursor?: tblroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblroles.
     */
    distinct?: TblroleScalarFieldEnum | TblroleScalarFieldEnum[]
  }

  /**
   * tblrole findFirstOrThrow
   */
  export type tblroleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter, which tblrole to fetch.
     */
    where?: tblroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblroles to fetch.
     */
    orderBy?: tblroleOrderByWithRelationInput | tblroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblroles.
     */
    cursor?: tblroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblroles.
     */
    distinct?: TblroleScalarFieldEnum | TblroleScalarFieldEnum[]
  }

  /**
   * tblrole findMany
   */
  export type tblroleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter, which tblroles to fetch.
     */
    where?: tblroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblroles to fetch.
     */
    orderBy?: tblroleOrderByWithRelationInput | tblroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblroles.
     */
    cursor?: tblroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblroles.
     */
    skip?: number
    distinct?: TblroleScalarFieldEnum | TblroleScalarFieldEnum[]
  }

  /**
   * tblrole create
   */
  export type tblroleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * The data needed to create a tblrole.
     */
    data: XOR<tblroleCreateInput, tblroleUncheckedCreateInput>
  }

  /**
   * tblrole createMany
   */
  export type tblroleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblroles.
     */
    data: tblroleCreateManyInput | tblroleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblrole update
   */
  export type tblroleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * The data needed to update a tblrole.
     */
    data: XOR<tblroleUpdateInput, tblroleUncheckedUpdateInput>
    /**
     * Choose, which tblrole to update.
     */
    where: tblroleWhereUniqueInput
  }

  /**
   * tblrole updateMany
   */
  export type tblroleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblroles.
     */
    data: XOR<tblroleUpdateManyMutationInput, tblroleUncheckedUpdateManyInput>
    /**
     * Filter which tblroles to update
     */
    where?: tblroleWhereInput
  }

  /**
   * tblrole upsert
   */
  export type tblroleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * The filter to search for the tblrole to update in case it exists.
     */
    where: tblroleWhereUniqueInput
    /**
     * In case the tblrole found by the `where` argument doesn't exist, create a new tblrole with this data.
     */
    create: XOR<tblroleCreateInput, tblroleUncheckedCreateInput>
    /**
     * In case the tblrole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblroleUpdateInput, tblroleUncheckedUpdateInput>
  }

  /**
   * tblrole delete
   */
  export type tblroleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
    /**
     * Filter which tblrole to delete.
     */
    where: tblroleWhereUniqueInput
  }

  /**
   * tblrole deleteMany
   */
  export type tblroleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblroles to delete
     */
    where?: tblroleWhereInput
  }

  /**
   * tblrole.subgroups
   */
  export type tblrole$subgroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    where?: tbluserWhereInput
    orderBy?: tbluserOrderByWithRelationInput | tbluserOrderByWithRelationInput[]
    cursor?: tbluserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TbluserScalarFieldEnum | TbluserScalarFieldEnum[]
  }

  /**
   * tblrole without action
   */
  export type tblroleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblrole
     */
    select?: tblroleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblroleInclude<ExtArgs> | null
  }


  /**
   * Model tbluser
   */

  export type AggregateTbluser = {
    _count: TbluserCountAggregateOutputType | null
    _avg: TbluserAvgAggregateOutputType | null
    _sum: TbluserSumAggregateOutputType | null
    _min: TbluserMinAggregateOutputType | null
    _max: TbluserMaxAggregateOutputType | null
  }

  export type TbluserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type TbluserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type TbluserMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
  }

  export type TbluserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    telefono: string | null
    direccion: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
  }

  export type TbluserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    telefono: number
    direccion: number
    email: number
    createdAt: number
    updatedAt: number
    roleId: number
    _all: number
  }


  export type TbluserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type TbluserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type TbluserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    telefono?: true
    direccion?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type TbluserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    telefono?: true
    direccion?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type TbluserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    telefono?: true
    direccion?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    _all?: true
  }

  export type TbluserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbluser to aggregate.
     */
    where?: tbluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblusers to fetch.
     */
    orderBy?: tbluserOrderByWithRelationInput | tbluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblusers
    **/
    _count?: true | TbluserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TbluserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TbluserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TbluserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TbluserMaxAggregateInputType
  }

  export type GetTbluserAggregateType<T extends TbluserAggregateArgs> = {
        [P in keyof T & keyof AggregateTbluser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbluser[P]>
      : GetScalarType<T[P], AggregateTbluser[P]>
  }




  export type tbluserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbluserWhereInput
    orderBy?: tbluserOrderByWithAggregationInput | tbluserOrderByWithAggregationInput[]
    by: TbluserScalarFieldEnum[] | TbluserScalarFieldEnum
    having?: tbluserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TbluserCountAggregateInputType | true
    _avg?: TbluserAvgAggregateInputType
    _sum?: TbluserSumAggregateInputType
    _min?: TbluserMinAggregateInputType
    _max?: TbluserMaxAggregateInputType
  }

  export type TbluserGroupByOutputType = {
    id: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt: Date
    updatedAt: Date
    roleId: number
    _count: TbluserCountAggregateOutputType | null
    _avg: TbluserAvgAggregateOutputType | null
    _sum: TbluserSumAggregateOutputType | null
    _min: TbluserMinAggregateOutputType | null
    _max: TbluserMaxAggregateOutputType | null
  }

  type GetTbluserGroupByPayload<T extends tbluserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TbluserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TbluserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TbluserGroupByOutputType[P]>
            : GetScalarType<T[P], TbluserGroupByOutputType[P]>
        }
      >
    >


  export type tbluserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    role?: boolean | tblroleDefaultArgs<ExtArgs>
    categories?: boolean | tbluser$categoriesArgs<ExtArgs>
    _count?: boolean | TbluserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbluser"]>


  export type tbluserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    telefono?: boolean
    direccion?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
  }

  export type tbluserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | tblroleDefaultArgs<ExtArgs>
    categories?: boolean | tbluser$categoriesArgs<ExtArgs>
    _count?: boolean | TbluserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tbluserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbluser"
    objects: {
      role: Prisma.$tblrolePayload<ExtArgs>
      categories: Prisma.$tblorderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      telefono: string
      direccion: string
      email: string
      createdAt: Date
      updatedAt: Date
      roleId: number
    }, ExtArgs["result"]["tbluser"]>
    composites: {}
  }

  type tbluserGetPayload<S extends boolean | null | undefined | tbluserDefaultArgs> = $Result.GetResult<Prisma.$tbluserPayload, S>

  type tbluserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tbluserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TbluserCountAggregateInputType | true
    }

  export interface tbluserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbluser'], meta: { name: 'tbluser' } }
    /**
     * Find zero or one Tbluser that matches the filter.
     * @param {tbluserFindUniqueArgs} args - Arguments to find a Tbluser
     * @example
     * // Get one Tbluser
     * const tbluser = await prisma.tbluser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbluserFindUniqueArgs>(args: SelectSubset<T, tbluserFindUniqueArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tbluser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tbluserFindUniqueOrThrowArgs} args - Arguments to find a Tbluser
     * @example
     * // Get one Tbluser
     * const tbluser = await prisma.tbluser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbluserFindUniqueOrThrowArgs>(args: SelectSubset<T, tbluserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tbluser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserFindFirstArgs} args - Arguments to find a Tbluser
     * @example
     * // Get one Tbluser
     * const tbluser = await prisma.tbluser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbluserFindFirstArgs>(args?: SelectSubset<T, tbluserFindFirstArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tbluser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserFindFirstOrThrowArgs} args - Arguments to find a Tbluser
     * @example
     * // Get one Tbluser
     * const tbluser = await prisma.tbluser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbluserFindFirstOrThrowArgs>(args?: SelectSubset<T, tbluserFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblusers
     * const tblusers = await prisma.tbluser.findMany()
     * 
     * // Get first 10 Tblusers
     * const tblusers = await prisma.tbluser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tbluserWithIdOnly = await prisma.tbluser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tbluserFindManyArgs>(args?: SelectSubset<T, tbluserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tbluser.
     * @param {tbluserCreateArgs} args - Arguments to create a Tbluser.
     * @example
     * // Create one Tbluser
     * const Tbluser = await prisma.tbluser.create({
     *   data: {
     *     // ... data to create a Tbluser
     *   }
     * })
     * 
     */
    create<T extends tbluserCreateArgs>(args: SelectSubset<T, tbluserCreateArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblusers.
     * @param {tbluserCreateManyArgs} args - Arguments to create many Tblusers.
     * @example
     * // Create many Tblusers
     * const tbluser = await prisma.tbluser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbluserCreateManyArgs>(args?: SelectSubset<T, tbluserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tbluser.
     * @param {tbluserDeleteArgs} args - Arguments to delete one Tbluser.
     * @example
     * // Delete one Tbluser
     * const Tbluser = await prisma.tbluser.delete({
     *   where: {
     *     // ... filter to delete one Tbluser
     *   }
     * })
     * 
     */
    delete<T extends tbluserDeleteArgs>(args: SelectSubset<T, tbluserDeleteArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tbluser.
     * @param {tbluserUpdateArgs} args - Arguments to update one Tbluser.
     * @example
     * // Update one Tbluser
     * const tbluser = await prisma.tbluser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbluserUpdateArgs>(args: SelectSubset<T, tbluserUpdateArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblusers.
     * @param {tbluserDeleteManyArgs} args - Arguments to filter Tblusers to delete.
     * @example
     * // Delete a few Tblusers
     * const { count } = await prisma.tbluser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbluserDeleteManyArgs>(args?: SelectSubset<T, tbluserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblusers
     * const tbluser = await prisma.tbluser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbluserUpdateManyArgs>(args: SelectSubset<T, tbluserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tbluser.
     * @param {tbluserUpsertArgs} args - Arguments to update or create a Tbluser.
     * @example
     * // Update or create a Tbluser
     * const tbluser = await prisma.tbluser.upsert({
     *   create: {
     *     // ... data to create a Tbluser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbluser we want to update
     *   }
     * })
     */
    upsert<T extends tbluserUpsertArgs>(args: SelectSubset<T, tbluserUpsertArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserCountArgs} args - Arguments to filter Tblusers to count.
     * @example
     * // Count the number of Tblusers
     * const count = await prisma.tbluser.count({
     *   where: {
     *     // ... the filter for the Tblusers we want to count
     *   }
     * })
    **/
    count<T extends tbluserCountArgs>(
      args?: Subset<T, tbluserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TbluserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbluser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TbluserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TbluserAggregateArgs>(args: Subset<T, TbluserAggregateArgs>): Prisma.PrismaPromise<GetTbluserAggregateType<T>>

    /**
     * Group by Tbluser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbluserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tbluserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbluserGroupByArgs['orderBy'] }
        : { orderBy?: tbluserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tbluserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbluserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbluser model
   */
  readonly fields: tbluserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbluser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbluserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends tblroleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblroleDefaultArgs<ExtArgs>>): Prisma__tblroleClient<$Result.GetResult<Prisma.$tblrolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    categories<T extends tbluser$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, tbluser$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tbluser model
   */ 
  interface tbluserFieldRefs {
    readonly id: FieldRef<"tbluser", 'Int'>
    readonly name: FieldRef<"tbluser", 'String'>
    readonly password: FieldRef<"tbluser", 'String'>
    readonly telefono: FieldRef<"tbluser", 'String'>
    readonly direccion: FieldRef<"tbluser", 'String'>
    readonly email: FieldRef<"tbluser", 'String'>
    readonly createdAt: FieldRef<"tbluser", 'DateTime'>
    readonly updatedAt: FieldRef<"tbluser", 'DateTime'>
    readonly roleId: FieldRef<"tbluser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tbluser findUnique
   */
  export type tbluserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter, which tbluser to fetch.
     */
    where: tbluserWhereUniqueInput
  }

  /**
   * tbluser findUniqueOrThrow
   */
  export type tbluserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter, which tbluser to fetch.
     */
    where: tbluserWhereUniqueInput
  }

  /**
   * tbluser findFirst
   */
  export type tbluserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter, which tbluser to fetch.
     */
    where?: tbluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblusers to fetch.
     */
    orderBy?: tbluserOrderByWithRelationInput | tbluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblusers.
     */
    cursor?: tbluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblusers.
     */
    distinct?: TbluserScalarFieldEnum | TbluserScalarFieldEnum[]
  }

  /**
   * tbluser findFirstOrThrow
   */
  export type tbluserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter, which tbluser to fetch.
     */
    where?: tbluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblusers to fetch.
     */
    orderBy?: tbluserOrderByWithRelationInput | tbluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblusers.
     */
    cursor?: tbluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblusers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblusers.
     */
    distinct?: TbluserScalarFieldEnum | TbluserScalarFieldEnum[]
  }

  /**
   * tbluser findMany
   */
  export type tbluserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter, which tblusers to fetch.
     */
    where?: tbluserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblusers to fetch.
     */
    orderBy?: tbluserOrderByWithRelationInput | tbluserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblusers.
     */
    cursor?: tbluserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblusers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblusers.
     */
    skip?: number
    distinct?: TbluserScalarFieldEnum | TbluserScalarFieldEnum[]
  }

  /**
   * tbluser create
   */
  export type tbluserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * The data needed to create a tbluser.
     */
    data: XOR<tbluserCreateInput, tbluserUncheckedCreateInput>
  }

  /**
   * tbluser createMany
   */
  export type tbluserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblusers.
     */
    data: tbluserCreateManyInput | tbluserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbluser update
   */
  export type tbluserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * The data needed to update a tbluser.
     */
    data: XOR<tbluserUpdateInput, tbluserUncheckedUpdateInput>
    /**
     * Choose, which tbluser to update.
     */
    where: tbluserWhereUniqueInput
  }

  /**
   * tbluser updateMany
   */
  export type tbluserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblusers.
     */
    data: XOR<tbluserUpdateManyMutationInput, tbluserUncheckedUpdateManyInput>
    /**
     * Filter which tblusers to update
     */
    where?: tbluserWhereInput
  }

  /**
   * tbluser upsert
   */
  export type tbluserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * The filter to search for the tbluser to update in case it exists.
     */
    where: tbluserWhereUniqueInput
    /**
     * In case the tbluser found by the `where` argument doesn't exist, create a new tbluser with this data.
     */
    create: XOR<tbluserCreateInput, tbluserUncheckedCreateInput>
    /**
     * In case the tbluser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbluserUpdateInput, tbluserUncheckedUpdateInput>
  }

  /**
   * tbluser delete
   */
  export type tbluserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
    /**
     * Filter which tbluser to delete.
     */
    where: tbluserWhereUniqueInput
  }

  /**
   * tbluser deleteMany
   */
  export type tbluserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblusers to delete
     */
    where?: tbluserWhereInput
  }

  /**
   * tbluser.categories
   */
  export type tbluser$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    where?: tblorderWhereInput
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    cursor?: tblorderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TblorderScalarFieldEnum | TblorderScalarFieldEnum[]
  }

  /**
   * tbluser without action
   */
  export type tbluserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbluser
     */
    select?: tbluserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbluserInclude<ExtArgs> | null
  }


  /**
   * Model tblorder
   */

  export type AggregateTblorder = {
    _count: TblorderCountAggregateOutputType | null
    _avg: TblorderAvgAggregateOutputType | null
    _sum: TblorderSumAggregateOutputType | null
    _min: TblorderMinAggregateOutputType | null
    _max: TblorderMaxAggregateOutputType | null
  }

  export type TblorderAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    userId: number | null
    productId: number | null
  }

  export type TblorderSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    userId: number | null
    productId: number | null
  }

  export type TblorderMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    productId: number | null
  }

  export type TblorderMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    productId: number | null
  }

  export type TblorderCountAggregateOutputType = {
    id: number
    quantity: number
    createdAt: number
    updatedAt: number
    userId: number
    productId: number
    _all: number
  }


  export type TblorderAvgAggregateInputType = {
    id?: true
    quantity?: true
    userId?: true
    productId?: true
  }

  export type TblorderSumAggregateInputType = {
    id?: true
    quantity?: true
    userId?: true
    productId?: true
  }

  export type TblorderMinAggregateInputType = {
    id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
  }

  export type TblorderMaxAggregateInputType = {
    id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
  }

  export type TblorderCountAggregateInputType = {
    id?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    productId?: true
    _all?: true
  }

  export type TblorderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblorder to aggregate.
     */
    where?: tblorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblorders to fetch.
     */
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblorders
    **/
    _count?: true | TblorderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblorderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblorderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblorderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblorderMaxAggregateInputType
  }

  export type GetTblorderAggregateType<T extends TblorderAggregateArgs> = {
        [P in keyof T & keyof AggregateTblorder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblorder[P]>
      : GetScalarType<T[P], AggregateTblorder[P]>
  }




  export type tblorderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblorderWhereInput
    orderBy?: tblorderOrderByWithAggregationInput | tblorderOrderByWithAggregationInput[]
    by: TblorderScalarFieldEnum[] | TblorderScalarFieldEnum
    having?: tblorderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblorderCountAggregateInputType | true
    _avg?: TblorderAvgAggregateInputType
    _sum?: TblorderSumAggregateInputType
    _min?: TblorderMinAggregateInputType
    _max?: TblorderMaxAggregateInputType
  }

  export type TblorderGroupByOutputType = {
    id: number
    quantity: number
    createdAt: Date
    updatedAt: Date
    userId: number
    productId: number
    _count: TblorderCountAggregateOutputType | null
    _avg: TblorderAvgAggregateOutputType | null
    _sum: TblorderSumAggregateOutputType | null
    _min: TblorderMinAggregateOutputType | null
    _max: TblorderMaxAggregateOutputType | null
  }

  type GetTblorderGroupByPayload<T extends tblorderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblorderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblorderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblorderGroupByOutputType[P]>
            : GetScalarType<T[P], TblorderGroupByOutputType[P]>
        }
      >
    >


  export type tblorderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | tbluserDefaultArgs<ExtArgs>
    product?: boolean | tblproductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblorder"]>


  export type tblorderSelectScalar = {
    id?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    productId?: boolean
  }

  export type tblorderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | tbluserDefaultArgs<ExtArgs>
    product?: boolean | tblproductDefaultArgs<ExtArgs>
  }

  export type $tblorderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblorder"
    objects: {
      user: Prisma.$tbluserPayload<ExtArgs>
      product: Prisma.$tblproductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      createdAt: Date
      updatedAt: Date
      userId: number
      productId: number
    }, ExtArgs["result"]["tblorder"]>
    composites: {}
  }

  type tblorderGetPayload<S extends boolean | null | undefined | tblorderDefaultArgs> = $Result.GetResult<Prisma.$tblorderPayload, S>

  type tblorderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblorderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblorderCountAggregateInputType | true
    }

  export interface tblorderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblorder'], meta: { name: 'tblorder' } }
    /**
     * Find zero or one Tblorder that matches the filter.
     * @param {tblorderFindUniqueArgs} args - Arguments to find a Tblorder
     * @example
     * // Get one Tblorder
     * const tblorder = await prisma.tblorder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblorderFindUniqueArgs>(args: SelectSubset<T, tblorderFindUniqueArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tblorder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblorderFindUniqueOrThrowArgs} args - Arguments to find a Tblorder
     * @example
     * // Get one Tblorder
     * const tblorder = await prisma.tblorder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblorderFindUniqueOrThrowArgs>(args: SelectSubset<T, tblorderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tblorder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderFindFirstArgs} args - Arguments to find a Tblorder
     * @example
     * // Get one Tblorder
     * const tblorder = await prisma.tblorder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblorderFindFirstArgs>(args?: SelectSubset<T, tblorderFindFirstArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tblorder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderFindFirstOrThrowArgs} args - Arguments to find a Tblorder
     * @example
     * // Get one Tblorder
     * const tblorder = await prisma.tblorder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblorderFindFirstOrThrowArgs>(args?: SelectSubset<T, tblorderFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tblorders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tblorders
     * const tblorders = await prisma.tblorder.findMany()
     * 
     * // Get first 10 Tblorders
     * const tblorders = await prisma.tblorder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tblorderWithIdOnly = await prisma.tblorder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tblorderFindManyArgs>(args?: SelectSubset<T, tblorderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tblorder.
     * @param {tblorderCreateArgs} args - Arguments to create a Tblorder.
     * @example
     * // Create one Tblorder
     * const Tblorder = await prisma.tblorder.create({
     *   data: {
     *     // ... data to create a Tblorder
     *   }
     * })
     * 
     */
    create<T extends tblorderCreateArgs>(args: SelectSubset<T, tblorderCreateArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tblorders.
     * @param {tblorderCreateManyArgs} args - Arguments to create many Tblorders.
     * @example
     * // Create many Tblorders
     * const tblorder = await prisma.tblorder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblorderCreateManyArgs>(args?: SelectSubset<T, tblorderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tblorder.
     * @param {tblorderDeleteArgs} args - Arguments to delete one Tblorder.
     * @example
     * // Delete one Tblorder
     * const Tblorder = await prisma.tblorder.delete({
     *   where: {
     *     // ... filter to delete one Tblorder
     *   }
     * })
     * 
     */
    delete<T extends tblorderDeleteArgs>(args: SelectSubset<T, tblorderDeleteArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tblorder.
     * @param {tblorderUpdateArgs} args - Arguments to update one Tblorder.
     * @example
     * // Update one Tblorder
     * const tblorder = await prisma.tblorder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblorderUpdateArgs>(args: SelectSubset<T, tblorderUpdateArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tblorders.
     * @param {tblorderDeleteManyArgs} args - Arguments to filter Tblorders to delete.
     * @example
     * // Delete a few Tblorders
     * const { count } = await prisma.tblorder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblorderDeleteManyArgs>(args?: SelectSubset<T, tblorderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tblorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tblorders
     * const tblorder = await prisma.tblorder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblorderUpdateManyArgs>(args: SelectSubset<T, tblorderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tblorder.
     * @param {tblorderUpsertArgs} args - Arguments to update or create a Tblorder.
     * @example
     * // Update or create a Tblorder
     * const tblorder = await prisma.tblorder.upsert({
     *   create: {
     *     // ... data to create a Tblorder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tblorder we want to update
     *   }
     * })
     */
    upsert<T extends tblorderUpsertArgs>(args: SelectSubset<T, tblorderUpsertArgs<ExtArgs>>): Prisma__tblorderClient<$Result.GetResult<Prisma.$tblorderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tblorders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderCountArgs} args - Arguments to filter Tblorders to count.
     * @example
     * // Count the number of Tblorders
     * const count = await prisma.tblorder.count({
     *   where: {
     *     // ... the filter for the Tblorders we want to count
     *   }
     * })
    **/
    count<T extends tblorderCountArgs>(
      args?: Subset<T, tblorderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblorderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tblorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblorderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblorderAggregateArgs>(args: Subset<T, TblorderAggregateArgs>): Prisma.PrismaPromise<GetTblorderAggregateType<T>>

    /**
     * Group by Tblorder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblorderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblorderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblorderGroupByArgs['orderBy'] }
        : { orderBy?: tblorderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblorderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblorderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblorder model
   */
  readonly fields: tblorderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblorder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblorderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends tbluserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbluserDefaultArgs<ExtArgs>>): Prisma__tbluserClient<$Result.GetResult<Prisma.$tbluserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends tblproductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblproductDefaultArgs<ExtArgs>>): Prisma__tblproductClient<$Result.GetResult<Prisma.$tblproductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblorder model
   */ 
  interface tblorderFieldRefs {
    readonly id: FieldRef<"tblorder", 'Int'>
    readonly quantity: FieldRef<"tblorder", 'Int'>
    readonly createdAt: FieldRef<"tblorder", 'DateTime'>
    readonly updatedAt: FieldRef<"tblorder", 'DateTime'>
    readonly userId: FieldRef<"tblorder", 'Int'>
    readonly productId: FieldRef<"tblorder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tblorder findUnique
   */
  export type tblorderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter, which tblorder to fetch.
     */
    where: tblorderWhereUniqueInput
  }

  /**
   * tblorder findUniqueOrThrow
   */
  export type tblorderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter, which tblorder to fetch.
     */
    where: tblorderWhereUniqueInput
  }

  /**
   * tblorder findFirst
   */
  export type tblorderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter, which tblorder to fetch.
     */
    where?: tblorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblorders to fetch.
     */
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblorders.
     */
    cursor?: tblorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblorders.
     */
    distinct?: TblorderScalarFieldEnum | TblorderScalarFieldEnum[]
  }

  /**
   * tblorder findFirstOrThrow
   */
  export type tblorderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter, which tblorder to fetch.
     */
    where?: tblorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblorders to fetch.
     */
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblorders.
     */
    cursor?: tblorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblorders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblorders.
     */
    distinct?: TblorderScalarFieldEnum | TblorderScalarFieldEnum[]
  }

  /**
   * tblorder findMany
   */
  export type tblorderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter, which tblorders to fetch.
     */
    where?: tblorderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblorders to fetch.
     */
    orderBy?: tblorderOrderByWithRelationInput | tblorderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblorders.
     */
    cursor?: tblorderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblorders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblorders.
     */
    skip?: number
    distinct?: TblorderScalarFieldEnum | TblorderScalarFieldEnum[]
  }

  /**
   * tblorder create
   */
  export type tblorderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * The data needed to create a tblorder.
     */
    data: XOR<tblorderCreateInput, tblorderUncheckedCreateInput>
  }

  /**
   * tblorder createMany
   */
  export type tblorderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblorders.
     */
    data: tblorderCreateManyInput | tblorderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tblorder update
   */
  export type tblorderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * The data needed to update a tblorder.
     */
    data: XOR<tblorderUpdateInput, tblorderUncheckedUpdateInput>
    /**
     * Choose, which tblorder to update.
     */
    where: tblorderWhereUniqueInput
  }

  /**
   * tblorder updateMany
   */
  export type tblorderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblorders.
     */
    data: XOR<tblorderUpdateManyMutationInput, tblorderUncheckedUpdateManyInput>
    /**
     * Filter which tblorders to update
     */
    where?: tblorderWhereInput
  }

  /**
   * tblorder upsert
   */
  export type tblorderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * The filter to search for the tblorder to update in case it exists.
     */
    where: tblorderWhereUniqueInput
    /**
     * In case the tblorder found by the `where` argument doesn't exist, create a new tblorder with this data.
     */
    create: XOR<tblorderCreateInput, tblorderUncheckedCreateInput>
    /**
     * In case the tblorder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblorderUpdateInput, tblorderUncheckedUpdateInput>
  }

  /**
   * tblorder delete
   */
  export type tblorderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
    /**
     * Filter which tblorder to delete.
     */
    where: tblorderWhereUniqueInput
  }

  /**
   * tblorder deleteMany
   */
  export type tblorderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblorders to delete
     */
    where?: tblorderWhereInput
  }

  /**
   * tblorder without action
   */
  export type tblorderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblorder
     */
    select?: tblorderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblorderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TblgroupScalarFieldEnum: {
    id: 'id',
    group: 'group',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TblgroupScalarFieldEnum = (typeof TblgroupScalarFieldEnum)[keyof typeof TblgroupScalarFieldEnum]


  export const TblsubgroupScalarFieldEnum: {
    id: 'id',
    subgroup: 'subgroup',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    groupId: 'groupId'
  };

  export type TblsubgroupScalarFieldEnum = (typeof TblsubgroupScalarFieldEnum)[keyof typeof TblsubgroupScalarFieldEnum]


  export const TblcategoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subgroupId: 'subgroupId'
  };

  export type TblcategoryScalarFieldEnum = (typeof TblcategoryScalarFieldEnum)[keyof typeof TblcategoryScalarFieldEnum]


  export const TblproductScalarFieldEnum: {
    id: 'id',
    product: 'product',
    description: 'description',
    price: 'price',
    stock: 'stock',
    unit: 'unit',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type TblproductScalarFieldEnum = (typeof TblproductScalarFieldEnum)[keyof typeof TblproductScalarFieldEnum]


  export const TblroleScalarFieldEnum: {
    id: 'id',
    role: 'role',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TblroleScalarFieldEnum = (typeof TblroleScalarFieldEnum)[keyof typeof TblroleScalarFieldEnum]


  export const TbluserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    telefono: 'telefono',
    direccion: 'direccion',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roleId: 'roleId'
  };

  export type TbluserScalarFieldEnum = (typeof TbluserScalarFieldEnum)[keyof typeof TbluserScalarFieldEnum]


  export const TblorderScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    productId: 'productId'
  };

  export type TblorderScalarFieldEnum = (typeof TblorderScalarFieldEnum)[keyof typeof TblorderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tblgroupWhereInput = {
    AND?: tblgroupWhereInput | tblgroupWhereInput[]
    OR?: tblgroupWhereInput[]
    NOT?: tblgroupWhereInput | tblgroupWhereInput[]
    id?: IntFilter<"tblgroup"> | number
    group?: StringFilter<"tblgroup"> | string
    description?: StringNullableFilter<"tblgroup"> | string | null
    image?: StringFilter<"tblgroup"> | string
    createdAt?: DateTimeFilter<"tblgroup"> | Date | string
    updatedAt?: DateTimeFilter<"tblgroup"> | Date | string
    subgroups?: TblsubgroupListRelationFilter
  }

  export type tblgroupOrderByWithRelationInput = {
    id?: SortOrder
    group?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroups?: tblsubgroupOrderByRelationAggregateInput
  }

  export type tblgroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblgroupWhereInput | tblgroupWhereInput[]
    OR?: tblgroupWhereInput[]
    NOT?: tblgroupWhereInput | tblgroupWhereInput[]
    group?: StringFilter<"tblgroup"> | string
    description?: StringNullableFilter<"tblgroup"> | string | null
    image?: StringFilter<"tblgroup"> | string
    createdAt?: DateTimeFilter<"tblgroup"> | Date | string
    updatedAt?: DateTimeFilter<"tblgroup"> | Date | string
    subgroups?: TblsubgroupListRelationFilter
  }, "id">

  export type tblgroupOrderByWithAggregationInput = {
    id?: SortOrder
    group?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tblgroupCountOrderByAggregateInput
    _avg?: tblgroupAvgOrderByAggregateInput
    _max?: tblgroupMaxOrderByAggregateInput
    _min?: tblgroupMinOrderByAggregateInput
    _sum?: tblgroupSumOrderByAggregateInput
  }

  export type tblgroupScalarWhereWithAggregatesInput = {
    AND?: tblgroupScalarWhereWithAggregatesInput | tblgroupScalarWhereWithAggregatesInput[]
    OR?: tblgroupScalarWhereWithAggregatesInput[]
    NOT?: tblgroupScalarWhereWithAggregatesInput | tblgroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblgroup"> | number
    group?: StringWithAggregatesFilter<"tblgroup"> | string
    description?: StringNullableWithAggregatesFilter<"tblgroup"> | string | null
    image?: StringWithAggregatesFilter<"tblgroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tblgroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblgroup"> | Date | string
  }

  export type tblsubgroupWhereInput = {
    AND?: tblsubgroupWhereInput | tblsubgroupWhereInput[]
    OR?: tblsubgroupWhereInput[]
    NOT?: tblsubgroupWhereInput | tblsubgroupWhereInput[]
    id?: IntFilter<"tblsubgroup"> | number
    subgroup?: StringFilter<"tblsubgroup"> | string
    description?: StringNullableFilter<"tblsubgroup"> | string | null
    image?: StringFilter<"tblsubgroup"> | string
    createdAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    updatedAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    groupId?: IntFilter<"tblsubgroup"> | number
    group?: XOR<TblgroupRelationFilter, tblgroupWhereInput>
    categories?: TblcategoryListRelationFilter
  }

  export type tblsubgroupOrderByWithRelationInput = {
    id?: SortOrder
    subgroup?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
    group?: tblgroupOrderByWithRelationInput
    categories?: tblcategoryOrderByRelationAggregateInput
  }

  export type tblsubgroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblsubgroupWhereInput | tblsubgroupWhereInput[]
    OR?: tblsubgroupWhereInput[]
    NOT?: tblsubgroupWhereInput | tblsubgroupWhereInput[]
    subgroup?: StringFilter<"tblsubgroup"> | string
    description?: StringNullableFilter<"tblsubgroup"> | string | null
    image?: StringFilter<"tblsubgroup"> | string
    createdAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    updatedAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    groupId?: IntFilter<"tblsubgroup"> | number
    group?: XOR<TblgroupRelationFilter, tblgroupWhereInput>
    categories?: TblcategoryListRelationFilter
  }, "id">

  export type tblsubgroupOrderByWithAggregationInput = {
    id?: SortOrder
    subgroup?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
    _count?: tblsubgroupCountOrderByAggregateInput
    _avg?: tblsubgroupAvgOrderByAggregateInput
    _max?: tblsubgroupMaxOrderByAggregateInput
    _min?: tblsubgroupMinOrderByAggregateInput
    _sum?: tblsubgroupSumOrderByAggregateInput
  }

  export type tblsubgroupScalarWhereWithAggregatesInput = {
    AND?: tblsubgroupScalarWhereWithAggregatesInput | tblsubgroupScalarWhereWithAggregatesInput[]
    OR?: tblsubgroupScalarWhereWithAggregatesInput[]
    NOT?: tblsubgroupScalarWhereWithAggregatesInput | tblsubgroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblsubgroup"> | number
    subgroup?: StringWithAggregatesFilter<"tblsubgroup"> | string
    description?: StringNullableWithAggregatesFilter<"tblsubgroup"> | string | null
    image?: StringWithAggregatesFilter<"tblsubgroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tblsubgroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblsubgroup"> | Date | string
    groupId?: IntWithAggregatesFilter<"tblsubgroup"> | number
  }

  export type tblcategoryWhereInput = {
    AND?: tblcategoryWhereInput | tblcategoryWhereInput[]
    OR?: tblcategoryWhereInput[]
    NOT?: tblcategoryWhereInput | tblcategoryWhereInput[]
    id?: IntFilter<"tblcategory"> | number
    category?: StringFilter<"tblcategory"> | string
    description?: StringNullableFilter<"tblcategory"> | string | null
    createdAt?: DateTimeFilter<"tblcategory"> | Date | string
    updatedAt?: DateTimeFilter<"tblcategory"> | Date | string
    subgroupId?: IntFilter<"tblcategory"> | number
    subgroup?: XOR<TblsubgroupRelationFilter, tblsubgroupWhereInput>
    products?: TblproductListRelationFilter
  }

  export type tblcategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroupId?: SortOrder
    subgroup?: tblsubgroupOrderByWithRelationInput
    products?: tblproductOrderByRelationAggregateInput
  }

  export type tblcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblcategoryWhereInput | tblcategoryWhereInput[]
    OR?: tblcategoryWhereInput[]
    NOT?: tblcategoryWhereInput | tblcategoryWhereInput[]
    category?: StringFilter<"tblcategory"> | string
    description?: StringNullableFilter<"tblcategory"> | string | null
    createdAt?: DateTimeFilter<"tblcategory"> | Date | string
    updatedAt?: DateTimeFilter<"tblcategory"> | Date | string
    subgroupId?: IntFilter<"tblcategory"> | number
    subgroup?: XOR<TblsubgroupRelationFilter, tblsubgroupWhereInput>
    products?: TblproductListRelationFilter
  }, "id">

  export type tblcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroupId?: SortOrder
    _count?: tblcategoryCountOrderByAggregateInput
    _avg?: tblcategoryAvgOrderByAggregateInput
    _max?: tblcategoryMaxOrderByAggregateInput
    _min?: tblcategoryMinOrderByAggregateInput
    _sum?: tblcategorySumOrderByAggregateInput
  }

  export type tblcategoryScalarWhereWithAggregatesInput = {
    AND?: tblcategoryScalarWhereWithAggregatesInput | tblcategoryScalarWhereWithAggregatesInput[]
    OR?: tblcategoryScalarWhereWithAggregatesInput[]
    NOT?: tblcategoryScalarWhereWithAggregatesInput | tblcategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblcategory"> | number
    category?: StringWithAggregatesFilter<"tblcategory"> | string
    description?: StringNullableWithAggregatesFilter<"tblcategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"tblcategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblcategory"> | Date | string
    subgroupId?: IntWithAggregatesFilter<"tblcategory"> | number
  }

  export type tblproductWhereInput = {
    AND?: tblproductWhereInput | tblproductWhereInput[]
    OR?: tblproductWhereInput[]
    NOT?: tblproductWhereInput | tblproductWhereInput[]
    id?: IntFilter<"tblproduct"> | number
    product?: StringFilter<"tblproduct"> | string
    description?: StringNullableFilter<"tblproduct"> | string | null
    price?: FloatFilter<"tblproduct"> | number
    stock?: IntFilter<"tblproduct"> | number
    unit?: StringFilter<"tblproduct"> | string
    image?: StringFilter<"tblproduct"> | string
    createdAt?: DateTimeFilter<"tblproduct"> | Date | string
    updatedAt?: DateTimeFilter<"tblproduct"> | Date | string
    categoryId?: IntFilter<"tblproduct"> | number
    category?: XOR<TblcategoryRelationFilter, tblcategoryWhereInput>
    orders?: TblorderListRelationFilter
  }

  export type tblproductOrderByWithRelationInput = {
    id?: SortOrder
    product?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: tblcategoryOrderByWithRelationInput
    orders?: tblorderOrderByRelationAggregateInput
  }

  export type tblproductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblproductWhereInput | tblproductWhereInput[]
    OR?: tblproductWhereInput[]
    NOT?: tblproductWhereInput | tblproductWhereInput[]
    product?: StringFilter<"tblproduct"> | string
    description?: StringNullableFilter<"tblproduct"> | string | null
    price?: FloatFilter<"tblproduct"> | number
    stock?: IntFilter<"tblproduct"> | number
    unit?: StringFilter<"tblproduct"> | string
    image?: StringFilter<"tblproduct"> | string
    createdAt?: DateTimeFilter<"tblproduct"> | Date | string
    updatedAt?: DateTimeFilter<"tblproduct"> | Date | string
    categoryId?: IntFilter<"tblproduct"> | number
    category?: XOR<TblcategoryRelationFilter, tblcategoryWhereInput>
    orders?: TblorderListRelationFilter
  }, "id">

  export type tblproductOrderByWithAggregationInput = {
    id?: SortOrder
    product?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: tblproductCountOrderByAggregateInput
    _avg?: tblproductAvgOrderByAggregateInput
    _max?: tblproductMaxOrderByAggregateInput
    _min?: tblproductMinOrderByAggregateInput
    _sum?: tblproductSumOrderByAggregateInput
  }

  export type tblproductScalarWhereWithAggregatesInput = {
    AND?: tblproductScalarWhereWithAggregatesInput | tblproductScalarWhereWithAggregatesInput[]
    OR?: tblproductScalarWhereWithAggregatesInput[]
    NOT?: tblproductScalarWhereWithAggregatesInput | tblproductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblproduct"> | number
    product?: StringWithAggregatesFilter<"tblproduct"> | string
    description?: StringNullableWithAggregatesFilter<"tblproduct"> | string | null
    price?: FloatWithAggregatesFilter<"tblproduct"> | number
    stock?: IntWithAggregatesFilter<"tblproduct"> | number
    unit?: StringWithAggregatesFilter<"tblproduct"> | string
    image?: StringWithAggregatesFilter<"tblproduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tblproduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblproduct"> | Date | string
    categoryId?: IntWithAggregatesFilter<"tblproduct"> | number
  }

  export type tblroleWhereInput = {
    AND?: tblroleWhereInput | tblroleWhereInput[]
    OR?: tblroleWhereInput[]
    NOT?: tblroleWhereInput | tblroleWhereInput[]
    id?: IntFilter<"tblrole"> | number
    role?: StringFilter<"tblrole"> | string
    description?: StringFilter<"tblrole"> | string
    image?: StringFilter<"tblrole"> | string
    createdAt?: DateTimeFilter<"tblrole"> | Date | string
    updatedAt?: DateTimeFilter<"tblrole"> | Date | string
    subgroups?: TbluserListRelationFilter
  }

  export type tblroleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroups?: tbluserOrderByRelationAggregateInput
  }

  export type tblroleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblroleWhereInput | tblroleWhereInput[]
    OR?: tblroleWhereInput[]
    NOT?: tblroleWhereInput | tblroleWhereInput[]
    role?: StringFilter<"tblrole"> | string
    description?: StringFilter<"tblrole"> | string
    image?: StringFilter<"tblrole"> | string
    createdAt?: DateTimeFilter<"tblrole"> | Date | string
    updatedAt?: DateTimeFilter<"tblrole"> | Date | string
    subgroups?: TbluserListRelationFilter
  }, "id">

  export type tblroleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tblroleCountOrderByAggregateInput
    _avg?: tblroleAvgOrderByAggregateInput
    _max?: tblroleMaxOrderByAggregateInput
    _min?: tblroleMinOrderByAggregateInput
    _sum?: tblroleSumOrderByAggregateInput
  }

  export type tblroleScalarWhereWithAggregatesInput = {
    AND?: tblroleScalarWhereWithAggregatesInput | tblroleScalarWhereWithAggregatesInput[]
    OR?: tblroleScalarWhereWithAggregatesInput[]
    NOT?: tblroleScalarWhereWithAggregatesInput | tblroleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblrole"> | number
    role?: StringWithAggregatesFilter<"tblrole"> | string
    description?: StringWithAggregatesFilter<"tblrole"> | string
    image?: StringWithAggregatesFilter<"tblrole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tblrole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblrole"> | Date | string
  }

  export type tbluserWhereInput = {
    AND?: tbluserWhereInput | tbluserWhereInput[]
    OR?: tbluserWhereInput[]
    NOT?: tbluserWhereInput | tbluserWhereInput[]
    id?: IntFilter<"tbluser"> | number
    name?: StringFilter<"tbluser"> | string
    password?: StringFilter<"tbluser"> | string
    telefono?: StringFilter<"tbluser"> | string
    direccion?: StringFilter<"tbluser"> | string
    email?: StringFilter<"tbluser"> | string
    createdAt?: DateTimeFilter<"tbluser"> | Date | string
    updatedAt?: DateTimeFilter<"tbluser"> | Date | string
    roleId?: IntFilter<"tbluser"> | number
    role?: XOR<TblroleRelationFilter, tblroleWhereInput>
    categories?: TblorderListRelationFilter
  }

  export type tbluserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    role?: tblroleOrderByWithRelationInput
    categories?: tblorderOrderByRelationAggregateInput
  }

  export type tbluserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: tbluserWhereInput | tbluserWhereInput[]
    OR?: tbluserWhereInput[]
    NOT?: tbluserWhereInput | tbluserWhereInput[]
    name?: StringFilter<"tbluser"> | string
    password?: StringFilter<"tbluser"> | string
    telefono?: StringFilter<"tbluser"> | string
    direccion?: StringFilter<"tbluser"> | string
    createdAt?: DateTimeFilter<"tbluser"> | Date | string
    updatedAt?: DateTimeFilter<"tbluser"> | Date | string
    roleId?: IntFilter<"tbluser"> | number
    role?: XOR<TblroleRelationFilter, tblroleWhereInput>
    categories?: TblorderListRelationFilter
  }, "id" | "email">

  export type tbluserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    _count?: tbluserCountOrderByAggregateInput
    _avg?: tbluserAvgOrderByAggregateInput
    _max?: tbluserMaxOrderByAggregateInput
    _min?: tbluserMinOrderByAggregateInput
    _sum?: tbluserSumOrderByAggregateInput
  }

  export type tbluserScalarWhereWithAggregatesInput = {
    AND?: tbluserScalarWhereWithAggregatesInput | tbluserScalarWhereWithAggregatesInput[]
    OR?: tbluserScalarWhereWithAggregatesInput[]
    NOT?: tbluserScalarWhereWithAggregatesInput | tbluserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tbluser"> | number
    name?: StringWithAggregatesFilter<"tbluser"> | string
    password?: StringWithAggregatesFilter<"tbluser"> | string
    telefono?: StringWithAggregatesFilter<"tbluser"> | string
    direccion?: StringWithAggregatesFilter<"tbluser"> | string
    email?: StringWithAggregatesFilter<"tbluser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tbluser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tbluser"> | Date | string
    roleId?: IntWithAggregatesFilter<"tbluser"> | number
  }

  export type tblorderWhereInput = {
    AND?: tblorderWhereInput | tblorderWhereInput[]
    OR?: tblorderWhereInput[]
    NOT?: tblorderWhereInput | tblorderWhereInput[]
    id?: IntFilter<"tblorder"> | number
    quantity?: IntFilter<"tblorder"> | number
    createdAt?: DateTimeFilter<"tblorder"> | Date | string
    updatedAt?: DateTimeFilter<"tblorder"> | Date | string
    userId?: IntFilter<"tblorder"> | number
    productId?: IntFilter<"tblorder"> | number
    user?: XOR<TbluserRelationFilter, tbluserWhereInput>
    product?: XOR<TblproductRelationFilter, tblproductWhereInput>
  }

  export type tblorderOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    user?: tbluserOrderByWithRelationInput
    product?: tblproductOrderByWithRelationInput
  }

  export type tblorderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tblorderWhereInput | tblorderWhereInput[]
    OR?: tblorderWhereInput[]
    NOT?: tblorderWhereInput | tblorderWhereInput[]
    quantity?: IntFilter<"tblorder"> | number
    createdAt?: DateTimeFilter<"tblorder"> | Date | string
    updatedAt?: DateTimeFilter<"tblorder"> | Date | string
    userId?: IntFilter<"tblorder"> | number
    productId?: IntFilter<"tblorder"> | number
    user?: XOR<TbluserRelationFilter, tbluserWhereInput>
    product?: XOR<TblproductRelationFilter, tblproductWhereInput>
  }, "id">

  export type tblorderOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    _count?: tblorderCountOrderByAggregateInput
    _avg?: tblorderAvgOrderByAggregateInput
    _max?: tblorderMaxOrderByAggregateInput
    _min?: tblorderMinOrderByAggregateInput
    _sum?: tblorderSumOrderByAggregateInput
  }

  export type tblorderScalarWhereWithAggregatesInput = {
    AND?: tblorderScalarWhereWithAggregatesInput | tblorderScalarWhereWithAggregatesInput[]
    OR?: tblorderScalarWhereWithAggregatesInput[]
    NOT?: tblorderScalarWhereWithAggregatesInput | tblorderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tblorder"> | number
    quantity?: IntWithAggregatesFilter<"tblorder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"tblorder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tblorder"> | Date | string
    userId?: IntWithAggregatesFilter<"tblorder"> | number
    productId?: IntWithAggregatesFilter<"tblorder"> | number
  }

  export type tblgroupCreateInput = {
    group: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroups?: tblsubgroupCreateNestedManyWithoutGroupInput
  }

  export type tblgroupUncheckedCreateInput = {
    id?: number
    group: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroups?: tblsubgroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type tblgroupUpdateInput = {
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroups?: tblsubgroupUpdateManyWithoutGroupNestedInput
  }

  export type tblgroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroups?: tblsubgroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type tblgroupCreateManyInput = {
    id?: number
    group: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblgroupUpdateManyMutationInput = {
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblgroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblsubgroupCreateInput = {
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: tblgroupCreateNestedOneWithoutSubgroupsInput
    categories?: tblcategoryCreateNestedManyWithoutSubgroupInput
  }

  export type tblsubgroupUncheckedCreateInput = {
    id?: number
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId: number
    categories?: tblcategoryUncheckedCreateNestedManyWithoutSubgroupInput
  }

  export type tblsubgroupUpdateInput = {
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: tblgroupUpdateOneRequiredWithoutSubgroupsNestedInput
    categories?: tblcategoryUpdateManyWithoutSubgroupNestedInput
  }

  export type tblsubgroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
    categories?: tblcategoryUncheckedUpdateManyWithoutSubgroupNestedInput
  }

  export type tblsubgroupCreateManyInput = {
    id?: number
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId: number
  }

  export type tblsubgroupUpdateManyMutationInput = {
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblsubgroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type tblcategoryCreateInput = {
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroup: tblsubgroupCreateNestedOneWithoutCategoriesInput
    products?: tblproductCreateNestedManyWithoutCategoryInput
  }

  export type tblcategoryUncheckedCreateInput = {
    id?: number
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroupId: number
    products?: tblproductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type tblcategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroup?: tblsubgroupUpdateOneRequiredWithoutCategoriesNestedInput
    products?: tblproductUpdateManyWithoutCategoryNestedInput
  }

  export type tblcategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroupId?: IntFieldUpdateOperationsInput | number
    products?: tblproductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type tblcategoryCreateManyInput = {
    id?: number
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroupId: number
  }

  export type tblcategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblcategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroupId?: IntFieldUpdateOperationsInput | number
  }

  export type tblproductCreateInput = {
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: tblcategoryCreateNestedOneWithoutProductsInput
    orders?: tblorderCreateNestedManyWithoutProductInput
  }

  export type tblproductUncheckedCreateInput = {
    id?: number
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    orders?: tblorderUncheckedCreateNestedManyWithoutProductInput
  }

  export type tblproductUpdateInput = {
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: tblcategoryUpdateOneRequiredWithoutProductsNestedInput
    orders?: tblorderUpdateManyWithoutProductNestedInput
  }

  export type tblproductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    orders?: tblorderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type tblproductCreateManyInput = {
    id?: number
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type tblproductUpdateManyMutationInput = {
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblproductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type tblroleCreateInput = {
    role: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroups?: tbluserCreateNestedManyWithoutRoleInput
  }

  export type tblroleUncheckedCreateInput = {
    id?: number
    role: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroups?: tbluserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type tblroleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroups?: tbluserUpdateManyWithoutRoleNestedInput
  }

  export type tblroleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroups?: tbluserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type tblroleCreateManyInput = {
    id?: number
    role: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblroleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblroleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbluserCreateInput = {
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: tblroleCreateNestedOneWithoutSubgroupsInput
    categories?: tblorderCreateNestedManyWithoutUserInput
  }

  export type tbluserUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    categories?: tblorderUncheckedCreateNestedManyWithoutUserInput
  }

  export type tbluserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: tblroleUpdateOneRequiredWithoutSubgroupsNestedInput
    categories?: tblorderUpdateManyWithoutUserNestedInput
  }

  export type tbluserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    categories?: tblorderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tbluserCreateManyInput = {
    id?: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
  }

  export type tbluserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbluserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type tblorderCreateInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: tbluserCreateNestedOneWithoutCategoriesInput
    product: tblproductCreateNestedOneWithoutOrdersInput
  }

  export type tblorderUncheckedCreateInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    productId: number
  }

  export type tblorderUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: tbluserUpdateOneRequiredWithoutCategoriesNestedInput
    product?: tblproductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type tblorderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type tblorderCreateManyInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    productId: number
  }

  export type tblorderUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblorderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TblsubgroupListRelationFilter = {
    every?: tblsubgroupWhereInput
    some?: tblsubgroupWhereInput
    none?: tblsubgroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tblsubgroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblgroupCountOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblgroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tblgroupMaxOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblgroupMinOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblgroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TblgroupRelationFilter = {
    is?: tblgroupWhereInput
    isNot?: tblgroupWhereInput
  }

  export type TblcategoryListRelationFilter = {
    every?: tblcategoryWhereInput
    some?: tblcategoryWhereInput
    none?: tblcategoryWhereInput
  }

  export type tblcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblsubgroupCountOrderByAggregateInput = {
    id?: SortOrder
    subgroup?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type tblsubgroupAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type tblsubgroupMaxOrderByAggregateInput = {
    id?: SortOrder
    subgroup?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type tblsubgroupMinOrderByAggregateInput = {
    id?: SortOrder
    subgroup?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type tblsubgroupSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type TblsubgroupRelationFilter = {
    is?: tblsubgroupWhereInput
    isNot?: tblsubgroupWhereInput
  }

  export type TblproductListRelationFilter = {
    every?: tblproductWhereInput
    some?: tblproductWhereInput
    none?: tblproductWhereInput
  }

  export type tblproductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroupId?: SortOrder
  }

  export type tblcategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    subgroupId?: SortOrder
  }

  export type tblcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroupId?: SortOrder
  }

  export type tblcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subgroupId?: SortOrder
  }

  export type tblcategorySumOrderByAggregateInput = {
    id?: SortOrder
    subgroupId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TblcategoryRelationFilter = {
    is?: tblcategoryWhereInput
    isNot?: tblcategoryWhereInput
  }

  export type TblorderListRelationFilter = {
    every?: tblorderWhereInput
    some?: tblorderWhereInput
    none?: tblorderWhereInput
  }

  export type tblorderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblproductCountOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type tblproductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type tblproductMaxOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type tblproductMinOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    unit?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type tblproductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TbluserListRelationFilter = {
    every?: tbluserWhereInput
    some?: tbluserWhereInput
    none?: tbluserWhereInput
  }

  export type tbluserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblroleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblroleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tblroleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblroleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tblroleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TblroleRelationFilter = {
    is?: tblroleWhereInput
    isNot?: tblroleWhereInput
  }

  export type tbluserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type tbluserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type tbluserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type tbluserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type tbluserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type TbluserRelationFilter = {
    is?: tbluserWhereInput
    isNot?: tbluserWhereInput
  }

  export type TblproductRelationFilter = {
    is?: tblproductWhereInput
    isNot?: tblproductWhereInput
  }

  export type tblorderCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type tblorderAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type tblorderMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type tblorderMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type tblorderSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type tblsubgroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput> | tblsubgroupCreateWithoutGroupInput[] | tblsubgroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutGroupInput | tblsubgroupCreateOrConnectWithoutGroupInput[]
    createMany?: tblsubgroupCreateManyGroupInputEnvelope
    connect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
  }

  export type tblsubgroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput> | tblsubgroupCreateWithoutGroupInput[] | tblsubgroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutGroupInput | tblsubgroupCreateOrConnectWithoutGroupInput[]
    createMany?: tblsubgroupCreateManyGroupInputEnvelope
    connect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tblsubgroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput> | tblsubgroupCreateWithoutGroupInput[] | tblsubgroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutGroupInput | tblsubgroupCreateOrConnectWithoutGroupInput[]
    upsert?: tblsubgroupUpsertWithWhereUniqueWithoutGroupInput | tblsubgroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: tblsubgroupCreateManyGroupInputEnvelope
    set?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    disconnect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    delete?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    connect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    update?: tblsubgroupUpdateWithWhereUniqueWithoutGroupInput | tblsubgroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: tblsubgroupUpdateManyWithWhereWithoutGroupInput | tblsubgroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: tblsubgroupScalarWhereInput | tblsubgroupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tblsubgroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput> | tblsubgroupCreateWithoutGroupInput[] | tblsubgroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutGroupInput | tblsubgroupCreateOrConnectWithoutGroupInput[]
    upsert?: tblsubgroupUpsertWithWhereUniqueWithoutGroupInput | tblsubgroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: tblsubgroupCreateManyGroupInputEnvelope
    set?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    disconnect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    delete?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    connect?: tblsubgroupWhereUniqueInput | tblsubgroupWhereUniqueInput[]
    update?: tblsubgroupUpdateWithWhereUniqueWithoutGroupInput | tblsubgroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: tblsubgroupUpdateManyWithWhereWithoutGroupInput | tblsubgroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: tblsubgroupScalarWhereInput | tblsubgroupScalarWhereInput[]
  }

  export type tblgroupCreateNestedOneWithoutSubgroupsInput = {
    create?: XOR<tblgroupCreateWithoutSubgroupsInput, tblgroupUncheckedCreateWithoutSubgroupsInput>
    connectOrCreate?: tblgroupCreateOrConnectWithoutSubgroupsInput
    connect?: tblgroupWhereUniqueInput
  }

  export type tblcategoryCreateNestedManyWithoutSubgroupInput = {
    create?: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput> | tblcategoryCreateWithoutSubgroupInput[] | tblcategoryUncheckedCreateWithoutSubgroupInput[]
    connectOrCreate?: tblcategoryCreateOrConnectWithoutSubgroupInput | tblcategoryCreateOrConnectWithoutSubgroupInput[]
    createMany?: tblcategoryCreateManySubgroupInputEnvelope
    connect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
  }

  export type tblcategoryUncheckedCreateNestedManyWithoutSubgroupInput = {
    create?: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput> | tblcategoryCreateWithoutSubgroupInput[] | tblcategoryUncheckedCreateWithoutSubgroupInput[]
    connectOrCreate?: tblcategoryCreateOrConnectWithoutSubgroupInput | tblcategoryCreateOrConnectWithoutSubgroupInput[]
    createMany?: tblcategoryCreateManySubgroupInputEnvelope
    connect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
  }

  export type tblgroupUpdateOneRequiredWithoutSubgroupsNestedInput = {
    create?: XOR<tblgroupCreateWithoutSubgroupsInput, tblgroupUncheckedCreateWithoutSubgroupsInput>
    connectOrCreate?: tblgroupCreateOrConnectWithoutSubgroupsInput
    upsert?: tblgroupUpsertWithoutSubgroupsInput
    connect?: tblgroupWhereUniqueInput
    update?: XOR<XOR<tblgroupUpdateToOneWithWhereWithoutSubgroupsInput, tblgroupUpdateWithoutSubgroupsInput>, tblgroupUncheckedUpdateWithoutSubgroupsInput>
  }

  export type tblcategoryUpdateManyWithoutSubgroupNestedInput = {
    create?: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput> | tblcategoryCreateWithoutSubgroupInput[] | tblcategoryUncheckedCreateWithoutSubgroupInput[]
    connectOrCreate?: tblcategoryCreateOrConnectWithoutSubgroupInput | tblcategoryCreateOrConnectWithoutSubgroupInput[]
    upsert?: tblcategoryUpsertWithWhereUniqueWithoutSubgroupInput | tblcategoryUpsertWithWhereUniqueWithoutSubgroupInput[]
    createMany?: tblcategoryCreateManySubgroupInputEnvelope
    set?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    disconnect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    delete?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    connect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    update?: tblcategoryUpdateWithWhereUniqueWithoutSubgroupInput | tblcategoryUpdateWithWhereUniqueWithoutSubgroupInput[]
    updateMany?: tblcategoryUpdateManyWithWhereWithoutSubgroupInput | tblcategoryUpdateManyWithWhereWithoutSubgroupInput[]
    deleteMany?: tblcategoryScalarWhereInput | tblcategoryScalarWhereInput[]
  }

  export type tblcategoryUncheckedUpdateManyWithoutSubgroupNestedInput = {
    create?: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput> | tblcategoryCreateWithoutSubgroupInput[] | tblcategoryUncheckedCreateWithoutSubgroupInput[]
    connectOrCreate?: tblcategoryCreateOrConnectWithoutSubgroupInput | tblcategoryCreateOrConnectWithoutSubgroupInput[]
    upsert?: tblcategoryUpsertWithWhereUniqueWithoutSubgroupInput | tblcategoryUpsertWithWhereUniqueWithoutSubgroupInput[]
    createMany?: tblcategoryCreateManySubgroupInputEnvelope
    set?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    disconnect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    delete?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    connect?: tblcategoryWhereUniqueInput | tblcategoryWhereUniqueInput[]
    update?: tblcategoryUpdateWithWhereUniqueWithoutSubgroupInput | tblcategoryUpdateWithWhereUniqueWithoutSubgroupInput[]
    updateMany?: tblcategoryUpdateManyWithWhereWithoutSubgroupInput | tblcategoryUpdateManyWithWhereWithoutSubgroupInput[]
    deleteMany?: tblcategoryScalarWhereInput | tblcategoryScalarWhereInput[]
  }

  export type tblsubgroupCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<tblsubgroupCreateWithoutCategoriesInput, tblsubgroupUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutCategoriesInput
    connect?: tblsubgroupWhereUniqueInput
  }

  export type tblproductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput> | tblproductCreateWithoutCategoryInput[] | tblproductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tblproductCreateOrConnectWithoutCategoryInput | tblproductCreateOrConnectWithoutCategoryInput[]
    createMany?: tblproductCreateManyCategoryInputEnvelope
    connect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
  }

  export type tblproductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput> | tblproductCreateWithoutCategoryInput[] | tblproductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tblproductCreateOrConnectWithoutCategoryInput | tblproductCreateOrConnectWithoutCategoryInput[]
    createMany?: tblproductCreateManyCategoryInputEnvelope
    connect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
  }

  export type tblsubgroupUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<tblsubgroupCreateWithoutCategoriesInput, tblsubgroupUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: tblsubgroupCreateOrConnectWithoutCategoriesInput
    upsert?: tblsubgroupUpsertWithoutCategoriesInput
    connect?: tblsubgroupWhereUniqueInput
    update?: XOR<XOR<tblsubgroupUpdateToOneWithWhereWithoutCategoriesInput, tblsubgroupUpdateWithoutCategoriesInput>, tblsubgroupUncheckedUpdateWithoutCategoriesInput>
  }

  export type tblproductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput> | tblproductCreateWithoutCategoryInput[] | tblproductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tblproductCreateOrConnectWithoutCategoryInput | tblproductCreateOrConnectWithoutCategoryInput[]
    upsert?: tblproductUpsertWithWhereUniqueWithoutCategoryInput | tblproductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: tblproductCreateManyCategoryInputEnvelope
    set?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    disconnect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    delete?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    connect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    update?: tblproductUpdateWithWhereUniqueWithoutCategoryInput | tblproductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: tblproductUpdateManyWithWhereWithoutCategoryInput | tblproductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: tblproductScalarWhereInput | tblproductScalarWhereInput[]
  }

  export type tblproductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput> | tblproductCreateWithoutCategoryInput[] | tblproductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: tblproductCreateOrConnectWithoutCategoryInput | tblproductCreateOrConnectWithoutCategoryInput[]
    upsert?: tblproductUpsertWithWhereUniqueWithoutCategoryInput | tblproductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: tblproductCreateManyCategoryInputEnvelope
    set?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    disconnect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    delete?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    connect?: tblproductWhereUniqueInput | tblproductWhereUniqueInput[]
    update?: tblproductUpdateWithWhereUniqueWithoutCategoryInput | tblproductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: tblproductUpdateManyWithWhereWithoutCategoryInput | tblproductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: tblproductScalarWhereInput | tblproductScalarWhereInput[]
  }

  export type tblcategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<tblcategoryCreateWithoutProductsInput, tblcategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: tblcategoryCreateOrConnectWithoutProductsInput
    connect?: tblcategoryWhereUniqueInput
  }

  export type tblorderCreateNestedManyWithoutProductInput = {
    create?: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput> | tblorderCreateWithoutProductInput[] | tblorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutProductInput | tblorderCreateOrConnectWithoutProductInput[]
    createMany?: tblorderCreateManyProductInputEnvelope
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
  }

  export type tblorderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput> | tblorderCreateWithoutProductInput[] | tblorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutProductInput | tblorderCreateOrConnectWithoutProductInput[]
    createMany?: tblorderCreateManyProductInputEnvelope
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tblcategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<tblcategoryCreateWithoutProductsInput, tblcategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: tblcategoryCreateOrConnectWithoutProductsInput
    upsert?: tblcategoryUpsertWithoutProductsInput
    connect?: tblcategoryWhereUniqueInput
    update?: XOR<XOR<tblcategoryUpdateToOneWithWhereWithoutProductsInput, tblcategoryUpdateWithoutProductsInput>, tblcategoryUncheckedUpdateWithoutProductsInput>
  }

  export type tblorderUpdateManyWithoutProductNestedInput = {
    create?: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput> | tblorderCreateWithoutProductInput[] | tblorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutProductInput | tblorderCreateOrConnectWithoutProductInput[]
    upsert?: tblorderUpsertWithWhereUniqueWithoutProductInput | tblorderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: tblorderCreateManyProductInputEnvelope
    set?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    disconnect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    delete?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    update?: tblorderUpdateWithWhereUniqueWithoutProductInput | tblorderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: tblorderUpdateManyWithWhereWithoutProductInput | tblorderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
  }

  export type tblorderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput> | tblorderCreateWithoutProductInput[] | tblorderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutProductInput | tblorderCreateOrConnectWithoutProductInput[]
    upsert?: tblorderUpsertWithWhereUniqueWithoutProductInput | tblorderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: tblorderCreateManyProductInputEnvelope
    set?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    disconnect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    delete?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    update?: tblorderUpdateWithWhereUniqueWithoutProductInput | tblorderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: tblorderUpdateManyWithWhereWithoutProductInput | tblorderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
  }

  export type tbluserCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput> | tbluserCreateWithoutRoleInput[] | tbluserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbluserCreateOrConnectWithoutRoleInput | tbluserCreateOrConnectWithoutRoleInput[]
    createMany?: tbluserCreateManyRoleInputEnvelope
    connect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
  }

  export type tbluserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput> | tbluserCreateWithoutRoleInput[] | tbluserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbluserCreateOrConnectWithoutRoleInput | tbluserCreateOrConnectWithoutRoleInput[]
    createMany?: tbluserCreateManyRoleInputEnvelope
    connect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
  }

  export type tbluserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput> | tbluserCreateWithoutRoleInput[] | tbluserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbluserCreateOrConnectWithoutRoleInput | tbluserCreateOrConnectWithoutRoleInput[]
    upsert?: tbluserUpsertWithWhereUniqueWithoutRoleInput | tbluserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbluserCreateManyRoleInputEnvelope
    set?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    disconnect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    delete?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    connect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    update?: tbluserUpdateWithWhereUniqueWithoutRoleInput | tbluserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbluserUpdateManyWithWhereWithoutRoleInput | tbluserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbluserScalarWhereInput | tbluserScalarWhereInput[]
  }

  export type tbluserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput> | tbluserCreateWithoutRoleInput[] | tbluserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: tbluserCreateOrConnectWithoutRoleInput | tbluserCreateOrConnectWithoutRoleInput[]
    upsert?: tbluserUpsertWithWhereUniqueWithoutRoleInput | tbluserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: tbluserCreateManyRoleInputEnvelope
    set?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    disconnect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    delete?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    connect?: tbluserWhereUniqueInput | tbluserWhereUniqueInput[]
    update?: tbluserUpdateWithWhereUniqueWithoutRoleInput | tbluserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: tbluserUpdateManyWithWhereWithoutRoleInput | tbluserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: tbluserScalarWhereInput | tbluserScalarWhereInput[]
  }

  export type tblroleCreateNestedOneWithoutSubgroupsInput = {
    create?: XOR<tblroleCreateWithoutSubgroupsInput, tblroleUncheckedCreateWithoutSubgroupsInput>
    connectOrCreate?: tblroleCreateOrConnectWithoutSubgroupsInput
    connect?: tblroleWhereUniqueInput
  }

  export type tblorderCreateNestedManyWithoutUserInput = {
    create?: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput> | tblorderCreateWithoutUserInput[] | tblorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutUserInput | tblorderCreateOrConnectWithoutUserInput[]
    createMany?: tblorderCreateManyUserInputEnvelope
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
  }

  export type tblorderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput> | tblorderCreateWithoutUserInput[] | tblorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutUserInput | tblorderCreateOrConnectWithoutUserInput[]
    createMany?: tblorderCreateManyUserInputEnvelope
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
  }

  export type tblroleUpdateOneRequiredWithoutSubgroupsNestedInput = {
    create?: XOR<tblroleCreateWithoutSubgroupsInput, tblroleUncheckedCreateWithoutSubgroupsInput>
    connectOrCreate?: tblroleCreateOrConnectWithoutSubgroupsInput
    upsert?: tblroleUpsertWithoutSubgroupsInput
    connect?: tblroleWhereUniqueInput
    update?: XOR<XOR<tblroleUpdateToOneWithWhereWithoutSubgroupsInput, tblroleUpdateWithoutSubgroupsInput>, tblroleUncheckedUpdateWithoutSubgroupsInput>
  }

  export type tblorderUpdateManyWithoutUserNestedInput = {
    create?: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput> | tblorderCreateWithoutUserInput[] | tblorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutUserInput | tblorderCreateOrConnectWithoutUserInput[]
    upsert?: tblorderUpsertWithWhereUniqueWithoutUserInput | tblorderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tblorderCreateManyUserInputEnvelope
    set?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    disconnect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    delete?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    update?: tblorderUpdateWithWhereUniqueWithoutUserInput | tblorderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tblorderUpdateManyWithWhereWithoutUserInput | tblorderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
  }

  export type tblorderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput> | tblorderCreateWithoutUserInput[] | tblorderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tblorderCreateOrConnectWithoutUserInput | tblorderCreateOrConnectWithoutUserInput[]
    upsert?: tblorderUpsertWithWhereUniqueWithoutUserInput | tblorderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tblorderCreateManyUserInputEnvelope
    set?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    disconnect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    delete?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    connect?: tblorderWhereUniqueInput | tblorderWhereUniqueInput[]
    update?: tblorderUpdateWithWhereUniqueWithoutUserInput | tblorderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tblorderUpdateManyWithWhereWithoutUserInput | tblorderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
  }

  export type tbluserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<tbluserCreateWithoutCategoriesInput, tbluserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: tbluserCreateOrConnectWithoutCategoriesInput
    connect?: tbluserWhereUniqueInput
  }

  export type tblproductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<tblproductCreateWithoutOrdersInput, tblproductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tblproductCreateOrConnectWithoutOrdersInput
    connect?: tblproductWhereUniqueInput
  }

  export type tbluserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<tbluserCreateWithoutCategoriesInput, tbluserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: tbluserCreateOrConnectWithoutCategoriesInput
    upsert?: tbluserUpsertWithoutCategoriesInput
    connect?: tbluserWhereUniqueInput
    update?: XOR<XOR<tbluserUpdateToOneWithWhereWithoutCategoriesInput, tbluserUpdateWithoutCategoriesInput>, tbluserUncheckedUpdateWithoutCategoriesInput>
  }

  export type tblproductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<tblproductCreateWithoutOrdersInput, tblproductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: tblproductCreateOrConnectWithoutOrdersInput
    upsert?: tblproductUpsertWithoutOrdersInput
    connect?: tblproductWhereUniqueInput
    update?: XOR<XOR<tblproductUpdateToOneWithWhereWithoutOrdersInput, tblproductUpdateWithoutOrdersInput>, tblproductUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tblsubgroupCreateWithoutGroupInput = {
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: tblcategoryCreateNestedManyWithoutSubgroupInput
  }

  export type tblsubgroupUncheckedCreateWithoutGroupInput = {
    id?: number
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: tblcategoryUncheckedCreateNestedManyWithoutSubgroupInput
  }

  export type tblsubgroupCreateOrConnectWithoutGroupInput = {
    where: tblsubgroupWhereUniqueInput
    create: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput>
  }

  export type tblsubgroupCreateManyGroupInputEnvelope = {
    data: tblsubgroupCreateManyGroupInput | tblsubgroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type tblsubgroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: tblsubgroupWhereUniqueInput
    update: XOR<tblsubgroupUpdateWithoutGroupInput, tblsubgroupUncheckedUpdateWithoutGroupInput>
    create: XOR<tblsubgroupCreateWithoutGroupInput, tblsubgroupUncheckedCreateWithoutGroupInput>
  }

  export type tblsubgroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: tblsubgroupWhereUniqueInput
    data: XOR<tblsubgroupUpdateWithoutGroupInput, tblsubgroupUncheckedUpdateWithoutGroupInput>
  }

  export type tblsubgroupUpdateManyWithWhereWithoutGroupInput = {
    where: tblsubgroupScalarWhereInput
    data: XOR<tblsubgroupUpdateManyMutationInput, tblsubgroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type tblsubgroupScalarWhereInput = {
    AND?: tblsubgroupScalarWhereInput | tblsubgroupScalarWhereInput[]
    OR?: tblsubgroupScalarWhereInput[]
    NOT?: tblsubgroupScalarWhereInput | tblsubgroupScalarWhereInput[]
    id?: IntFilter<"tblsubgroup"> | number
    subgroup?: StringFilter<"tblsubgroup"> | string
    description?: StringNullableFilter<"tblsubgroup"> | string | null
    image?: StringFilter<"tblsubgroup"> | string
    createdAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    updatedAt?: DateTimeFilter<"tblsubgroup"> | Date | string
    groupId?: IntFilter<"tblsubgroup"> | number
  }

  export type tblgroupCreateWithoutSubgroupsInput = {
    group: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblgroupUncheckedCreateWithoutSubgroupsInput = {
    id?: number
    group: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblgroupCreateOrConnectWithoutSubgroupsInput = {
    where: tblgroupWhereUniqueInput
    create: XOR<tblgroupCreateWithoutSubgroupsInput, tblgroupUncheckedCreateWithoutSubgroupsInput>
  }

  export type tblcategoryCreateWithoutSubgroupInput = {
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: tblproductCreateNestedManyWithoutCategoryInput
  }

  export type tblcategoryUncheckedCreateWithoutSubgroupInput = {
    id?: number
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: tblproductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type tblcategoryCreateOrConnectWithoutSubgroupInput = {
    where: tblcategoryWhereUniqueInput
    create: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput>
  }

  export type tblcategoryCreateManySubgroupInputEnvelope = {
    data: tblcategoryCreateManySubgroupInput | tblcategoryCreateManySubgroupInput[]
    skipDuplicates?: boolean
  }

  export type tblgroupUpsertWithoutSubgroupsInput = {
    update: XOR<tblgroupUpdateWithoutSubgroupsInput, tblgroupUncheckedUpdateWithoutSubgroupsInput>
    create: XOR<tblgroupCreateWithoutSubgroupsInput, tblgroupUncheckedCreateWithoutSubgroupsInput>
    where?: tblgroupWhereInput
  }

  export type tblgroupUpdateToOneWithWhereWithoutSubgroupsInput = {
    where?: tblgroupWhereInput
    data: XOR<tblgroupUpdateWithoutSubgroupsInput, tblgroupUncheckedUpdateWithoutSubgroupsInput>
  }

  export type tblgroupUpdateWithoutSubgroupsInput = {
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblgroupUncheckedUpdateWithoutSubgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    group?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblcategoryUpsertWithWhereUniqueWithoutSubgroupInput = {
    where: tblcategoryWhereUniqueInput
    update: XOR<tblcategoryUpdateWithoutSubgroupInput, tblcategoryUncheckedUpdateWithoutSubgroupInput>
    create: XOR<tblcategoryCreateWithoutSubgroupInput, tblcategoryUncheckedCreateWithoutSubgroupInput>
  }

  export type tblcategoryUpdateWithWhereUniqueWithoutSubgroupInput = {
    where: tblcategoryWhereUniqueInput
    data: XOR<tblcategoryUpdateWithoutSubgroupInput, tblcategoryUncheckedUpdateWithoutSubgroupInput>
  }

  export type tblcategoryUpdateManyWithWhereWithoutSubgroupInput = {
    where: tblcategoryScalarWhereInput
    data: XOR<tblcategoryUpdateManyMutationInput, tblcategoryUncheckedUpdateManyWithoutSubgroupInput>
  }

  export type tblcategoryScalarWhereInput = {
    AND?: tblcategoryScalarWhereInput | tblcategoryScalarWhereInput[]
    OR?: tblcategoryScalarWhereInput[]
    NOT?: tblcategoryScalarWhereInput | tblcategoryScalarWhereInput[]
    id?: IntFilter<"tblcategory"> | number
    category?: StringFilter<"tblcategory"> | string
    description?: StringNullableFilter<"tblcategory"> | string | null
    createdAt?: DateTimeFilter<"tblcategory"> | Date | string
    updatedAt?: DateTimeFilter<"tblcategory"> | Date | string
    subgroupId?: IntFilter<"tblcategory"> | number
  }

  export type tblsubgroupCreateWithoutCategoriesInput = {
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: tblgroupCreateNestedOneWithoutSubgroupsInput
  }

  export type tblsubgroupUncheckedCreateWithoutCategoriesInput = {
    id?: number
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId: number
  }

  export type tblsubgroupCreateOrConnectWithoutCategoriesInput = {
    where: tblsubgroupWhereUniqueInput
    create: XOR<tblsubgroupCreateWithoutCategoriesInput, tblsubgroupUncheckedCreateWithoutCategoriesInput>
  }

  export type tblproductCreateWithoutCategoryInput = {
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: tblorderCreateNestedManyWithoutProductInput
  }

  export type tblproductUncheckedCreateWithoutCategoryInput = {
    id?: number
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: tblorderUncheckedCreateNestedManyWithoutProductInput
  }

  export type tblproductCreateOrConnectWithoutCategoryInput = {
    where: tblproductWhereUniqueInput
    create: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput>
  }

  export type tblproductCreateManyCategoryInputEnvelope = {
    data: tblproductCreateManyCategoryInput | tblproductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type tblsubgroupUpsertWithoutCategoriesInput = {
    update: XOR<tblsubgroupUpdateWithoutCategoriesInput, tblsubgroupUncheckedUpdateWithoutCategoriesInput>
    create: XOR<tblsubgroupCreateWithoutCategoriesInput, tblsubgroupUncheckedCreateWithoutCategoriesInput>
    where?: tblsubgroupWhereInput
  }

  export type tblsubgroupUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: tblsubgroupWhereInput
    data: XOR<tblsubgroupUpdateWithoutCategoriesInput, tblsubgroupUncheckedUpdateWithoutCategoriesInput>
  }

  export type tblsubgroupUpdateWithoutCategoriesInput = {
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: tblgroupUpdateOneRequiredWithoutSubgroupsNestedInput
  }

  export type tblsubgroupUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type tblproductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: tblproductWhereUniqueInput
    update: XOR<tblproductUpdateWithoutCategoryInput, tblproductUncheckedUpdateWithoutCategoryInput>
    create: XOR<tblproductCreateWithoutCategoryInput, tblproductUncheckedCreateWithoutCategoryInput>
  }

  export type tblproductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: tblproductWhereUniqueInput
    data: XOR<tblproductUpdateWithoutCategoryInput, tblproductUncheckedUpdateWithoutCategoryInput>
  }

  export type tblproductUpdateManyWithWhereWithoutCategoryInput = {
    where: tblproductScalarWhereInput
    data: XOR<tblproductUpdateManyMutationInput, tblproductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type tblproductScalarWhereInput = {
    AND?: tblproductScalarWhereInput | tblproductScalarWhereInput[]
    OR?: tblproductScalarWhereInput[]
    NOT?: tblproductScalarWhereInput | tblproductScalarWhereInput[]
    id?: IntFilter<"tblproduct"> | number
    product?: StringFilter<"tblproduct"> | string
    description?: StringNullableFilter<"tblproduct"> | string | null
    price?: FloatFilter<"tblproduct"> | number
    stock?: IntFilter<"tblproduct"> | number
    unit?: StringFilter<"tblproduct"> | string
    image?: StringFilter<"tblproduct"> | string
    createdAt?: DateTimeFilter<"tblproduct"> | Date | string
    updatedAt?: DateTimeFilter<"tblproduct"> | Date | string
    categoryId?: IntFilter<"tblproduct"> | number
  }

  export type tblcategoryCreateWithoutProductsInput = {
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroup: tblsubgroupCreateNestedOneWithoutCategoriesInput
  }

  export type tblcategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subgroupId: number
  }

  export type tblcategoryCreateOrConnectWithoutProductsInput = {
    where: tblcategoryWhereUniqueInput
    create: XOR<tblcategoryCreateWithoutProductsInput, tblcategoryUncheckedCreateWithoutProductsInput>
  }

  export type tblorderCreateWithoutProductInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: tbluserCreateNestedOneWithoutCategoriesInput
  }

  export type tblorderUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type tblorderCreateOrConnectWithoutProductInput = {
    where: tblorderWhereUniqueInput
    create: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput>
  }

  export type tblorderCreateManyProductInputEnvelope = {
    data: tblorderCreateManyProductInput | tblorderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type tblcategoryUpsertWithoutProductsInput = {
    update: XOR<tblcategoryUpdateWithoutProductsInput, tblcategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<tblcategoryCreateWithoutProductsInput, tblcategoryUncheckedCreateWithoutProductsInput>
    where?: tblcategoryWhereInput
  }

  export type tblcategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: tblcategoryWhereInput
    data: XOR<tblcategoryUpdateWithoutProductsInput, tblcategoryUncheckedUpdateWithoutProductsInput>
  }

  export type tblcategoryUpdateWithoutProductsInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroup?: tblsubgroupUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type tblcategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subgroupId?: IntFieldUpdateOperationsInput | number
  }

  export type tblorderUpsertWithWhereUniqueWithoutProductInput = {
    where: tblorderWhereUniqueInput
    update: XOR<tblorderUpdateWithoutProductInput, tblorderUncheckedUpdateWithoutProductInput>
    create: XOR<tblorderCreateWithoutProductInput, tblorderUncheckedCreateWithoutProductInput>
  }

  export type tblorderUpdateWithWhereUniqueWithoutProductInput = {
    where: tblorderWhereUniqueInput
    data: XOR<tblorderUpdateWithoutProductInput, tblorderUncheckedUpdateWithoutProductInput>
  }

  export type tblorderUpdateManyWithWhereWithoutProductInput = {
    where: tblorderScalarWhereInput
    data: XOR<tblorderUpdateManyMutationInput, tblorderUncheckedUpdateManyWithoutProductInput>
  }

  export type tblorderScalarWhereInput = {
    AND?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
    OR?: tblorderScalarWhereInput[]
    NOT?: tblorderScalarWhereInput | tblorderScalarWhereInput[]
    id?: IntFilter<"tblorder"> | number
    quantity?: IntFilter<"tblorder"> | number
    createdAt?: DateTimeFilter<"tblorder"> | Date | string
    updatedAt?: DateTimeFilter<"tblorder"> | Date | string
    userId?: IntFilter<"tblorder"> | number
    productId?: IntFilter<"tblorder"> | number
  }

  export type tbluserCreateWithoutRoleInput = {
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: tblorderCreateNestedManyWithoutUserInput
  }

  export type tbluserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: tblorderUncheckedCreateNestedManyWithoutUserInput
  }

  export type tbluserCreateOrConnectWithoutRoleInput = {
    where: tbluserWhereUniqueInput
    create: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput>
  }

  export type tbluserCreateManyRoleInputEnvelope = {
    data: tbluserCreateManyRoleInput | tbluserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type tbluserUpsertWithWhereUniqueWithoutRoleInput = {
    where: tbluserWhereUniqueInput
    update: XOR<tbluserUpdateWithoutRoleInput, tbluserUncheckedUpdateWithoutRoleInput>
    create: XOR<tbluserCreateWithoutRoleInput, tbluserUncheckedCreateWithoutRoleInput>
  }

  export type tbluserUpdateWithWhereUniqueWithoutRoleInput = {
    where: tbluserWhereUniqueInput
    data: XOR<tbluserUpdateWithoutRoleInput, tbluserUncheckedUpdateWithoutRoleInput>
  }

  export type tbluserUpdateManyWithWhereWithoutRoleInput = {
    where: tbluserScalarWhereInput
    data: XOR<tbluserUpdateManyMutationInput, tbluserUncheckedUpdateManyWithoutRoleInput>
  }

  export type tbluserScalarWhereInput = {
    AND?: tbluserScalarWhereInput | tbluserScalarWhereInput[]
    OR?: tbluserScalarWhereInput[]
    NOT?: tbluserScalarWhereInput | tbluserScalarWhereInput[]
    id?: IntFilter<"tbluser"> | number
    name?: StringFilter<"tbluser"> | string
    password?: StringFilter<"tbluser"> | string
    telefono?: StringFilter<"tbluser"> | string
    direccion?: StringFilter<"tbluser"> | string
    email?: StringFilter<"tbluser"> | string
    createdAt?: DateTimeFilter<"tbluser"> | Date | string
    updatedAt?: DateTimeFilter<"tbluser"> | Date | string
    roleId?: IntFilter<"tbluser"> | number
  }

  export type tblroleCreateWithoutSubgroupsInput = {
    role: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblroleUncheckedCreateWithoutSubgroupsInput = {
    id?: number
    role: string
    description: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblroleCreateOrConnectWithoutSubgroupsInput = {
    where: tblroleWhereUniqueInput
    create: XOR<tblroleCreateWithoutSubgroupsInput, tblroleUncheckedCreateWithoutSubgroupsInput>
  }

  export type tblorderCreateWithoutUserInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: tblproductCreateNestedOneWithoutOrdersInput
  }

  export type tblorderUncheckedCreateWithoutUserInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type tblorderCreateOrConnectWithoutUserInput = {
    where: tblorderWhereUniqueInput
    create: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput>
  }

  export type tblorderCreateManyUserInputEnvelope = {
    data: tblorderCreateManyUserInput | tblorderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tblroleUpsertWithoutSubgroupsInput = {
    update: XOR<tblroleUpdateWithoutSubgroupsInput, tblroleUncheckedUpdateWithoutSubgroupsInput>
    create: XOR<tblroleCreateWithoutSubgroupsInput, tblroleUncheckedCreateWithoutSubgroupsInput>
    where?: tblroleWhereInput
  }

  export type tblroleUpdateToOneWithWhereWithoutSubgroupsInput = {
    where?: tblroleWhereInput
    data: XOR<tblroleUpdateWithoutSubgroupsInput, tblroleUncheckedUpdateWithoutSubgroupsInput>
  }

  export type tblroleUpdateWithoutSubgroupsInput = {
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblroleUncheckedUpdateWithoutSubgroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblorderUpsertWithWhereUniqueWithoutUserInput = {
    where: tblorderWhereUniqueInput
    update: XOR<tblorderUpdateWithoutUserInput, tblorderUncheckedUpdateWithoutUserInput>
    create: XOR<tblorderCreateWithoutUserInput, tblorderUncheckedCreateWithoutUserInput>
  }

  export type tblorderUpdateWithWhereUniqueWithoutUserInput = {
    where: tblorderWhereUniqueInput
    data: XOR<tblorderUpdateWithoutUserInput, tblorderUncheckedUpdateWithoutUserInput>
  }

  export type tblorderUpdateManyWithWhereWithoutUserInput = {
    where: tblorderScalarWhereInput
    data: XOR<tblorderUpdateManyMutationInput, tblorderUncheckedUpdateManyWithoutUserInput>
  }

  export type tbluserCreateWithoutCategoriesInput = {
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: tblroleCreateNestedOneWithoutSubgroupsInput
  }

  export type tbluserUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
  }

  export type tbluserCreateOrConnectWithoutCategoriesInput = {
    where: tbluserWhereUniqueInput
    create: XOR<tbluserCreateWithoutCategoriesInput, tbluserUncheckedCreateWithoutCategoriesInput>
  }

  export type tblproductCreateWithoutOrdersInput = {
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: tblcategoryCreateNestedOneWithoutProductsInput
  }

  export type tblproductUncheckedCreateWithoutOrdersInput = {
    id?: number
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type tblproductCreateOrConnectWithoutOrdersInput = {
    where: tblproductWhereUniqueInput
    create: XOR<tblproductCreateWithoutOrdersInput, tblproductUncheckedCreateWithoutOrdersInput>
  }

  export type tbluserUpsertWithoutCategoriesInput = {
    update: XOR<tbluserUpdateWithoutCategoriesInput, tbluserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<tbluserCreateWithoutCategoriesInput, tbluserUncheckedCreateWithoutCategoriesInput>
    where?: tbluserWhereInput
  }

  export type tbluserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: tbluserWhereInput
    data: XOR<tbluserUpdateWithoutCategoriesInput, tbluserUncheckedUpdateWithoutCategoriesInput>
  }

  export type tbluserUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: tblroleUpdateOneRequiredWithoutSubgroupsNestedInput
  }

  export type tbluserUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type tblproductUpsertWithoutOrdersInput = {
    update: XOR<tblproductUpdateWithoutOrdersInput, tblproductUncheckedUpdateWithoutOrdersInput>
    create: XOR<tblproductCreateWithoutOrdersInput, tblproductUncheckedCreateWithoutOrdersInput>
    where?: tblproductWhereInput
  }

  export type tblproductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: tblproductWhereInput
    data: XOR<tblproductUpdateWithoutOrdersInput, tblproductUncheckedUpdateWithoutOrdersInput>
  }

  export type tblproductUpdateWithoutOrdersInput = {
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: tblcategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type tblproductUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type tblsubgroupCreateManyGroupInput = {
    id?: number
    subgroup: string
    description?: string | null
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblsubgroupUpdateWithoutGroupInput = {
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: tblcategoryUpdateManyWithoutSubgroupNestedInput
  }

  export type tblsubgroupUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: tblcategoryUncheckedUpdateManyWithoutSubgroupNestedInput
  }

  export type tblsubgroupUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    subgroup?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblcategoryCreateManySubgroupInput = {
    id?: number
    category: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblcategoryUpdateWithoutSubgroupInput = {
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: tblproductUpdateManyWithoutCategoryNestedInput
  }

  export type tblcategoryUncheckedUpdateWithoutSubgroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: tblproductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type tblcategoryUncheckedUpdateManyWithoutSubgroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblproductCreateManyCategoryInput = {
    id?: number
    product: string
    description?: string | null
    price: number
    stock: number
    unit: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tblproductUpdateWithoutCategoryInput = {
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: tblorderUpdateManyWithoutProductNestedInput
  }

  export type tblproductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: tblorderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type tblproductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblorderCreateManyProductInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type tblorderUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: tbluserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type tblorderUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type tblorderUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type tbluserCreateManyRoleInput = {
    id?: number
    name: string
    password: string
    telefono: string
    direccion: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tbluserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: tblorderUpdateManyWithoutUserNestedInput
  }

  export type tbluserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: tblorderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tbluserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblorderCreateManyUserInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productId: number
  }

  export type tblorderUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: tblproductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type tblorderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type tblorderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TblgroupCountOutputTypeDefaultArgs instead
     */
    export type TblgroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblgroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TblsubgroupCountOutputTypeDefaultArgs instead
     */
    export type TblsubgroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblsubgroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TblcategoryCountOutputTypeDefaultArgs instead
     */
    export type TblcategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblcategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TblproductCountOutputTypeDefaultArgs instead
     */
    export type TblproductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblproductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TblroleCountOutputTypeDefaultArgs instead
     */
    export type TblroleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblroleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TbluserCountOutputTypeDefaultArgs instead
     */
    export type TbluserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TbluserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblgroupDefaultArgs instead
     */
    export type tblgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblgroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblsubgroupDefaultArgs instead
     */
    export type tblsubgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblsubgroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblcategoryDefaultArgs instead
     */
    export type tblcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblcategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblproductDefaultArgs instead
     */
    export type tblproductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblproductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblroleDefaultArgs instead
     */
    export type tblroleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblroleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tbluserDefaultArgs instead
     */
    export type tbluserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tbluserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblorderDefaultArgs instead
     */
    export type tblorderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblorderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}