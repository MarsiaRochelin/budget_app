// DEPENDENCIES //
const express = require("express");

//CONFIGURATION //
const transactions = express.Router();
const { validateURL } = require("../models/validation");
const transactionsArray = require("../models/transactions");

// GET //
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// CREATE //
transactions.post("/", validateURL, (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

// SHOW //
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) res.send(transactionsArray[index]);
  else res.redirect("/not-found");
});

// UPDATE //
transactions.put("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    transactionsArray[index] = req.body;
    res.status(200).json(transactionsArray[index]);
  } else {
    res.status(404).json({ errorMessage: "Not Found" });
  }
});

// DELETE //
transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsArray[index]) {
    const deletedLog = transactionsArray.splice(index, 1);
    res.status(200).json(deletedLog);
  }
});

// EXPORTS //
module.exports = transactions;
