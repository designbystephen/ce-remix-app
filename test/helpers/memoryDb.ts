import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

/**
 * Create a document db in memory for testing models and schemas
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
export default async () => {
  
  const mongod =  await MongoMemoryServer.create();

  return {
    mongod,

    /** connect to memory db */
    connect: async () => {
      const uri = mongod.getUri();

      await mongoose.connect(uri);
    },

    /** close memory db connection */
    close:  async () => {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongod.stop();
    },
    
    /** clear any existing data all collections  */
    clear: async () => {
      const { collections } = mongoose.connection

      const results = Object.values(collections).map(collection => (
        collection.deleteMany()
      ));

      await Promise.allSettled(results);
    },
  }
};
