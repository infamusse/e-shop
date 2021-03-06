const Product = require("../models/product.model");
const mongoose = require("mongoose");

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find().select("title author mainPhoto"));
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
    const { title, author, price, cover, mainPhoto, morePhoto } = req.body;
    const newProduct = new Product({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      author: author,
      price: price,
      cover: cover,
      mainPhoto: mainPhoto,
      morePhoto: morePhoto,
    });
    await newProduct.save();
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  try {
    const { title, author, price, cover, mainPhoto, morePhoto } = req.body;

    const changedProduct = await Product.findById(req.params.id);

    changedProduct.title = title;
    changedProduct.author = author;
    changedProduct.price = price;
    changedProduct.cover = cover;
    changedProduct.mainPhoto = mainPhoto;
    changedProduct.morePhoto = morePhoto;

    await changedProduct.save();
    res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
