const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  bidId: { type: String, unique: true, required: true },
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: "Auction", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bidAmount: { type: Number, required: true },
  bidDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Accepted", "Rejected"], required: true },
});

module.exports = mongoose.model("Bid", bidSchema);
