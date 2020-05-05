const Order = require("../models/order.model");
const mongoose = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find().populate("products", "_id price"));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
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
    await newOrder.save();
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  try {
    const {
      products,
      user,
      orderInfo: { adress, phone },
      message,
    } = req.body;

    const orderToUpdate = await Order.findById(req.params.id);
    orderToUpdate.products = products;
    orderToUpdate.user = user;
    orderToUpdate.orderInfo.adress = adress;
    orderToUpdate.orderInfo.phone = phone;
    orderToUpdate.message = message;

    await orderToUpdate.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
