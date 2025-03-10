const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Assuming User model exists
      // required: true
    },
    productName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category", // Assuming Category model exists
      required: true
    },
    productURL: {
      type: String, // Assuming a URL will be stored
      // required: true
    },
    startingPrice: {
      type: mongoose.Schema.Types.Decimal128, // For accurate price storage
      required: true
    },
    condition: {
      type: String,
      enum: ["New", "Used"],
      required: true
    },
    listingDate: {
      type: Date,
      default: Date.now // Auto-fills with current date
    },
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "states", // Assuming State model exists
      required: true
    },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City", // Assuming City model exists
      required: true
    },
    // areaId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Area", // Assuming Area model exists
    //   required: true
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
