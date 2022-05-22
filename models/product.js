import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    ProductId: { type: String, required: true },
    bookName: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", productSchema);
