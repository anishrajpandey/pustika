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

// Make connection // https://mongoosejs.com/docs/connections.html#error-handling mongoose.connect("mongodb://localhost:27017/test", {   useNewUrlParser: true,   useUnifiedTopology: true, });  // Define schema // https://mongoosejs.com/docs/models.html#compiling const AddressSchema = mongoose.Schema({   city: String,   street: String,   houseNumber: String, });  const ContactInfoSchema = mongoose.Schema({   tel: [Number],   email: [String],   address: {     type: AddressSchema,     required: true,   }, });  const CustomerSchema = mongoose.Schema({   firstName: String,   lastName: String,   company: String,   connectInfo: ContactInfoSchema, });  const CustomerModel = mongoose.model("Customer", CustomerSchema);  // Create a record // https://mongoosejs.com/docs/models.html#constructing-documents const customer = new CustomerModel({   firstName: "Ashish",   lastName: "Suthar",   company: "BitOrbits",   connectInfo: {     tel: [8154080079, 6354492692],     email: ["asissuthar@gmail.com", "contact.bitorbits@gmail.com"],   }, });  // Insert customer object // https://mongoosejs.com/docs/api.html#model_Model-save customer.save((err, cust) => {   if (err) return console.error(err);    // This will print inserted record from database   // console.log(cust); });  // Display any data from CustomerModel // https://mongoosejs.com/docs/api.html#model_Model.findOne CustomerModel.findOne({ firstName: "Ashish" }, (err, cust) => {   if (err) return console.error(err);    // To print stored data   console.log(cust.connectInfo.tel[0]); // output 8154080079 });  // Update inner record // https://mongoosejs.com/docs/api.html#model_Model.update CustomerModel.updateOne(   { firstName: "Ashish" },   {     $set: {       "connectInfo.tel.0": 8154099999,     },   } );
