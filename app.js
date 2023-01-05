// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const transactions = require("./controllers/transactionController");

// MIDDLEWARE //
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use((req, res, next) => {
  console.log("this code runs for every request");
  next();
});
app.use("/transactions", transactions);

// ROUTES //
app.get("/", (req, res) => {
  res.send("welcome to the budget app");
});
app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT //
module.exports = app;
