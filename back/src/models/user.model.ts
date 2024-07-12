import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  phone: String;
  email: string;
  password: string;
  role: "USER" | "ADMIN" | null;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: null },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
