import users from "../../models/user";
import connectToDb from "./../../connectMongo";
export default async function handler(req, res) {
  if (JSON.parse(JSON.stringify(req.body)).delete) {
    const sellerData = await users.updateMany(
      {},
      { $pull: { notifications: {} } }
    );
    res.json({ sellerData });
  } else {
    await connectToDb();
    const sellerid = JSON.parse(JSON.stringify(req.body)).sellId;
    const buyerid = JSON.parse(JSON.stringify(req.body)).buyId;
    const buyerData = await users.findById(buyerid);
    const sellerData = await users.findById(sellerid);
    console.log(buyerData.name);
    console.log(sellerData.notifications);
    sellerData.notifications.push({
      buyerName: buyerData.name,
      buyerId: buyerData._id,
    });

    await sellerData.save();
    // const newsellerData = await users.findById(sellerid);

    res.json({
      buyername: buyerData.name,
      sellernotificationns: sellerData.notifications,
    });
  }
}
