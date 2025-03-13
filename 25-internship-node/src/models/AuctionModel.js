// models/Auction.js
const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Assuming a Product model exists
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Assuming a User model exists
    required: true,
  },
  startingBid: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Ongoing", "Completed", "Cancelled"],
    default: "Ongoing", // Default status is Ongoing
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Auction", auctionSchema);
