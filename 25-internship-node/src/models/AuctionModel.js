const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  auctionId: { type: String, unique: true, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startingBid: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ["Ongoing", "Completed", "Cancelled"], required: true },
});

module.exports = mongoose.model("Auction", auctionSchema);
