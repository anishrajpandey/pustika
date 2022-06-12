import mongoose from "mongoose";
export default async function connectToDB() {
  await mongoose.connect(process.env.MONGODB_URI);
}
