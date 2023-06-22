import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

/**
 * Create a document db in memory for testing models and schemas
 *
 * @example
 * // setup and teardown for testing in a single module
 * let db: { connect: any; clear: any; close: any; mongod?: MongoMemoryServer };
 *
 * beforeAll(async () => {
 *   db = await memoryDb();
 *   await db.connect();
 * });
 *
 * afterEach(async () => {
 *   db.clear();
 * });
 *
 * afterAll(async () => {
 *   await db.close();
 * });
 */
const memoryDb = async () => {
  const mongod = await MongoMemoryServer.create();

  return {
    mongod,

    /** connect to memory db */
    connect: async () => {
      const uri = mongod.getUri();

      await mongoose.connect(uri);
    },

    /** close memory db connection */
    close: async () => {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongod.stop();
    },

    /** clear any existing data all collections  */
    clear: async () => {
      const { collections } = mongoose.connection;

      const results = Object.values(collections).map((collection) =>
        collection.deleteMany()
      );

      await Promise.allSettled(results);
    },
  };
};

/**
 * Utility for connecting to a db, either via memory OR connection string
 * - make sure to provide the connection string in your .env
 */
export default async () => {
  const { DB_CONNECTION_STRING = '', NODE_ENV, USE_MEMORY_DB } = process.env;

  // if we are in a test environment or we have memory db flagged in the .env
  if (NODE_ENV === 'test' || USE_MEMORY_DB === 'true') {
    return memoryDb();
  }

  // otherwise just use mongoose to connect
  return {
    mongod: undefined,
    connect: () => mongoose.connect(DB_CONNECTION_STRING),
    close: async () => undefined,
    clear: async () => undefined,
  };
};
