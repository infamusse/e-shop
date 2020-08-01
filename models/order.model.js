const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      count: { type: Number, required: true },
    },
  ],
  user: { type: String, required: true },
  orderInfo: {
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  message: { type: String },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
