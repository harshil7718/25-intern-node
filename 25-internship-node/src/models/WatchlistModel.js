const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  watchlistId: { type: String, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: "Auction", required: true },
  addedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
