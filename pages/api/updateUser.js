import connectToDB from "../../connectMongo";
import user from "../../models/user";
export default async function hanlder(req, res) {
  if (req.method === "POST") {
    await connectToDB();
    // if (userImage in JSON.parse(req.body)) {
    delete JSON.parse(req.body)._id;
    delete JSON.parse(req.body).createdAt;
    delete JSON.parse(req.body).updatedAt;
    delete JSON.parse(req.body).__v;
    console.log(JSON.parse(req.body));
    let returnedData = await user.updateOne(
      { username: JSON.parse(req.body).username },
      { $set: { userImage: JSON.parse(req.body).userImage } }
    );
    let document = await user.findOne(
      { username: JSON.parse(req.body).username }
      // { $set: { userImage: JSON.parse(req.body).userImage } }
    );
    console.log(document);
    res.status(200).json({ message: returnedData });
  }
}
