
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bolts
 * 
 */
export type Bolts = $Result.DefaultSelection<Prisma.$BoltsPayload>
/**
 * Model PropertyClasses
 * 
 */
export type PropertyClasses = $Result.DefaultSelection<Prisma.$PropertyClassesPayload>
/**
 * Model StrengthLimits
 * 
 */
export type StrengthLimits = $Result.DefaultSelection<Prisma.$StrengthLimitsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bolts
 * const bolts = await prisma.bolts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Bolts
   * const bolts = await prisma.bolts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bolts`: Exposes CRUD operations for the **Bolts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bolts
    * const bolts = await prisma.bolts.findMany()
    * ```
    */
  get bolts(): Prisma.BoltsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyClasses`: Exposes CRUD operations for the **PropertyClasses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyClasses
    * const propertyClasses = await prisma.propertyClasses.findMany()
    * ```
    */
  get propertyClasses(): Prisma.PropertyClassesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.strengthLimits`: Exposes CRUD operations for the **StrengthLimits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StrengthLimits
    * const strengthLimits = await prisma.strengthLimits.findMany()
    * ```
    */
  get strengthLimits(): Prisma.StrengthLimitsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Bolts: 'Bolts',
    PropertyClasses: 'PropertyClasses',
    StrengthLimits: 'StrengthLimits'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bolts" | "propertyClasses" | "strengthLimits"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bolts: {
        payload: Prisma.$BoltsPayload<ExtArgs>
        fields: Prisma.BoltsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoltsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoltsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          findFirst: {
            args: Prisma.BoltsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoltsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          findMany: {
            args: Prisma.BoltsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>[]
          }
          create: {
            args: Prisma.BoltsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          createMany: {
            args: Prisma.BoltsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoltsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>[]
          }
          delete: {
            args: Prisma.BoltsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          update: {
            args: Prisma.BoltsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          deleteMany: {
            args: Prisma.BoltsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoltsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoltsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>[]
          }
          upsert: {
            args: Prisma.BoltsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoltsPayload>
          }
          aggregate: {
            args: Prisma.BoltsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBolts>
          }
          groupBy: {
            args: Prisma.BoltsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoltsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoltsCountArgs<ExtArgs>
            result: $Utils.Optional<BoltsCountAggregateOutputType> | number
          }
        }
      }
      PropertyClasses: {
        payload: Prisma.$PropertyClassesPayload<ExtArgs>
        fields: Prisma.PropertyClassesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyClassesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyClassesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          findFirst: {
            args: Prisma.PropertyClassesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyClassesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          findMany: {
            args: Prisma.PropertyClassesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>[]
          }
          create: {
            args: Prisma.PropertyClassesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          createMany: {
            args: Prisma.PropertyClassesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyClassesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>[]
          }
          delete: {
            args: Prisma.PropertyClassesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          update: {
            args: Prisma.PropertyClassesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          deleteMany: {
            args: Prisma.PropertyClassesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyClassesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyClassesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>[]
          }
          upsert: {
            args: Prisma.PropertyClassesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyClassesPayload>
          }
          aggregate: {
            args: Prisma.PropertyClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyClasses>
          }
          groupBy: {
            args: Prisma.PropertyClassesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyClassesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyClassesCountAggregateOutputType> | number
          }
        }
      }
      StrengthLimits: {
        payload: Prisma.$StrengthLimitsPayload<ExtArgs>
        fields: Prisma.StrengthLimitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrengthLimitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrengthLimitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          findFirst: {
            args: Prisma.StrengthLimitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrengthLimitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          findMany: {
            args: Prisma.StrengthLimitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>[]
          }
          create: {
            args: Prisma.StrengthLimitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          createMany: {
            args: Prisma.StrengthLimitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrengthLimitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>[]
          }
          delete: {
            args: Prisma.StrengthLimitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          update: {
            args: Prisma.StrengthLimitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          deleteMany: {
            args: Prisma.StrengthLimitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrengthLimitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StrengthLimitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>[]
          }
          upsert: {
            args: Prisma.StrengthLimitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrengthLimitsPayload>
          }
          aggregate: {
            args: Prisma.StrengthLimitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStrengthLimits>
          }
          groupBy: {
            args: Prisma.StrengthLimitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrengthLimitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrengthLimitsCountArgs<ExtArgs>
            result: $Utils.Optional<StrengthLimitsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    bolts?: BoltsOmit
    propertyClasses?: PropertyClassesOmit
    strengthLimits?: StrengthLimitsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Bolts
   */

  export type AggregateBolts = {
    _count: BoltsCountAggregateOutputType | null
    _avg: BoltsAvgAggregateOutputType | null
    _sum: BoltsSumAggregateOutputType | null
    _min: BoltsMinAggregateOutputType | null
    _max: BoltsMaxAggregateOutputType | null
  }

  export type BoltsAvgAggregateOutputType = {
    id: number | null
    nominalDiameter: number | null
    threadMeanDiameter: number | null
    tensileStressArea: number | null
  }

  export type BoltsSumAggregateOutputType = {
    id: number | null
    nominalDiameter: number | null
    threadMeanDiameter: number | null
    tensileStressArea: number | null
  }

  export type BoltsMinAggregateOutputType = {
    id: number | null
    designation: string | null
    nominalDiameter: number | null
    threadMeanDiameter: number | null
    tensileStressArea: number | null
    createdAt: Date | null
  }

  export type BoltsMaxAggregateOutputType = {
    id: number | null
    designation: string | null
    nominalDiameter: number | null
    threadMeanDiameter: number | null
    tensileStressArea: number | null
    createdAt: Date | null
  }

  export type BoltsCountAggregateOutputType = {
    id: number
    designation: number
    nominalDiameter: number
    threadMeanDiameter: number
    tensileStressArea: number
    createdAt: number
    _all: number
  }


  export type BoltsAvgAggregateInputType = {
    id?: true
    nominalDiameter?: true
    threadMeanDiameter?: true
    tensileStressArea?: true
  }

  export type BoltsSumAggregateInputType = {
    id?: true
    nominalDiameter?: true
    threadMeanDiameter?: true
    tensileStressArea?: true
  }

  export type BoltsMinAggregateInputType = {
    id?: true
    designation?: true
    nominalDiameter?: true
    threadMeanDiameter?: true
    tensileStressArea?: true
    createdAt?: true
  }

  export type BoltsMaxAggregateInputType = {
    id?: true
    designation?: true
    nominalDiameter?: true
    threadMeanDiameter?: true
    tensileStressArea?: true
    createdAt?: true
  }

  export type BoltsCountAggregateInputType = {
    id?: true
    designation?: true
    nominalDiameter?: true
    threadMeanDiameter?: true
    tensileStressArea?: true
    createdAt?: true
    _all?: true
  }

  export type BoltsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bolts to aggregate.
     */
    where?: BoltsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bolts to fetch.
     */
    orderBy?: BoltsOrderByWithRelationInput | BoltsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoltsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bolts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bolts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bolts
    **/
    _count?: true | BoltsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoltsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoltsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoltsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoltsMaxAggregateInputType
  }

  export type GetBoltsAggregateType<T extends BoltsAggregateArgs> = {
        [P in keyof T & keyof AggregateBolts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBolts[P]>
      : GetScalarType<T[P], AggregateBolts[P]>
  }




  export type BoltsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoltsWhereInput
    orderBy?: BoltsOrderByWithAggregationInput | BoltsOrderByWithAggregationInput[]
    by: BoltsScalarFieldEnum[] | BoltsScalarFieldEnum
    having?: BoltsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoltsCountAggregateInputType | true
    _avg?: BoltsAvgAggregateInputType
    _sum?: BoltsSumAggregateInputType
    _min?: BoltsMinAggregateInputType
    _max?: BoltsMaxAggregateInputType
  }

  export type BoltsGroupByOutputType = {
    id: number
    designation: string
    nominalDiameter: number
    threadMeanDiameter: number
    tensileStressArea: number
    createdAt: Date
    _count: BoltsCountAggregateOutputType | null
    _avg: BoltsAvgAggregateOutputType | null
    _sum: BoltsSumAggregateOutputType | null
    _min: BoltsMinAggregateOutputType | null
    _max: BoltsMaxAggregateOutputType | null
  }

  type GetBoltsGroupByPayload<T extends BoltsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoltsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoltsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoltsGroupByOutputType[P]>
            : GetScalarType<T[P], BoltsGroupByOutputType[P]>
        }
      >
    >


  export type BoltsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    nominalDiameter?: boolean
    threadMeanDiameter?: boolean
    tensileStressArea?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bolts"]>

  export type BoltsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    nominalDiameter?: boolean
    threadMeanDiameter?: boolean
    tensileStressArea?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bolts"]>

  export type BoltsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    nominalDiameter?: boolean
    threadMeanDiameter?: boolean
    tensileStressArea?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bolts"]>

  export type BoltsSelectScalar = {
    id?: boolean
    designation?: boolean
    nominalDiameter?: boolean
    threadMeanDiameter?: boolean
    tensileStressArea?: boolean
    createdAt?: boolean
  }

  export type BoltsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designation" | "nominalDiameter" | "threadMeanDiameter" | "tensileStressArea" | "createdAt", ExtArgs["result"]["bolts"]>

  export type $BoltsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bolts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      designation: string
      nominalDiameter: number
      threadMeanDiameter: number
      tensileStressArea: number
      createdAt: Date
    }, ExtArgs["result"]["bolts"]>
    composites: {}
  }

  type BoltsGetPayload<S extends boolean | null | undefined | BoltsDefaultArgs> = $Result.GetResult<Prisma.$BoltsPayload, S>

  type BoltsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoltsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoltsCountAggregateInputType | true
    }

  export interface BoltsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bolts'], meta: { name: 'Bolts' } }
    /**
     * Find zero or one Bolts that matches the filter.
     * @param {BoltsFindUniqueArgs} args - Arguments to find a Bolts
     * @example
     * // Get one Bolts
     * const bolts = await prisma.bolts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoltsFindUniqueArgs>(args: SelectSubset<T, BoltsFindUniqueArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bolts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoltsFindUniqueOrThrowArgs} args - Arguments to find a Bolts
     * @example
     * // Get one Bolts
     * const bolts = await prisma.bolts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoltsFindUniqueOrThrowArgs>(args: SelectSubset<T, BoltsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bolts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsFindFirstArgs} args - Arguments to find a Bolts
     * @example
     * // Get one Bolts
     * const bolts = await prisma.bolts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoltsFindFirstArgs>(args?: SelectSubset<T, BoltsFindFirstArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bolts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsFindFirstOrThrowArgs} args - Arguments to find a Bolts
     * @example
     * // Get one Bolts
     * const bolts = await prisma.bolts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoltsFindFirstOrThrowArgs>(args?: SelectSubset<T, BoltsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bolts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bolts
     * const bolts = await prisma.bolts.findMany()
     * 
     * // Get first 10 Bolts
     * const bolts = await prisma.bolts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boltsWithIdOnly = await prisma.bolts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoltsFindManyArgs>(args?: SelectSubset<T, BoltsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bolts.
     * @param {BoltsCreateArgs} args - Arguments to create a Bolts.
     * @example
     * // Create one Bolts
     * const Bolts = await prisma.bolts.create({
     *   data: {
     *     // ... data to create a Bolts
     *   }
     * })
     * 
     */
    create<T extends BoltsCreateArgs>(args: SelectSubset<T, BoltsCreateArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bolts.
     * @param {BoltsCreateManyArgs} args - Arguments to create many Bolts.
     * @example
     * // Create many Bolts
     * const bolts = await prisma.bolts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoltsCreateManyArgs>(args?: SelectSubset<T, BoltsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bolts and returns the data saved in the database.
     * @param {BoltsCreateManyAndReturnArgs} args - Arguments to create many Bolts.
     * @example
     * // Create many Bolts
     * const bolts = await prisma.bolts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bolts and only return the `id`
     * const boltsWithIdOnly = await prisma.bolts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoltsCreateManyAndReturnArgs>(args?: SelectSubset<T, BoltsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bolts.
     * @param {BoltsDeleteArgs} args - Arguments to delete one Bolts.
     * @example
     * // Delete one Bolts
     * const Bolts = await prisma.bolts.delete({
     *   where: {
     *     // ... filter to delete one Bolts
     *   }
     * })
     * 
     */
    delete<T extends BoltsDeleteArgs>(args: SelectSubset<T, BoltsDeleteArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bolts.
     * @param {BoltsUpdateArgs} args - Arguments to update one Bolts.
     * @example
     * // Update one Bolts
     * const bolts = await prisma.bolts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoltsUpdateArgs>(args: SelectSubset<T, BoltsUpdateArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bolts.
     * @param {BoltsDeleteManyArgs} args - Arguments to filter Bolts to delete.
     * @example
     * // Delete a few Bolts
     * const { count } = await prisma.bolts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoltsDeleteManyArgs>(args?: SelectSubset<T, BoltsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bolts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bolts
     * const bolts = await prisma.bolts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoltsUpdateManyArgs>(args: SelectSubset<T, BoltsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bolts and returns the data updated in the database.
     * @param {BoltsUpdateManyAndReturnArgs} args - Arguments to update many Bolts.
     * @example
     * // Update many Bolts
     * const bolts = await prisma.bolts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bolts and only return the `id`
     * const boltsWithIdOnly = await prisma.bolts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoltsUpdateManyAndReturnArgs>(args: SelectSubset<T, BoltsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bolts.
     * @param {BoltsUpsertArgs} args - Arguments to update or create a Bolts.
     * @example
     * // Update or create a Bolts
     * const bolts = await prisma.bolts.upsert({
     *   create: {
     *     // ... data to create a Bolts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bolts we want to update
     *   }
     * })
     */
    upsert<T extends BoltsUpsertArgs>(args: SelectSubset<T, BoltsUpsertArgs<ExtArgs>>): Prisma__BoltsClient<$Result.GetResult<Prisma.$BoltsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bolts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsCountArgs} args - Arguments to filter Bolts to count.
     * @example
     * // Count the number of Bolts
     * const count = await prisma.bolts.count({
     *   where: {
     *     // ... the filter for the Bolts we want to count
     *   }
     * })
    **/
    count<T extends BoltsCountArgs>(
      args?: Subset<T, BoltsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoltsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bolts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoltsAggregateArgs>(args: Subset<T, BoltsAggregateArgs>): Prisma.PrismaPromise<GetBoltsAggregateType<T>>

    /**
     * Group by Bolts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoltsGroupByArgs} args - Group by arguments.
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
      T extends BoltsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoltsGroupByArgs['orderBy'] }
        : { orderBy?: BoltsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoltsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoltsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bolts model
   */
  readonly fields: BoltsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bolts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoltsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Bolts model
   */
  interface BoltsFieldRefs {
    readonly id: FieldRef<"Bolts", 'Int'>
    readonly designation: FieldRef<"Bolts", 'String'>
    readonly nominalDiameter: FieldRef<"Bolts", 'Float'>
    readonly threadMeanDiameter: FieldRef<"Bolts", 'Float'>
    readonly tensileStressArea: FieldRef<"Bolts", 'Float'>
    readonly createdAt: FieldRef<"Bolts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bolts findUnique
   */
  export type BoltsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter, which Bolts to fetch.
     */
    where: BoltsWhereUniqueInput
  }

  /**
   * Bolts findUniqueOrThrow
   */
  export type BoltsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter, which Bolts to fetch.
     */
    where: BoltsWhereUniqueInput
  }

  /**
   * Bolts findFirst
   */
  export type BoltsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter, which Bolts to fetch.
     */
    where?: BoltsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bolts to fetch.
     */
    orderBy?: BoltsOrderByWithRelationInput | BoltsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bolts.
     */
    cursor?: BoltsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bolts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bolts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bolts.
     */
    distinct?: BoltsScalarFieldEnum | BoltsScalarFieldEnum[]
  }

  /**
   * Bolts findFirstOrThrow
   */
  export type BoltsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter, which Bolts to fetch.
     */
    where?: BoltsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bolts to fetch.
     */
    orderBy?: BoltsOrderByWithRelationInput | BoltsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bolts.
     */
    cursor?: BoltsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bolts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bolts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bolts.
     */
    distinct?: BoltsScalarFieldEnum | BoltsScalarFieldEnum[]
  }

  /**
   * Bolts findMany
   */
  export type BoltsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter, which Bolts to fetch.
     */
    where?: BoltsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bolts to fetch.
     */
    orderBy?: BoltsOrderByWithRelationInput | BoltsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bolts.
     */
    cursor?: BoltsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bolts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bolts.
     */
    skip?: number
    distinct?: BoltsScalarFieldEnum | BoltsScalarFieldEnum[]
  }

  /**
   * Bolts create
   */
  export type BoltsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * The data needed to create a Bolts.
     */
    data: XOR<BoltsCreateInput, BoltsUncheckedCreateInput>
  }

  /**
   * Bolts createMany
   */
  export type BoltsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bolts.
     */
    data: BoltsCreateManyInput | BoltsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bolts createManyAndReturn
   */
  export type BoltsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * The data used to create many Bolts.
     */
    data: BoltsCreateManyInput | BoltsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bolts update
   */
  export type BoltsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * The data needed to update a Bolts.
     */
    data: XOR<BoltsUpdateInput, BoltsUncheckedUpdateInput>
    /**
     * Choose, which Bolts to update.
     */
    where: BoltsWhereUniqueInput
  }

  /**
   * Bolts updateMany
   */
  export type BoltsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bolts.
     */
    data: XOR<BoltsUpdateManyMutationInput, BoltsUncheckedUpdateManyInput>
    /**
     * Filter which Bolts to update
     */
    where?: BoltsWhereInput
    /**
     * Limit how many Bolts to update.
     */
    limit?: number
  }

  /**
   * Bolts updateManyAndReturn
   */
  export type BoltsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * The data used to update Bolts.
     */
    data: XOR<BoltsUpdateManyMutationInput, BoltsUncheckedUpdateManyInput>
    /**
     * Filter which Bolts to update
     */
    where?: BoltsWhereInput
    /**
     * Limit how many Bolts to update.
     */
    limit?: number
  }

  /**
   * Bolts upsert
   */
  export type BoltsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * The filter to search for the Bolts to update in case it exists.
     */
    where: BoltsWhereUniqueInput
    /**
     * In case the Bolts found by the `where` argument doesn't exist, create a new Bolts with this data.
     */
    create: XOR<BoltsCreateInput, BoltsUncheckedCreateInput>
    /**
     * In case the Bolts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoltsUpdateInput, BoltsUncheckedUpdateInput>
  }

  /**
   * Bolts delete
   */
  export type BoltsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
    /**
     * Filter which Bolts to delete.
     */
    where: BoltsWhereUniqueInput
  }

  /**
   * Bolts deleteMany
   */
  export type BoltsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bolts to delete
     */
    where?: BoltsWhereInput
    /**
     * Limit how many Bolts to delete.
     */
    limit?: number
  }

  /**
   * Bolts without action
   */
  export type BoltsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bolts
     */
    select?: BoltsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bolts
     */
    omit?: BoltsOmit<ExtArgs> | null
  }


  /**
   * Model PropertyClasses
   */

  export type AggregatePropertyClasses = {
    _count: PropertyClassesCountAggregateOutputType | null
    _avg: PropertyClassesAvgAggregateOutputType | null
    _sum: PropertyClassesSumAggregateOutputType | null
    _min: PropertyClassesMinAggregateOutputType | null
    _max: PropertyClassesMaxAggregateOutputType | null
  }

  export type PropertyClassesAvgAggregateOutputType = {
    id: number | null
    xValue: number | null
    yValue: number | null
  }

  export type PropertyClassesSumAggregateOutputType = {
    id: number | null
    xValue: number | null
    yValue: number | null
  }

  export type PropertyClassesMinAggregateOutputType = {
    id: number | null
    className: string | null
    xValue: number | null
    yValue: number | null
    createdAt: Date | null
  }

  export type PropertyClassesMaxAggregateOutputType = {
    id: number | null
    className: string | null
    xValue: number | null
    yValue: number | null
    createdAt: Date | null
  }

  export type PropertyClassesCountAggregateOutputType = {
    id: number
    className: number
    xValue: number
    yValue: number
    createdAt: number
    _all: number
  }


  export type PropertyClassesAvgAggregateInputType = {
    id?: true
    xValue?: true
    yValue?: true
  }

  export type PropertyClassesSumAggregateInputType = {
    id?: true
    xValue?: true
    yValue?: true
  }

  export type PropertyClassesMinAggregateInputType = {
    id?: true
    className?: true
    xValue?: true
    yValue?: true
    createdAt?: true
  }

  export type PropertyClassesMaxAggregateInputType = {
    id?: true
    className?: true
    xValue?: true
    yValue?: true
    createdAt?: true
  }

  export type PropertyClassesCountAggregateInputType = {
    id?: true
    className?: true
    xValue?: true
    yValue?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyClasses to aggregate.
     */
    where?: PropertyClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyClasses to fetch.
     */
    orderBy?: PropertyClassesOrderByWithRelationInput | PropertyClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyClasses
    **/
    _count?: true | PropertyClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyClassesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyClassesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyClassesMaxAggregateInputType
  }

  export type GetPropertyClassesAggregateType<T extends PropertyClassesAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyClasses[P]>
      : GetScalarType<T[P], AggregatePropertyClasses[P]>
  }




  export type PropertyClassesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyClassesWhereInput
    orderBy?: PropertyClassesOrderByWithAggregationInput | PropertyClassesOrderByWithAggregationInput[]
    by: PropertyClassesScalarFieldEnum[] | PropertyClassesScalarFieldEnum
    having?: PropertyClassesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyClassesCountAggregateInputType | true
    _avg?: PropertyClassesAvgAggregateInputType
    _sum?: PropertyClassesSumAggregateInputType
    _min?: PropertyClassesMinAggregateInputType
    _max?: PropertyClassesMaxAggregateInputType
  }

  export type PropertyClassesGroupByOutputType = {
    id: number
    className: string
    xValue: number
    yValue: number
    createdAt: Date
    _count: PropertyClassesCountAggregateOutputType | null
    _avg: PropertyClassesAvgAggregateOutputType | null
    _sum: PropertyClassesSumAggregateOutputType | null
    _min: PropertyClassesMinAggregateOutputType | null
    _max: PropertyClassesMaxAggregateOutputType | null
  }

  type GetPropertyClassesGroupByPayload<T extends PropertyClassesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyClassesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyClassesGroupByOutputType[P]>
        }
      >
    >


  export type PropertyClassesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    xValue?: boolean
    yValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["propertyClasses"]>

  export type PropertyClassesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    xValue?: boolean
    yValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["propertyClasses"]>

  export type PropertyClassesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    className?: boolean
    xValue?: boolean
    yValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["propertyClasses"]>

  export type PropertyClassesSelectScalar = {
    id?: boolean
    className?: boolean
    xValue?: boolean
    yValue?: boolean
    createdAt?: boolean
  }

  export type PropertyClassesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "className" | "xValue" | "yValue" | "createdAt", ExtArgs["result"]["propertyClasses"]>

  export type $PropertyClassesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyClasses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      className: string
      xValue: number
      yValue: number
      createdAt: Date
    }, ExtArgs["result"]["propertyClasses"]>
    composites: {}
  }

  type PropertyClassesGetPayload<S extends boolean | null | undefined | PropertyClassesDefaultArgs> = $Result.GetResult<Prisma.$PropertyClassesPayload, S>

  type PropertyClassesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyClassesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyClassesCountAggregateInputType | true
    }

  export interface PropertyClassesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyClasses'], meta: { name: 'PropertyClasses' } }
    /**
     * Find zero or one PropertyClasses that matches the filter.
     * @param {PropertyClassesFindUniqueArgs} args - Arguments to find a PropertyClasses
     * @example
     * // Get one PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyClassesFindUniqueArgs>(args: SelectSubset<T, PropertyClassesFindUniqueArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyClasses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyClassesFindUniqueOrThrowArgs} args - Arguments to find a PropertyClasses
     * @example
     * // Get one PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyClassesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyClassesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesFindFirstArgs} args - Arguments to find a PropertyClasses
     * @example
     * // Get one PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyClassesFindFirstArgs>(args?: SelectSubset<T, PropertyClassesFindFirstArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyClasses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesFindFirstOrThrowArgs} args - Arguments to find a PropertyClasses
     * @example
     * // Get one PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyClassesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyClassesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findMany()
     * 
     * // Get first 10 PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyClassesWithIdOnly = await prisma.propertyClasses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyClassesFindManyArgs>(args?: SelectSubset<T, PropertyClassesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyClasses.
     * @param {PropertyClassesCreateArgs} args - Arguments to create a PropertyClasses.
     * @example
     * // Create one PropertyClasses
     * const PropertyClasses = await prisma.propertyClasses.create({
     *   data: {
     *     // ... data to create a PropertyClasses
     *   }
     * })
     * 
     */
    create<T extends PropertyClassesCreateArgs>(args: SelectSubset<T, PropertyClassesCreateArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyClasses.
     * @param {PropertyClassesCreateManyArgs} args - Arguments to create many PropertyClasses.
     * @example
     * // Create many PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyClassesCreateManyArgs>(args?: SelectSubset<T, PropertyClassesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyClasses and returns the data saved in the database.
     * @param {PropertyClassesCreateManyAndReturnArgs} args - Arguments to create many PropertyClasses.
     * @example
     * // Create many PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyClasses and only return the `id`
     * const propertyClassesWithIdOnly = await prisma.propertyClasses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyClassesCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyClassesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyClasses.
     * @param {PropertyClassesDeleteArgs} args - Arguments to delete one PropertyClasses.
     * @example
     * // Delete one PropertyClasses
     * const PropertyClasses = await prisma.propertyClasses.delete({
     *   where: {
     *     // ... filter to delete one PropertyClasses
     *   }
     * })
     * 
     */
    delete<T extends PropertyClassesDeleteArgs>(args: SelectSubset<T, PropertyClassesDeleteArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyClasses.
     * @param {PropertyClassesUpdateArgs} args - Arguments to update one PropertyClasses.
     * @example
     * // Update one PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyClassesUpdateArgs>(args: SelectSubset<T, PropertyClassesUpdateArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyClasses.
     * @param {PropertyClassesDeleteManyArgs} args - Arguments to filter PropertyClasses to delete.
     * @example
     * // Delete a few PropertyClasses
     * const { count } = await prisma.propertyClasses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyClassesDeleteManyArgs>(args?: SelectSubset<T, PropertyClassesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyClassesUpdateManyArgs>(args: SelectSubset<T, PropertyClassesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyClasses and returns the data updated in the database.
     * @param {PropertyClassesUpdateManyAndReturnArgs} args - Arguments to update many PropertyClasses.
     * @example
     * // Update many PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyClasses and only return the `id`
     * const propertyClassesWithIdOnly = await prisma.propertyClasses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyClassesUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyClassesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyClasses.
     * @param {PropertyClassesUpsertArgs} args - Arguments to update or create a PropertyClasses.
     * @example
     * // Update or create a PropertyClasses
     * const propertyClasses = await prisma.propertyClasses.upsert({
     *   create: {
     *     // ... data to create a PropertyClasses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyClasses we want to update
     *   }
     * })
     */
    upsert<T extends PropertyClassesUpsertArgs>(args: SelectSubset<T, PropertyClassesUpsertArgs<ExtArgs>>): Prisma__PropertyClassesClient<$Result.GetResult<Prisma.$PropertyClassesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesCountArgs} args - Arguments to filter PropertyClasses to count.
     * @example
     * // Count the number of PropertyClasses
     * const count = await prisma.propertyClasses.count({
     *   where: {
     *     // ... the filter for the PropertyClasses we want to count
     *   }
     * })
    **/
    count<T extends PropertyClassesCountArgs>(
      args?: Subset<T, PropertyClassesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyClassesAggregateArgs>(args: Subset<T, PropertyClassesAggregateArgs>): Prisma.PrismaPromise<GetPropertyClassesAggregateType<T>>

    /**
     * Group by PropertyClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyClassesGroupByArgs} args - Group by arguments.
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
      T extends PropertyClassesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyClassesGroupByArgs['orderBy'] }
        : { orderBy?: PropertyClassesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyClassesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyClasses model
   */
  readonly fields: PropertyClassesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyClasses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClassesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PropertyClasses model
   */
  interface PropertyClassesFieldRefs {
    readonly id: FieldRef<"PropertyClasses", 'Int'>
    readonly className: FieldRef<"PropertyClasses", 'String'>
    readonly xValue: FieldRef<"PropertyClasses", 'Float'>
    readonly yValue: FieldRef<"PropertyClasses", 'Float'>
    readonly createdAt: FieldRef<"PropertyClasses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyClasses findUnique
   */
  export type PropertyClassesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter, which PropertyClasses to fetch.
     */
    where: PropertyClassesWhereUniqueInput
  }

  /**
   * PropertyClasses findUniqueOrThrow
   */
  export type PropertyClassesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter, which PropertyClasses to fetch.
     */
    where: PropertyClassesWhereUniqueInput
  }

  /**
   * PropertyClasses findFirst
   */
  export type PropertyClassesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter, which PropertyClasses to fetch.
     */
    where?: PropertyClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyClasses to fetch.
     */
    orderBy?: PropertyClassesOrderByWithRelationInput | PropertyClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyClasses.
     */
    cursor?: PropertyClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyClasses.
     */
    distinct?: PropertyClassesScalarFieldEnum | PropertyClassesScalarFieldEnum[]
  }

  /**
   * PropertyClasses findFirstOrThrow
   */
  export type PropertyClassesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter, which PropertyClasses to fetch.
     */
    where?: PropertyClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyClasses to fetch.
     */
    orderBy?: PropertyClassesOrderByWithRelationInput | PropertyClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyClasses.
     */
    cursor?: PropertyClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyClasses.
     */
    distinct?: PropertyClassesScalarFieldEnum | PropertyClassesScalarFieldEnum[]
  }

  /**
   * PropertyClasses findMany
   */
  export type PropertyClassesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter, which PropertyClasses to fetch.
     */
    where?: PropertyClassesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyClasses to fetch.
     */
    orderBy?: PropertyClassesOrderByWithRelationInput | PropertyClassesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyClasses.
     */
    cursor?: PropertyClassesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyClasses.
     */
    skip?: number
    distinct?: PropertyClassesScalarFieldEnum | PropertyClassesScalarFieldEnum[]
  }

  /**
   * PropertyClasses create
   */
  export type PropertyClassesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * The data needed to create a PropertyClasses.
     */
    data: XOR<PropertyClassesCreateInput, PropertyClassesUncheckedCreateInput>
  }

  /**
   * PropertyClasses createMany
   */
  export type PropertyClassesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyClasses.
     */
    data: PropertyClassesCreateManyInput | PropertyClassesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyClasses createManyAndReturn
   */
  export type PropertyClassesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyClasses.
     */
    data: PropertyClassesCreateManyInput | PropertyClassesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyClasses update
   */
  export type PropertyClassesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * The data needed to update a PropertyClasses.
     */
    data: XOR<PropertyClassesUpdateInput, PropertyClassesUncheckedUpdateInput>
    /**
     * Choose, which PropertyClasses to update.
     */
    where: PropertyClassesWhereUniqueInput
  }

  /**
   * PropertyClasses updateMany
   */
  export type PropertyClassesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyClasses.
     */
    data: XOR<PropertyClassesUpdateManyMutationInput, PropertyClassesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyClasses to update
     */
    where?: PropertyClassesWhereInput
    /**
     * Limit how many PropertyClasses to update.
     */
    limit?: number
  }

  /**
   * PropertyClasses updateManyAndReturn
   */
  export type PropertyClassesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * The data used to update PropertyClasses.
     */
    data: XOR<PropertyClassesUpdateManyMutationInput, PropertyClassesUncheckedUpdateManyInput>
    /**
     * Filter which PropertyClasses to update
     */
    where?: PropertyClassesWhereInput
    /**
     * Limit how many PropertyClasses to update.
     */
    limit?: number
  }

  /**
   * PropertyClasses upsert
   */
  export type PropertyClassesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * The filter to search for the PropertyClasses to update in case it exists.
     */
    where: PropertyClassesWhereUniqueInput
    /**
     * In case the PropertyClasses found by the `where` argument doesn't exist, create a new PropertyClasses with this data.
     */
    create: XOR<PropertyClassesCreateInput, PropertyClassesUncheckedCreateInput>
    /**
     * In case the PropertyClasses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyClassesUpdateInput, PropertyClassesUncheckedUpdateInput>
  }

  /**
   * PropertyClasses delete
   */
  export type PropertyClassesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
    /**
     * Filter which PropertyClasses to delete.
     */
    where: PropertyClassesWhereUniqueInput
  }

  /**
   * PropertyClasses deleteMany
   */
  export type PropertyClassesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyClasses to delete
     */
    where?: PropertyClassesWhereInput
    /**
     * Limit how many PropertyClasses to delete.
     */
    limit?: number
  }

  /**
   * PropertyClasses without action
   */
  export type PropertyClassesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyClasses
     */
    select?: PropertyClassesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyClasses
     */
    omit?: PropertyClassesOmit<ExtArgs> | null
  }


  /**
   * Model StrengthLimits
   */

  export type AggregateStrengthLimits = {
    _count: StrengthLimitsCountAggregateOutputType | null
    _avg: StrengthLimitsAvgAggregateOutputType | null
    _sum: StrengthLimitsSumAggregateOutputType | null
    _min: StrengthLimitsMinAggregateOutputType | null
    _max: StrengthLimitsMaxAggregateOutputType | null
  }

  export type StrengthLimitsAvgAggregateOutputType = {
    id: number | null
    ultimateTensile: number | null
    yieldStrength: number | null
    tensileStress: number | null
    shearStress: number | null
    bearingStress: number | null
  }

  export type StrengthLimitsSumAggregateOutputType = {
    id: number | null
    ultimateTensile: number | null
    yieldStrength: number | null
    tensileStress: number | null
    shearStress: number | null
    bearingStress: number | null
  }

  export type StrengthLimitsMinAggregateOutputType = {
    id: number | null
    ultimateTensile: number | null
    yieldStrength: number | null
    tensileStress: number | null
    shearStress: number | null
    bearingStress: number | null
    createdAt: Date | null
  }

  export type StrengthLimitsMaxAggregateOutputType = {
    id: number | null
    ultimateTensile: number | null
    yieldStrength: number | null
    tensileStress: number | null
    shearStress: number | null
    bearingStress: number | null
    createdAt: Date | null
  }

  export type StrengthLimitsCountAggregateOutputType = {
    id: number
    ultimateTensile: number
    yieldStrength: number
    tensileStress: number
    shearStress: number
    bearingStress: number
    createdAt: number
    _all: number
  }


  export type StrengthLimitsAvgAggregateInputType = {
    id?: true
    ultimateTensile?: true
    yieldStrength?: true
    tensileStress?: true
    shearStress?: true
    bearingStress?: true
  }

  export type StrengthLimitsSumAggregateInputType = {
    id?: true
    ultimateTensile?: true
    yieldStrength?: true
    tensileStress?: true
    shearStress?: true
    bearingStress?: true
  }

  export type StrengthLimitsMinAggregateInputType = {
    id?: true
    ultimateTensile?: true
    yieldStrength?: true
    tensileStress?: true
    shearStress?: true
    bearingStress?: true
    createdAt?: true
  }

  export type StrengthLimitsMaxAggregateInputType = {
    id?: true
    ultimateTensile?: true
    yieldStrength?: true
    tensileStress?: true
    shearStress?: true
    bearingStress?: true
    createdAt?: true
  }

  export type StrengthLimitsCountAggregateInputType = {
    id?: true
    ultimateTensile?: true
    yieldStrength?: true
    tensileStress?: true
    shearStress?: true
    bearingStress?: true
    createdAt?: true
    _all?: true
  }

  export type StrengthLimitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrengthLimits to aggregate.
     */
    where?: StrengthLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrengthLimits to fetch.
     */
    orderBy?: StrengthLimitsOrderByWithRelationInput | StrengthLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrengthLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrengthLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrengthLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StrengthLimits
    **/
    _count?: true | StrengthLimitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrengthLimitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrengthLimitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrengthLimitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrengthLimitsMaxAggregateInputType
  }

  export type GetStrengthLimitsAggregateType<T extends StrengthLimitsAggregateArgs> = {
        [P in keyof T & keyof AggregateStrengthLimits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStrengthLimits[P]>
      : GetScalarType<T[P], AggregateStrengthLimits[P]>
  }




  export type StrengthLimitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrengthLimitsWhereInput
    orderBy?: StrengthLimitsOrderByWithAggregationInput | StrengthLimitsOrderByWithAggregationInput[]
    by: StrengthLimitsScalarFieldEnum[] | StrengthLimitsScalarFieldEnum
    having?: StrengthLimitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrengthLimitsCountAggregateInputType | true
    _avg?: StrengthLimitsAvgAggregateInputType
    _sum?: StrengthLimitsSumAggregateInputType
    _min?: StrengthLimitsMinAggregateInputType
    _max?: StrengthLimitsMaxAggregateInputType
  }

  export type StrengthLimitsGroupByOutputType = {
    id: number
    ultimateTensile: number
    yieldStrength: number
    tensileStress: number
    shearStress: number
    bearingStress: number
    createdAt: Date
    _count: StrengthLimitsCountAggregateOutputType | null
    _avg: StrengthLimitsAvgAggregateOutputType | null
    _sum: StrengthLimitsSumAggregateOutputType | null
    _min: StrengthLimitsMinAggregateOutputType | null
    _max: StrengthLimitsMaxAggregateOutputType | null
  }

  type GetStrengthLimitsGroupByPayload<T extends StrengthLimitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrengthLimitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrengthLimitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrengthLimitsGroupByOutputType[P]>
            : GetScalarType<T[P], StrengthLimitsGroupByOutputType[P]>
        }
      >
    >


  export type StrengthLimitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimateTensile?: boolean
    yieldStrength?: boolean
    tensileStress?: boolean
    shearStress?: boolean
    bearingStress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["strengthLimits"]>

  export type StrengthLimitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimateTensile?: boolean
    yieldStrength?: boolean
    tensileStress?: boolean
    shearStress?: boolean
    bearingStress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["strengthLimits"]>

  export type StrengthLimitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimateTensile?: boolean
    yieldStrength?: boolean
    tensileStress?: boolean
    shearStress?: boolean
    bearingStress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["strengthLimits"]>

  export type StrengthLimitsSelectScalar = {
    id?: boolean
    ultimateTensile?: boolean
    yieldStrength?: boolean
    tensileStress?: boolean
    shearStress?: boolean
    bearingStress?: boolean
    createdAt?: boolean
  }

  export type StrengthLimitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ultimateTensile" | "yieldStrength" | "tensileStress" | "shearStress" | "bearingStress" | "createdAt", ExtArgs["result"]["strengthLimits"]>

  export type $StrengthLimitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StrengthLimits"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ultimateTensile: number
      yieldStrength: number
      tensileStress: number
      shearStress: number
      bearingStress: number
      createdAt: Date
    }, ExtArgs["result"]["strengthLimits"]>
    composites: {}
  }

  type StrengthLimitsGetPayload<S extends boolean | null | undefined | StrengthLimitsDefaultArgs> = $Result.GetResult<Prisma.$StrengthLimitsPayload, S>

  type StrengthLimitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StrengthLimitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StrengthLimitsCountAggregateInputType | true
    }

  export interface StrengthLimitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StrengthLimits'], meta: { name: 'StrengthLimits' } }
    /**
     * Find zero or one StrengthLimits that matches the filter.
     * @param {StrengthLimitsFindUniqueArgs} args - Arguments to find a StrengthLimits
     * @example
     * // Get one StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrengthLimitsFindUniqueArgs>(args: SelectSubset<T, StrengthLimitsFindUniqueArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StrengthLimits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StrengthLimitsFindUniqueOrThrowArgs} args - Arguments to find a StrengthLimits
     * @example
     * // Get one StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrengthLimitsFindUniqueOrThrowArgs>(args: SelectSubset<T, StrengthLimitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StrengthLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsFindFirstArgs} args - Arguments to find a StrengthLimits
     * @example
     * // Get one StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrengthLimitsFindFirstArgs>(args?: SelectSubset<T, StrengthLimitsFindFirstArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StrengthLimits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsFindFirstOrThrowArgs} args - Arguments to find a StrengthLimits
     * @example
     * // Get one StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrengthLimitsFindFirstOrThrowArgs>(args?: SelectSubset<T, StrengthLimitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StrengthLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findMany()
     * 
     * // Get first 10 StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strengthLimitsWithIdOnly = await prisma.strengthLimits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrengthLimitsFindManyArgs>(args?: SelectSubset<T, StrengthLimitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StrengthLimits.
     * @param {StrengthLimitsCreateArgs} args - Arguments to create a StrengthLimits.
     * @example
     * // Create one StrengthLimits
     * const StrengthLimits = await prisma.strengthLimits.create({
     *   data: {
     *     // ... data to create a StrengthLimits
     *   }
     * })
     * 
     */
    create<T extends StrengthLimitsCreateArgs>(args: SelectSubset<T, StrengthLimitsCreateArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StrengthLimits.
     * @param {StrengthLimitsCreateManyArgs} args - Arguments to create many StrengthLimits.
     * @example
     * // Create many StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrengthLimitsCreateManyArgs>(args?: SelectSubset<T, StrengthLimitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StrengthLimits and returns the data saved in the database.
     * @param {StrengthLimitsCreateManyAndReturnArgs} args - Arguments to create many StrengthLimits.
     * @example
     * // Create many StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StrengthLimits and only return the `id`
     * const strengthLimitsWithIdOnly = await prisma.strengthLimits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrengthLimitsCreateManyAndReturnArgs>(args?: SelectSubset<T, StrengthLimitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StrengthLimits.
     * @param {StrengthLimitsDeleteArgs} args - Arguments to delete one StrengthLimits.
     * @example
     * // Delete one StrengthLimits
     * const StrengthLimits = await prisma.strengthLimits.delete({
     *   where: {
     *     // ... filter to delete one StrengthLimits
     *   }
     * })
     * 
     */
    delete<T extends StrengthLimitsDeleteArgs>(args: SelectSubset<T, StrengthLimitsDeleteArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StrengthLimits.
     * @param {StrengthLimitsUpdateArgs} args - Arguments to update one StrengthLimits.
     * @example
     * // Update one StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrengthLimitsUpdateArgs>(args: SelectSubset<T, StrengthLimitsUpdateArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StrengthLimits.
     * @param {StrengthLimitsDeleteManyArgs} args - Arguments to filter StrengthLimits to delete.
     * @example
     * // Delete a few StrengthLimits
     * const { count } = await prisma.strengthLimits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrengthLimitsDeleteManyArgs>(args?: SelectSubset<T, StrengthLimitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StrengthLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrengthLimitsUpdateManyArgs>(args: SelectSubset<T, StrengthLimitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StrengthLimits and returns the data updated in the database.
     * @param {StrengthLimitsUpdateManyAndReturnArgs} args - Arguments to update many StrengthLimits.
     * @example
     * // Update many StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StrengthLimits and only return the `id`
     * const strengthLimitsWithIdOnly = await prisma.strengthLimits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StrengthLimitsUpdateManyAndReturnArgs>(args: SelectSubset<T, StrengthLimitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StrengthLimits.
     * @param {StrengthLimitsUpsertArgs} args - Arguments to update or create a StrengthLimits.
     * @example
     * // Update or create a StrengthLimits
     * const strengthLimits = await prisma.strengthLimits.upsert({
     *   create: {
     *     // ... data to create a StrengthLimits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StrengthLimits we want to update
     *   }
     * })
     */
    upsert<T extends StrengthLimitsUpsertArgs>(args: SelectSubset<T, StrengthLimitsUpsertArgs<ExtArgs>>): Prisma__StrengthLimitsClient<$Result.GetResult<Prisma.$StrengthLimitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StrengthLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsCountArgs} args - Arguments to filter StrengthLimits to count.
     * @example
     * // Count the number of StrengthLimits
     * const count = await prisma.strengthLimits.count({
     *   where: {
     *     // ... the filter for the StrengthLimits we want to count
     *   }
     * })
    **/
    count<T extends StrengthLimitsCountArgs>(
      args?: Subset<T, StrengthLimitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrengthLimitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StrengthLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StrengthLimitsAggregateArgs>(args: Subset<T, StrengthLimitsAggregateArgs>): Prisma.PrismaPromise<GetStrengthLimitsAggregateType<T>>

    /**
     * Group by StrengthLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrengthLimitsGroupByArgs} args - Group by arguments.
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
      T extends StrengthLimitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrengthLimitsGroupByArgs['orderBy'] }
        : { orderBy?: StrengthLimitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StrengthLimitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrengthLimitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StrengthLimits model
   */
  readonly fields: StrengthLimitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StrengthLimits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrengthLimitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StrengthLimits model
   */
  interface StrengthLimitsFieldRefs {
    readonly id: FieldRef<"StrengthLimits", 'Int'>
    readonly ultimateTensile: FieldRef<"StrengthLimits", 'Int'>
    readonly yieldStrength: FieldRef<"StrengthLimits", 'Int'>
    readonly tensileStress: FieldRef<"StrengthLimits", 'Int'>
    readonly shearStress: FieldRef<"StrengthLimits", 'Int'>
    readonly bearingStress: FieldRef<"StrengthLimits", 'Int'>
    readonly createdAt: FieldRef<"StrengthLimits", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StrengthLimits findUnique
   */
  export type StrengthLimitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter, which StrengthLimits to fetch.
     */
    where: StrengthLimitsWhereUniqueInput
  }

  /**
   * StrengthLimits findUniqueOrThrow
   */
  export type StrengthLimitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter, which StrengthLimits to fetch.
     */
    where: StrengthLimitsWhereUniqueInput
  }

  /**
   * StrengthLimits findFirst
   */
  export type StrengthLimitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter, which StrengthLimits to fetch.
     */
    where?: StrengthLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrengthLimits to fetch.
     */
    orderBy?: StrengthLimitsOrderByWithRelationInput | StrengthLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrengthLimits.
     */
    cursor?: StrengthLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrengthLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrengthLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrengthLimits.
     */
    distinct?: StrengthLimitsScalarFieldEnum | StrengthLimitsScalarFieldEnum[]
  }

  /**
   * StrengthLimits findFirstOrThrow
   */
  export type StrengthLimitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter, which StrengthLimits to fetch.
     */
    where?: StrengthLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrengthLimits to fetch.
     */
    orderBy?: StrengthLimitsOrderByWithRelationInput | StrengthLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StrengthLimits.
     */
    cursor?: StrengthLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrengthLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrengthLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StrengthLimits.
     */
    distinct?: StrengthLimitsScalarFieldEnum | StrengthLimitsScalarFieldEnum[]
  }

  /**
   * StrengthLimits findMany
   */
  export type StrengthLimitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter, which StrengthLimits to fetch.
     */
    where?: StrengthLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StrengthLimits to fetch.
     */
    orderBy?: StrengthLimitsOrderByWithRelationInput | StrengthLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StrengthLimits.
     */
    cursor?: StrengthLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StrengthLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StrengthLimits.
     */
    skip?: number
    distinct?: StrengthLimitsScalarFieldEnum | StrengthLimitsScalarFieldEnum[]
  }

  /**
   * StrengthLimits create
   */
  export type StrengthLimitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * The data needed to create a StrengthLimits.
     */
    data: XOR<StrengthLimitsCreateInput, StrengthLimitsUncheckedCreateInput>
  }

  /**
   * StrengthLimits createMany
   */
  export type StrengthLimitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StrengthLimits.
     */
    data: StrengthLimitsCreateManyInput | StrengthLimitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StrengthLimits createManyAndReturn
   */
  export type StrengthLimitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * The data used to create many StrengthLimits.
     */
    data: StrengthLimitsCreateManyInput | StrengthLimitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StrengthLimits update
   */
  export type StrengthLimitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * The data needed to update a StrengthLimits.
     */
    data: XOR<StrengthLimitsUpdateInput, StrengthLimitsUncheckedUpdateInput>
    /**
     * Choose, which StrengthLimits to update.
     */
    where: StrengthLimitsWhereUniqueInput
  }

  /**
   * StrengthLimits updateMany
   */
  export type StrengthLimitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StrengthLimits.
     */
    data: XOR<StrengthLimitsUpdateManyMutationInput, StrengthLimitsUncheckedUpdateManyInput>
    /**
     * Filter which StrengthLimits to update
     */
    where?: StrengthLimitsWhereInput
    /**
     * Limit how many StrengthLimits to update.
     */
    limit?: number
  }

  /**
   * StrengthLimits updateManyAndReturn
   */
  export type StrengthLimitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * The data used to update StrengthLimits.
     */
    data: XOR<StrengthLimitsUpdateManyMutationInput, StrengthLimitsUncheckedUpdateManyInput>
    /**
     * Filter which StrengthLimits to update
     */
    where?: StrengthLimitsWhereInput
    /**
     * Limit how many StrengthLimits to update.
     */
    limit?: number
  }

  /**
   * StrengthLimits upsert
   */
  export type StrengthLimitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * The filter to search for the StrengthLimits to update in case it exists.
     */
    where: StrengthLimitsWhereUniqueInput
    /**
     * In case the StrengthLimits found by the `where` argument doesn't exist, create a new StrengthLimits with this data.
     */
    create: XOR<StrengthLimitsCreateInput, StrengthLimitsUncheckedCreateInput>
    /**
     * In case the StrengthLimits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrengthLimitsUpdateInput, StrengthLimitsUncheckedUpdateInput>
  }

  /**
   * StrengthLimits delete
   */
  export type StrengthLimitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
    /**
     * Filter which StrengthLimits to delete.
     */
    where: StrengthLimitsWhereUniqueInput
  }

  /**
   * StrengthLimits deleteMany
   */
  export type StrengthLimitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StrengthLimits to delete
     */
    where?: StrengthLimitsWhereInput
    /**
     * Limit how many StrengthLimits to delete.
     */
    limit?: number
  }

  /**
   * StrengthLimits without action
   */
  export type StrengthLimitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StrengthLimits
     */
    select?: StrengthLimitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StrengthLimits
     */
    omit?: StrengthLimitsOmit<ExtArgs> | null
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


  export const BoltsScalarFieldEnum: {
    id: 'id',
    designation: 'designation',
    nominalDiameter: 'nominalDiameter',
    threadMeanDiameter: 'threadMeanDiameter',
    tensileStressArea: 'tensileStressArea',
    createdAt: 'createdAt'
  };

  export type BoltsScalarFieldEnum = (typeof BoltsScalarFieldEnum)[keyof typeof BoltsScalarFieldEnum]


  export const PropertyClassesScalarFieldEnum: {
    id: 'id',
    className: 'className',
    xValue: 'xValue',
    yValue: 'yValue',
    createdAt: 'createdAt'
  };

  export type PropertyClassesScalarFieldEnum = (typeof PropertyClassesScalarFieldEnum)[keyof typeof PropertyClassesScalarFieldEnum]


  export const StrengthLimitsScalarFieldEnum: {
    id: 'id',
    ultimateTensile: 'ultimateTensile',
    yieldStrength: 'yieldStrength',
    tensileStress: 'tensileStress',
    shearStress: 'shearStress',
    bearingStress: 'bearingStress',
    createdAt: 'createdAt'
  };

  export type StrengthLimitsScalarFieldEnum = (typeof StrengthLimitsScalarFieldEnum)[keyof typeof StrengthLimitsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type BoltsWhereInput = {
    AND?: BoltsWhereInput | BoltsWhereInput[]
    OR?: BoltsWhereInput[]
    NOT?: BoltsWhereInput | BoltsWhereInput[]
    id?: IntFilter<"Bolts"> | number
    designation?: StringFilter<"Bolts"> | string
    nominalDiameter?: FloatFilter<"Bolts"> | number
    threadMeanDiameter?: FloatFilter<"Bolts"> | number
    tensileStressArea?: FloatFilter<"Bolts"> | number
    createdAt?: DateTimeFilter<"Bolts"> | Date | string
  }

  export type BoltsOrderByWithRelationInput = {
    id?: SortOrder
    designation?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
    createdAt?: SortOrder
  }

  export type BoltsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    designation?: string
    AND?: BoltsWhereInput | BoltsWhereInput[]
    OR?: BoltsWhereInput[]
    NOT?: BoltsWhereInput | BoltsWhereInput[]
    nominalDiameter?: FloatFilter<"Bolts"> | number
    threadMeanDiameter?: FloatFilter<"Bolts"> | number
    tensileStressArea?: FloatFilter<"Bolts"> | number
    createdAt?: DateTimeFilter<"Bolts"> | Date | string
  }, "id" | "designation">

  export type BoltsOrderByWithAggregationInput = {
    id?: SortOrder
    designation?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
    createdAt?: SortOrder
    _count?: BoltsCountOrderByAggregateInput
    _avg?: BoltsAvgOrderByAggregateInput
    _max?: BoltsMaxOrderByAggregateInput
    _min?: BoltsMinOrderByAggregateInput
    _sum?: BoltsSumOrderByAggregateInput
  }

  export type BoltsScalarWhereWithAggregatesInput = {
    AND?: BoltsScalarWhereWithAggregatesInput | BoltsScalarWhereWithAggregatesInput[]
    OR?: BoltsScalarWhereWithAggregatesInput[]
    NOT?: BoltsScalarWhereWithAggregatesInput | BoltsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bolts"> | number
    designation?: StringWithAggregatesFilter<"Bolts"> | string
    nominalDiameter?: FloatWithAggregatesFilter<"Bolts"> | number
    threadMeanDiameter?: FloatWithAggregatesFilter<"Bolts"> | number
    tensileStressArea?: FloatWithAggregatesFilter<"Bolts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bolts"> | Date | string
  }

  export type PropertyClassesWhereInput = {
    AND?: PropertyClassesWhereInput | PropertyClassesWhereInput[]
    OR?: PropertyClassesWhereInput[]
    NOT?: PropertyClassesWhereInput | PropertyClassesWhereInput[]
    id?: IntFilter<"PropertyClasses"> | number
    className?: StringFilter<"PropertyClasses"> | string
    xValue?: FloatFilter<"PropertyClasses"> | number
    yValue?: FloatFilter<"PropertyClasses"> | number
    createdAt?: DateTimeFilter<"PropertyClasses"> | Date | string
  }

  export type PropertyClassesOrderByWithRelationInput = {
    id?: SortOrder
    className?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyClassesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyClassesWhereInput | PropertyClassesWhereInput[]
    OR?: PropertyClassesWhereInput[]
    NOT?: PropertyClassesWhereInput | PropertyClassesWhereInput[]
    className?: StringFilter<"PropertyClasses"> | string
    xValue?: FloatFilter<"PropertyClasses"> | number
    yValue?: FloatFilter<"PropertyClasses"> | number
    createdAt?: DateTimeFilter<"PropertyClasses"> | Date | string
  }, "id">

  export type PropertyClassesOrderByWithAggregationInput = {
    id?: SortOrder
    className?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyClassesCountOrderByAggregateInput
    _avg?: PropertyClassesAvgOrderByAggregateInput
    _max?: PropertyClassesMaxOrderByAggregateInput
    _min?: PropertyClassesMinOrderByAggregateInput
    _sum?: PropertyClassesSumOrderByAggregateInput
  }

  export type PropertyClassesScalarWhereWithAggregatesInput = {
    AND?: PropertyClassesScalarWhereWithAggregatesInput | PropertyClassesScalarWhereWithAggregatesInput[]
    OR?: PropertyClassesScalarWhereWithAggregatesInput[]
    NOT?: PropertyClassesScalarWhereWithAggregatesInput | PropertyClassesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyClasses"> | number
    className?: StringWithAggregatesFilter<"PropertyClasses"> | string
    xValue?: FloatWithAggregatesFilter<"PropertyClasses"> | number
    yValue?: FloatWithAggregatesFilter<"PropertyClasses"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyClasses"> | Date | string
  }

  export type StrengthLimitsWhereInput = {
    AND?: StrengthLimitsWhereInput | StrengthLimitsWhereInput[]
    OR?: StrengthLimitsWhereInput[]
    NOT?: StrengthLimitsWhereInput | StrengthLimitsWhereInput[]
    id?: IntFilter<"StrengthLimits"> | number
    ultimateTensile?: IntFilter<"StrengthLimits"> | number
    yieldStrength?: IntFilter<"StrengthLimits"> | number
    tensileStress?: IntFilter<"StrengthLimits"> | number
    shearStress?: IntFilter<"StrengthLimits"> | number
    bearingStress?: IntFilter<"StrengthLimits"> | number
    createdAt?: DateTimeFilter<"StrengthLimits"> | Date | string
  }

  export type StrengthLimitsOrderByWithRelationInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
    createdAt?: SortOrder
  }

  export type StrengthLimitsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StrengthLimitsWhereInput | StrengthLimitsWhereInput[]
    OR?: StrengthLimitsWhereInput[]
    NOT?: StrengthLimitsWhereInput | StrengthLimitsWhereInput[]
    ultimateTensile?: IntFilter<"StrengthLimits"> | number
    yieldStrength?: IntFilter<"StrengthLimits"> | number
    tensileStress?: IntFilter<"StrengthLimits"> | number
    shearStress?: IntFilter<"StrengthLimits"> | number
    bearingStress?: IntFilter<"StrengthLimits"> | number
    createdAt?: DateTimeFilter<"StrengthLimits"> | Date | string
  }, "id">

  export type StrengthLimitsOrderByWithAggregationInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
    createdAt?: SortOrder
    _count?: StrengthLimitsCountOrderByAggregateInput
    _avg?: StrengthLimitsAvgOrderByAggregateInput
    _max?: StrengthLimitsMaxOrderByAggregateInput
    _min?: StrengthLimitsMinOrderByAggregateInput
    _sum?: StrengthLimitsSumOrderByAggregateInput
  }

  export type StrengthLimitsScalarWhereWithAggregatesInput = {
    AND?: StrengthLimitsScalarWhereWithAggregatesInput | StrengthLimitsScalarWhereWithAggregatesInput[]
    OR?: StrengthLimitsScalarWhereWithAggregatesInput[]
    NOT?: StrengthLimitsScalarWhereWithAggregatesInput | StrengthLimitsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StrengthLimits"> | number
    ultimateTensile?: IntWithAggregatesFilter<"StrengthLimits"> | number
    yieldStrength?: IntWithAggregatesFilter<"StrengthLimits"> | number
    tensileStress?: IntWithAggregatesFilter<"StrengthLimits"> | number
    shearStress?: IntWithAggregatesFilter<"StrengthLimits"> | number
    bearingStress?: IntWithAggregatesFilter<"StrengthLimits"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StrengthLimits"> | Date | string
  }

  export type BoltsCreateInput = {
    designation: string
    nominalDiameter: number
    threadMeanDiameter: number
    tensileStressArea: number
    createdAt?: Date | string
  }

  export type BoltsUncheckedCreateInput = {
    id?: number
    designation: string
    nominalDiameter: number
    threadMeanDiameter: number
    tensileStressArea: number
    createdAt?: Date | string
  }

  export type BoltsUpdateInput = {
    designation?: StringFieldUpdateOperationsInput | string
    nominalDiameter?: FloatFieldUpdateOperationsInput | number
    threadMeanDiameter?: FloatFieldUpdateOperationsInput | number
    tensileStressArea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoltsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    nominalDiameter?: FloatFieldUpdateOperationsInput | number
    threadMeanDiameter?: FloatFieldUpdateOperationsInput | number
    tensileStressArea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoltsCreateManyInput = {
    id?: number
    designation: string
    nominalDiameter: number
    threadMeanDiameter: number
    tensileStressArea: number
    createdAt?: Date | string
  }

  export type BoltsUpdateManyMutationInput = {
    designation?: StringFieldUpdateOperationsInput | string
    nominalDiameter?: FloatFieldUpdateOperationsInput | number
    threadMeanDiameter?: FloatFieldUpdateOperationsInput | number
    tensileStressArea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoltsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    nominalDiameter?: FloatFieldUpdateOperationsInput | number
    threadMeanDiameter?: FloatFieldUpdateOperationsInput | number
    tensileStressArea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyClassesCreateInput = {
    className: string
    xValue: number
    yValue: number
    createdAt?: Date | string
  }

  export type PropertyClassesUncheckedCreateInput = {
    id?: number
    className: string
    xValue: number
    yValue: number
    createdAt?: Date | string
  }

  export type PropertyClassesUpdateInput = {
    className?: StringFieldUpdateOperationsInput | string
    xValue?: FloatFieldUpdateOperationsInput | number
    yValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyClassesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    xValue?: FloatFieldUpdateOperationsInput | number
    yValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyClassesCreateManyInput = {
    id?: number
    className: string
    xValue: number
    yValue: number
    createdAt?: Date | string
  }

  export type PropertyClassesUpdateManyMutationInput = {
    className?: StringFieldUpdateOperationsInput | string
    xValue?: FloatFieldUpdateOperationsInput | number
    yValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyClassesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    className?: StringFieldUpdateOperationsInput | string
    xValue?: FloatFieldUpdateOperationsInput | number
    yValue?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrengthLimitsCreateInput = {
    ultimateTensile: number
    yieldStrength: number
    tensileStress: number
    shearStress: number
    bearingStress: number
    createdAt?: Date | string
  }

  export type StrengthLimitsUncheckedCreateInput = {
    id?: number
    ultimateTensile: number
    yieldStrength: number
    tensileStress: number
    shearStress: number
    bearingStress: number
    createdAt?: Date | string
  }

  export type StrengthLimitsUpdateInput = {
    ultimateTensile?: IntFieldUpdateOperationsInput | number
    yieldStrength?: IntFieldUpdateOperationsInput | number
    tensileStress?: IntFieldUpdateOperationsInput | number
    shearStress?: IntFieldUpdateOperationsInput | number
    bearingStress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrengthLimitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ultimateTensile?: IntFieldUpdateOperationsInput | number
    yieldStrength?: IntFieldUpdateOperationsInput | number
    tensileStress?: IntFieldUpdateOperationsInput | number
    shearStress?: IntFieldUpdateOperationsInput | number
    bearingStress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrengthLimitsCreateManyInput = {
    id?: number
    ultimateTensile: number
    yieldStrength: number
    tensileStress: number
    shearStress: number
    bearingStress: number
    createdAt?: Date | string
  }

  export type StrengthLimitsUpdateManyMutationInput = {
    ultimateTensile?: IntFieldUpdateOperationsInput | number
    yieldStrength?: IntFieldUpdateOperationsInput | number
    tensileStress?: IntFieldUpdateOperationsInput | number
    shearStress?: IntFieldUpdateOperationsInput | number
    bearingStress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrengthLimitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ultimateTensile?: IntFieldUpdateOperationsInput | number
    yieldStrength?: IntFieldUpdateOperationsInput | number
    tensileStress?: IntFieldUpdateOperationsInput | number
    shearStress?: IntFieldUpdateOperationsInput | number
    bearingStress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoltsCountOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
    createdAt?: SortOrder
  }

  export type BoltsAvgOrderByAggregateInput = {
    id?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
  }

  export type BoltsMaxOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
    createdAt?: SortOrder
  }

  export type BoltsMinOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
    createdAt?: SortOrder
  }

  export type BoltsSumOrderByAggregateInput = {
    id?: SortOrder
    nominalDiameter?: SortOrder
    threadMeanDiameter?: SortOrder
    tensileStressArea?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PropertyClassesCountOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyClassesAvgOrderByAggregateInput = {
    id?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
  }

  export type PropertyClassesMaxOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyClassesMinOrderByAggregateInput = {
    id?: SortOrder
    className?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyClassesSumOrderByAggregateInput = {
    id?: SortOrder
    xValue?: SortOrder
    yValue?: SortOrder
  }

  export type StrengthLimitsCountOrderByAggregateInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
    createdAt?: SortOrder
  }

  export type StrengthLimitsAvgOrderByAggregateInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
  }

  export type StrengthLimitsMaxOrderByAggregateInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
    createdAt?: SortOrder
  }

  export type StrengthLimitsMinOrderByAggregateInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
    createdAt?: SortOrder
  }

  export type StrengthLimitsSumOrderByAggregateInput = {
    id?: SortOrder
    ultimateTensile?: SortOrder
    yieldStrength?: SortOrder
    tensileStress?: SortOrder
    shearStress?: SortOrder
    bearingStress?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



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