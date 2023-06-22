import type { MongoMemoryServer } from 'mongodb-memory-server';
import { UserSchema, UserModel } from '.';
import type { User } from '.';
import mdb from '../../../test/helpers/memoryDb';

let db: { connect: any; clear: any; close: any; mongod?: MongoMemoryServer };

beforeAll(async () => {
  db = await mdb();
  await db.connect();
});

afterEach(async () => {
  db.clear();
});

afterAll(async () => {
  await db.close();
});

describe('User', () => {
  describe('UserSchema', () => {
    it('exists', () => {
      expect(UserSchema).toBeDefined();
    });
  });

  describe('UserModel', () => {
    it('exists', () => {
      expect(UserModel).toBeDefined();
    });

    it('should create', async () => {
      const mockUser: User = {
        firstName: 'Stephen',
        lastName: 'Roth',
        email: 'stephen@email.com',
        password: 'this_is_not_real',
      };

      const doc = await UserModel.create(mockUser);

      expect(doc).toHaveProperty('_id');
      expect(doc).toHaveProperty('createdAt');
      expect(doc).toHaveProperty('updatedAt');

      expect(doc).toHaveProperty('firstName', mockUser.firstName);
      expect(doc).toHaveProperty('lastName', mockUser.lastName);
      expect(doc).toHaveProperty('email', mockUser.email);
      expect(doc).toHaveProperty('password', mockUser.password);
    });
  });
});
