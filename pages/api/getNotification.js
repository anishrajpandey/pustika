import users from "../../models/user";
import connectToDB from "../../connectMongo";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let data = await users.findById(JSON.parse(req.body).id);
    const { notifications } = data;
    res.json({ notifications });
  }
}
