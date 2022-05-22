import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    ProductId: { type: String, required: true },
    bookName: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String },
  },
  {
    timestamps: true,
  }
);
// export default mongoose.model("Products", productSchema);
const main = async () => {
  await mongoose.connect(
    "mongodb+srv://anishrajpandey:anishrajpandey@cluster0.xaa3c.mongodb.net/test"
  );
  return "here";
  main();
};
export default main;
