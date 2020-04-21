const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new mongoose.Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  user: { type: String, required: true },
  orderInfo: {
    adress: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  message: { type: String },
});

module.exports = mongoose.model("Orders", ordersSchema);
