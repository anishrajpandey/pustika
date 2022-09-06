import connectToDB from "../../connectMongo";
import users from "../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectToDB();
    let resp = await users.findOne({ username: JSON.parse(req.body).username });
    res.status(200).json({ userdata: resp });
  } else {
    res.status(301).json({ Error: "Bad Method" });
  }
}
