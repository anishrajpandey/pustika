import mongoose from "mongoose";
import connectToDB from "./../../connectMongo";
import bookData from "../../models/BookModel";
export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!mongoose.connections[0].readyState) {
      await connectToDB();
    }
    console.log(JSON.parse(req.body).id);

    let Data = await bookData.updateOne(
      { _id: JSON.parse(req.body).id },
      { isOnCart: true },
      { upsert: true }
    );
    console.log(Data);
    const newData = await bookData.find();
    console.log(newData.filter((item) => item._id == JSON.parse(req.body).id));
    res.json({
      Book: newData.filter((item) => item._id == JSON.parse(req.body).id)[0],
    });
  } else {
    res.json({ error: "Bad Request method" });
  }
}
// fdlfdf hello my name is
