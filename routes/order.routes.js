const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

router.get("/order", orderController.getAll);
router.get("/order/:id", orderController.getOne);
router.post("/order", orderController.post);
router.put("/order/:id", orderController.put);

module.exports = router;
