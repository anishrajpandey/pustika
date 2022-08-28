import connectToDB from "../../connectMongo";
import user from "../../models/user";
export default async function hanlder(req, res) {
  if (req.method === "POST") {
    await connectToDB();

    console.log(JSON.parse(req.body));
    let returnedData = await user.updateOne(
      { username: JSON.parse(req.body).username },
      { $set: { userImage: JSON.parse(req.body).userImage } }
    );
    console.log(returnedData);
    res.status(200).json({ message: returnedData });
  }
}
