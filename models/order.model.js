const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      count: { type: Number, required: true },
      additionalInfo: { type: String },
    },
  ],
  user: { type: String, required: true },
  orderInfo: {
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  message: { type: String },
});

module.exports = mongoose.model("Order", orderSchema);
