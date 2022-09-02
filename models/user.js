import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userImage: { type: String },
    address: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

let users = mongoose.models.user || mongoose.model("user", userSchema);
export default users;
