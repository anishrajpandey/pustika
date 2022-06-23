import connectToDB from "../../connectMongo";
import bookData from "../../models/BookModel";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await connectToDB();
  }
  if (req.method === "GET") {
    let data = await bookData.find({});
    res.status(200).json({ data });
  } else {
    res.json({ error: "Method Not applicable" });
  }
}
