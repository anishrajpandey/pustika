import connectToDB from "../../connectMongo";
import user from "./../../models/user";
export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectToDB();

    let hasusername = await user.findOne({ username: req.body.username });

    let hasemail = await user.findOne({ email: req.body.email });
    if (hasusername) {
      res.json({ message: "User Name already exists", type: "Error" });
      return;
    } else if (hasemail) {
      res.json({ message: "Email already exists", type: "Error" });
      return;
    } else {
      await user.create(req.body);
      res.json({
        message:
          "Succreefully created account with username" + req.body.username,
        type: "Success",
      });
    }
  }
}
