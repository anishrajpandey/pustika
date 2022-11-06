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
// prescription lots of opinion please dont leave me dont tell me how u me let your cameo fill to me take my soul idont wwant it anymore i just want to be ignored for a second of attention an
i dont want it anymore just want to be known just take my soul 
we all starving for a second of attention and dying need obsession need attention