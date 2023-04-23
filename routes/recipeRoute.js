const express = require("express");
const {
  getRecipes,
  addNewRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipeController");

const recipeRoute = express.Router();

recipeRoute.get("/get", getRecipes);
recipeRoute.post("/add", addNewRecipe);
recipeRoute.delete("/delete/:id", deleteRecipe);
recipeRoute.patch("/update/:id", updateRecipe);

module.exports = { recipeRoute };
