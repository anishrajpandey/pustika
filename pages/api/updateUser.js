import connectToDB from "../../connectMongo";
import User from "../../models/user";
export default async function hanlder(req, res) {
  if (req.method === "POST") {
    await connectToDB();
    // if (userImage in JSON.parse(req.body)) {
    console.log(JSON.parse(req.body));
    let returnedData = await User.updateOne(
      { username: JSON.parse(req.body).username + "" },
      { $set: { userImage: JSON.parse(req.body).userImage } }
    );
    res.status(200).json({ message: returnedData });

    // }
    //

    //         awaitq.: JSON.parse(req.bod

    // }
  }
}
