const Product = require("../models/product.model");
const mongoose = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOne = async (req, res) => {
  try {
    res.json(await Product.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { title, text, price, cover, color, mainPhoto, morePhoto } = req.body;
    const newProduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      text: text,
      price: price,
      cover: cover,
      color: color,
      mainPhoto: mainPhoto,
      morePhoto: morePhoto,
    });
    await newProduct.save();
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
