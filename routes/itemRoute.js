const express = require("express");
const {
  addNewItem,
  deleteItem,
  updateItem,
  getItems,
} = require("../controllers/itemController");

const itemRoute = express.Router();

itemRoute.get("/get", getItems);
itemRoute.post("/add", addNewItem);
itemRoute.delete("/delete/:id", deleteItem);
itemRoute.patch("/update/:id", updateItem);

module.exports = { itemRoute };
