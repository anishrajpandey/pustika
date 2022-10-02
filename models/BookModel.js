import mongoose, { Schema, model, models } from "mongoose";
const BookSchema = new Schema(
  {
    id: String,
    bookName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String },
    rating: { type: Number },
    isOnCart: { type: Boolean, default: false },
    qtyOnCart: Number,
    addedBy: {
      user: String,
      id: Number,
    },
  },
  { timestamps: true }
);
mongoose.pluralize(null);

let bookData = models.bookData || model("bookData", BookSchema, "bookData");
export default bookData;
