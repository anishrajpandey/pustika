import finalModel from "../../models/BookModel";
import connectToDB from "../../connectMongo";
// export default async function handler(req, res) {
//   try {
//     await connectToDB();
//     const request = await finalModel.create(req.body);
//     res.json({ request });
//     console.log("Pass");
//   } catch (e) {
//     console.error(e);
//     res.json({ e });
//     console.log("Fail");
//   }
// }
export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    console.log(process.env.MONGODB_URI);
    await connectToDB();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const test = await finalModel.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
