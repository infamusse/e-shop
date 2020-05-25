const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

/* middlware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* api endpoints */
app.use("/api", require("./routes/product.routes"));
app.use("/api", require("./routes/order.routes"));

/* api error page */
app.use("/api", (req, res) => {
  res.status(404).send({ message: "Not found..." });
});

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/* mongoose */
mongoose.connect(process.env.DB_CONNECT, {
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
