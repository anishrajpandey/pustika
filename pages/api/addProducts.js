import mongoose from "mongoose";
import product from "../../models/product";
const handler = async (req, res) => {
  let products = await product.find();
  res.status(200).json({ products });
};

export default handler;
