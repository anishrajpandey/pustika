import { Schema, model, models } from "mongoose";
const BookSchema = new Schema(
  {
    id: String,
    bookName: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);
let finalModel = models.finalModel || model("finalModel", BookSchema);
export default finalModel;
