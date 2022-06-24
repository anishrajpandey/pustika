import finalModel from "../../models/BookModel";
import connectToDB from "../../connectMongo";

export default async function addTest(req, res) {
  try {
    ("CONNECTING TO MONGO");
    process.env.MONGODB_URI;
    await connectToDB();
    ("CONNECTED TO MONGO");

    ("CREATING DOCUMENT");
    const test = await finalModel.create(req.body);
    ("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    error;
    res.json({ error });
  }
}
