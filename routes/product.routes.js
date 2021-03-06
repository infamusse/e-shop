const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

router.get("/product", ProductController.getAll);
router.get("/product/:id", ProductController.getOne);
router.post("/product", ProductController.post);
router.put("/product/:id", ProductController.put);

module.exports = router;
