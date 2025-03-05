const Product = require("../models/ProductModel");

// ✅ Add a new product
const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("sellerId", "name email") // Populating seller details
      .populate("categoryId", "categoryName") // Populating category name
      .populate("stateId cityId", "name"); // Populating location details

    res.status(200).json({
      message: "All products",
      data: products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
      .populate("sellerId", "name email")
      .populate("categoryId", "categoryName")
      .populate("stateId cityId", "name");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product found",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get products by category
// const getProductsByCategory = async (req, res) => {
//   try {
//     const products = await Product.find({ categoryId: req.params.categoryId })
//       .populate("sellerId", "name email")
//       .populate("categoryId", "categoryName");

//     res.status(200).json({
//       message: "Products found",
//       data: products,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// ✅ Update product by ID
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
//   getProductsByCategory,
  updateProduct,
  deleteProduct,
};
