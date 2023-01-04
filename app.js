// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// MIDDLEWARE //
app.use(express.json());
app.use(morgan());
app.use(cors());

// ROUTES //
app.get("/", (req, res) => {
  res.send(`welcome to the budget app`);
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT //
module.exports = app;
