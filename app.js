// DEPENDENCIES //
const express = require("express");

// CONFIGURATION //
const app = express();

// MIDDLEWARE //
app.use(express.json());

// ROUTES //
app.get("/", (req, res) => {
  res.send(`welcome to the budget app`);
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

// EXPORT //
module.exports = app;
