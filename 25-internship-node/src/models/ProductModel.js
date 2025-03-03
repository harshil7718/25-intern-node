const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productName: { type: String, required: true },
  description: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  imageUrl: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  condition: { type: String, enum: ["New", "Used"], required: true },
  listingDate: { type: Date, default: Date.now },
  stateId: { type: String, required: true },
  cityId: { type: String, required: true },
  areaId: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
