// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();
const morgan = require("morgan");

// MIDDLEWARE //
app.use(express.json());
app.use(morgan());

// ROUTES //
app.get("/", (req, res) => {
  res.send(`welcome to the budget app`);
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT //
module.exports = app;
