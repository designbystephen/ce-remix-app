import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export default async () => {
  
  const mongod =  await MongoMemoryServer.create();

  return {
    mongod,

    connect: async () => {
      const uri = mongod.getUri();

      await mongoose.connect(uri);
    },

    close:  async () => {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongod.stop();
    },
    
    clear: async () => {
      const { collections } = mongoose.connection

      const results = Object.values(collections).map(collection => (
        collection.deleteMany()
      ));

      await Promise.allSettled(results);
    },
  }
};
