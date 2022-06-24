import mongoose from "mongoose";
import connectToDB from "../../connectMongo";
import bookData from "../../models/BookModel";
export default async function handler(req, res) {
  if (!mongoose.connections[0].readyState) {
    await connectToDB();
  }
  let bookItem = await bookData.findById(JSON.parse(req.body).id);

  //   res.status(200).json({ id: JSON.parse(req.body).id });
  res.status(200).json({ data: bookItem });
  req.body;
}
