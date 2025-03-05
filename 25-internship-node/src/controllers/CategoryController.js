const categoryModel = require("../models/CategoryModel");

// Add a new category
const addCategory = async (req, res) => {
  try {
    const savedCategory = await categoryModel.create(req.body);
    res.status(201).json({
      message: "Category added successfully",
      data: savedCategory,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json({
      message: "All categories",
      data: categories,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ categoryId: req.params.categoryId });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({
      message: "Category found",
      data: category,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addCategory, getCategories, getCategoryById };
