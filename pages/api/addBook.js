import product from "../../models/product";
import connectDb from "../../middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    let productRequest = new product({
      ProductId: req.body.productId,
      title: req.body.title,
      price: req.body.price,
      imageURL: req.body.imageURL,
      rating: req.body.rating,
    });
    await productRequest.save();
  } else {
    res.status(400).json({ error: "Not allowed" });
    let products = await product.find();
    res.status(200).json({ products });
  }
};
