import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    emai: { type: String, required: true },
    password: { required: true },
  },
  {
    timestamps: true,
  }
);
mongoose.model = {};
export default mongoose.model("user", userSchema);
