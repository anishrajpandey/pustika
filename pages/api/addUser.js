import connectToDB from "../../connectMongo";
import user from "./../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST" || true) {
    connectToDB();
    user.create(req.body);
  }
  res.json({ status: "ok" });
}
