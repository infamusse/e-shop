const Order = require("../models/order.model");
const mongoose = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find().populate("products"));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  console.log("body", req.body);
  try {
    const {
      products,
      user,
      orderInfo: { adress, phone },
      message,
    } = req.body;

    const newOrder = new Order({
      _id: new mongoose.Types.ObjectId(),
      products: products,
      user: user,
      orderInfo: {
        adress: adress,
        phone: phone,
      },
      message: message,
    });
    console.log(newOrder);
    await newOrder.save();
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
