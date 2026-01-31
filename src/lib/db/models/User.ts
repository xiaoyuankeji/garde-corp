import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  role: 'admin' | 'editor';
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'editor'],
      default: 'editor'
    },
    name: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
