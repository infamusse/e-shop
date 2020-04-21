const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* middlware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* api endpoints */

/* api error page */
app.use("/api", (req, res) => {
  res.status(404).send({ message: "Not found..." });
});

/* mongoose */
mongoose.connect("mongodb://localhost:27017/eshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Succesfully connected to the database");
});
db.on("error", (err) => console.log("Error " + err));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
