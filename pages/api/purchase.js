import users from "../../models/user";
import connectToDb from "./../../connectMongo";
import bookData from "../../models/BookModel";
export default async function handler(req, res) {
  await connectToDb();

  if (JSON.parse(JSON.stringify(req.body)).delete) {
    const sellerData = await users.updateMany(
      {},
      { $pull: { notifications: {} } }
    );
    res.json({ sellerData });
  } else {
    const sellerid = JSON.parse(req.body).sellId;
    const buyerid = JSON.parse(req.body).buyId;
    const { bookId } = JSON.parse(req.body);
    console.log(sellerid, buyerid);
    const buyerData = await users.findById(buyerid);
    const sellerData = await users.findById(sellerid);
    const bookdata = await bookData.findById(bookId);
    sellerData.notifications.push({
      buyerName: buyerData.name,
      buyerId: buyerData._id,
      bookId,
      bookName: bookdata.bookName,
    });

    await sellerData.save();

    res.json({
      buyername: buyerData.name,
      sellernotifications: sellerData.notifications,
    });
    console.log("success");
  }
}
