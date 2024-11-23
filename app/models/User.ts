// models/User.ts
import mongoose, { Document, Schema } from "mongoose";

//NOTE: create a new User interface for user model
interface IUser extends Document {
  fullName: string;
  phoneNumber: string;
  createdAt: Date;
  type: number;
  address: string;
  //NOTE: add other fields as needed
}

//INFO: create user schema
const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  type: { type: Number, default: 0 },
  address: String,
});

//IDEA: create user model if user model not exsist
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
