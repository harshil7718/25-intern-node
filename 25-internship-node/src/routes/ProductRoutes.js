const express = require("express");
const routes = express.Router();
const ProductController = require("../controllers/ProductController");

// 📌 Create a new product
routes.post("/products/add", ProductController.addProduct);
routes.post("/addwithfile",ProductController.addProductWithFile)
// 📌 Get all products
routes.get("/all", ProductController.getProducts);

// 📌 Get product by ID
routes.get("/get/:productId", ProductController.getProductById);

// 📌 Get products by category
// routes.get("/category/:categoryId", ProductController.getProductsByCategory);

// 📌 Update product by ID
routes.put("/update/:productId", ProductController.updateProduct);

// 📌 Delete product by ID
routes.delete("/delete/:productId", ProductController.deleteProduct);

module.exports = routes;
