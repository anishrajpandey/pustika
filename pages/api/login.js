import connectToDB from "../../connectMongo";
import user from "../../models/user";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!mongoose.connections[0].readyState) {
      connectToDB();
    }
    let email = JSON.parse(req.body).email;

    let userData = await user.findOne({ email });
    //todo make environment variables for jwt secret key
    const jwt = jsonwebtoken.sign({ data: userData }, "secret123", {
      expiresIn: "2d",
    });

    const decryptedJWT = jsonwebtoken.verify(jwt, "secret123");
    if (userData) {
      res.status(200).json({ data: userData, jwt, decryptedJWT });
    } else {
      res.status(200).json({ data: { password: "NO SUCH USER" } });
    }
  }
}
