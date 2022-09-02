import connectToDB from "../../connectMongo";
import user from "../../models/user";
export default async function hanlder(req, res) {
  if (req.method === "POST") {
    await connectToDB();

    console.log(JSON.parse(req.body).phone);
    let returnedData = await user.findOneAndUpdate(
      { username: JSON.parse(req.body).username },
      JSON.parse(req.body)
    );
    console.log(returnedData);
    res.status(200).json({ message: returnedData });
  }
}
