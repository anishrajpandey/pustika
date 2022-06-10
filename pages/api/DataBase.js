import mongoose from "mongoose";
export default function handler(req, res) {
  res.status(200).json({ name: "mongoose" });
  mongoose.connect(
    "mongodb+srv://anishrajpandey:anishrajpandey@cluster0.xaa3c.mongodb.net/?retryWrites=true&w=majority"
  );
}
