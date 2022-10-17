import mongoose from "mongoose";
// const notificationSchema = new mongoose.Schema({
//   purchaseNotifications: [
//     {
//       buyerName: String,
//       buyerId: String,
//     },
//   ],
// });
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

let users = mongoose.models.users || mongoose.model("users", userSchema);
export default users;
