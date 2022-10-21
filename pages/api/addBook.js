import finalModel from "../../models/BookModel";
import connectToDB from "../../connectMongo";
import users from "./../../models/user";

export default async function addTest(req, res) {
  await connectToDB();

  const userData = await users.findById(req.body.sellerid);
  const finalDocument = {
    ...req.body,
    seller: {
      sellerName: userData.name,
      phone: userData.phone,
      address: userData.address,
      id: req.body.sellerid,
      image: userData.userImage,
    },
  };
  const test = await finalModel.create(finalDocument);

  res.json({ test, finalDocument, userData });
  try {
  } catch (error) {
    res.json({ error });
  }
}
//k
