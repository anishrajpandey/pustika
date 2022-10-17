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
    notifications: [
      {
        buyerName: String,
        buyerId: String,
        bookId: String,
        bookName: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

let users = mongoose.models.users || mongoose.model("users", userSchema);
export default users;
