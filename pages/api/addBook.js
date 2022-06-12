import finalModel from "../../models/BookModel";
import connectToDB from "../../connectMongo";
export default async function handler(req, res) {
  try {
    await connectToDB();
    const request = await finalModel.create(req.body);
    res.json({ request });
    console.log("Pass");
  } catch (e) {
    console.error(e);
    res.json({ e });
    console.log("Fail");
  }
}
