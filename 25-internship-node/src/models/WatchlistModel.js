const mongoose = require('mongoose');

// Watchlist Schema
const watchlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',  // Reference to the User entity
    required: true,
  },
  auctionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auction',  // Reference to the Auction entity
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,  // Automatically sets the current date
  },
});

const Watchlist = mongoose.model('Watchlist', watchlistSchema);

module.exports = Watchlist;
