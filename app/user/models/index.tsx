import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

/**
 * Base user properties
 * - Properties that exist in a User document
 * - These are usually provided by user input
 */
export type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

/**
 * User document
 * - Combination of User properties and mongoose meta Document props (_id, updatedAt, createdAt)
 */
export interface UserDocument extends Document<string>, UserProps {
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
