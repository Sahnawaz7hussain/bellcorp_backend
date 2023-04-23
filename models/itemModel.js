const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const ItemModel = mongoose.model("item", itemSchema);

module.exports = { ItemModel };
