import finalModel from "../../models/BookModel";
import connectToDB from "../../connectMongo";
import user from "./../../models/user";

export default async function addTest(req, res) {
  try {
    ("CONNECTING TO MONGO");
    process.env.MONGODB_URI;
    await connectToDB();
    ("CONNECTED TO MONGO");

    ("CREATING DOCUMENT");

    const userData = await user.find({ _id: req.body._id });
    const finalDocument = {
      ...req.body,
      sellerInfo: {
        sellerName: userData.name,
        phone: userData.phone,
        address: userData.address,
      },
    };
    const test = await finalModel.create(req.body);
    ("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    error;
    res.json({ error });
  }
}
