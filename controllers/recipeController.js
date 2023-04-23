const { RecipeModel } = require("../models/recipeModel");

const addNewRecipe = async (req, res) => {
  console.log("red: ", req.body);
  try {
    const newRecipe = new RecipeModel(req.body);
    await newRecipe.save();
    res.status(201).json({ message: "Created", recipe: newRecipe });
  } catch (err) {
    res.json({ err: err.message });
  }
};

const getRecipes = async (req, res) => {
  let userId = req.body.userId;
  try {
    let recipes = await RecipeModel.find({ userId });
    res.status(200).json(recipes);
  } catch (err) {
    res.json({ err: err.message });
  }
};
const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    res.status(200).json({ message: "Updated", recipe: updatedRecipe });
  } catch (err) {
    res.json({ err: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    await RecipeModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.json({ err: err.message });
  }
};

module.exports = { getRecipes, addNewRecipe, updateRecipe, deleteRecipe };
