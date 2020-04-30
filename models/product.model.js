const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  cover: { type: String, required: true },
  mainPhoto: { type: String, required: true },
  morePhoto: { type: [String] },
});

module.exports = mongoose.model("Product", productSchema);
