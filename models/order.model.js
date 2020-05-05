const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product.model");

const orderSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  user: { type: String, required: true },
  orderInfo: {
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  message: { type: String },
});

module.exports = mongoose.model("Order", orderSchema);
