const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");

router.get("/order", orderController.getAll);
router.post("/order", orderController.post);

module.exports = router;
