import connectToDB from "../../connectMongo";
import user from "../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST") {
    connectToDB();

    let email = JSON.parse(req.body).email;

    let userData = await user.findOne({ email });
    if (userData) {
      res.status(200).json({ data: userData });
    } else {
      res.status(200).json({ data: { password: "NO SUCH USER" } });
    }
  }
}
