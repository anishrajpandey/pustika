import mongoose from "mongoose";
import product from "../../models/product";
const handler = async (req, res) => {
  let products = await product.find();
  res.status(200).json({ products });
};
const connectToDatabase = () => {
  mongoose.connect(
    "mongodb+srv://anishrajpandey:anishrajpandey@cluster0.xaa3c.mongodb.net/test"
  );
};
export default handler;
