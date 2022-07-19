import connectToDB from "../../connectMongo";
import user from "./../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST" || true) {
    connectToDB();
    user.create({
      name: "Anish",
      email: "anishpandey021@gmail.com",
      password: "anishrajpandey",
    });
  }
  res.json({ status: "ok" });
}
