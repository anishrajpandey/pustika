import mongoose from "mongoose";
export default async function connectToDB() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}
