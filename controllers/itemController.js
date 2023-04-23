const { ItemModel } = require("../models/itemModel");

const addNewItem = async (req, res) => {
  try {
    const newItem = new ItemModel(req.body);
    await newItem.save();
    res.status(201).json({ message: "Created", item: newItem });
  } catch (err) {
    res.json({ err: err.message });
  }
};
const getItems = async (req, res) => {
  const userId = req.body.userId;
  try {
    let items = await ItemModel.find({ userId });
    res.status(200).json(items);
  } catch (err) {
    res.json({ err: err.message });
  }
};
const updateItem = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );
    res.status(200).json({ message: "Updated", item: updatedItem });
  } catch (err) {
    res.json({ err: err.message });
  }
};
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await ItemModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.json({ err: err.message });
  }
};

module.exports = { addNewItem, getItems, updateItem, deleteItem };
