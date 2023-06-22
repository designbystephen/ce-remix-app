import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

/**
 * Base user properties
 * - Properties that exist in a User document
 */
export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

/**
 * Input for creating a user
 */
export type UserInput = User & {
  // differences between input and available user props goes here
};

/**
 * User document
 * - Combination of User properties and mongoose meta Document props (_id, updatedAt, createdAt)
 */
export interface UserDocument extends Document<string>, User {
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User schema
 * - Used to define and validate the mongoose model
 */
export const UserSchema = new Schema<UserDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

/**
 * User model
 * Used to save data & interact with mongo
 */
export const UserModel = model<UserDocument>('users', UserSchema);
