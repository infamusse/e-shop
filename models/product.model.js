const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: Number, required: true },
  cover: { type: String, required: true },
  color: { type: String, required: true },
  mainPhoto: { type: String, required: true },
  morePhoto: { type: [String] },
});
