const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    items: { type: [String], default: [] },
  },
  { versionKey: false }
);

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = { RecipeModel };
