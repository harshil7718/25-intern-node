const Watchlist = require('../models/WatchlistModel');

// 1. Create a new watchlist entry
const createWatchlist = async (req, res) => {
  try {
    const { userId, auctionId } = req.body;

    // Check if the auction is already in the user's watchlist
    const existingWatchlist = await Watchlist.findOne({ userId, auctionId });
    if (existingWatchlist) {
      return res.status(400).json({ message: 'Auction is already in the watchlist.' });
    }

    // Create a new Watchlist entry
    const newWatchlist = new Watchlist({
      userId,
      auctionId,
    });

    await newWatchlist.save();
    res.status(201).json({ message: 'Auction added to watchlist successfully', watchlist: newWatchlist });
  } catch (error) {
    res.status(500).json({ message: 'Error adding to watchlist', error });
  }
};

// 2. Get all watchlist entries for a specific user
const getUserWatchlist = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch all watchlist entries for the specific user
    const watchlist = await Watchlist.find({ userId }).populate('auctionId');
    
    if (!watchlist || watchlist.length === 0) {
      return res.status(404).json({ message: 'No auctions found in watchlist' });
    }

    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching watchlist', error });
  }
};

// 3. Get a specific watchlist entry (for example, by userId and auctionId)
const getWatchlistById = async (req, res) => {
  try {
    const { userId, auctionId } = req.params;

    // Fetch the specific watchlist entry
    const watchlist = await Watchlist.findOne({ userId, auctionId }).populate('auctionId');
    
    if (!watchlist) {
      return res.status(404).json({ message: 'Auction not found in watchlist' });
    }

    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching specific watchlist entry', error });
  }
};

// 4. Update an existing watchlist entry
const updateWatchlist = async (req, res) => {
  try {
    const { userId, auctionId } = req.params;
    const { addedDate } = req.body;

    // Find and update the watchlist entry
    const updatedWatchlist = await Watchlist.findOneAndUpdate(
      { userId, auctionId },
      { addedDate },
      { new: true }
    );

    if (!updatedWatchlist) {
      return res.status(404).json({ message: 'Auction not found in watchlist' });
    }

    res.status(200).json({ message: 'Watchlist updated successfully', watchlist: updatedWatchlist });
  } catch (error) {
    res.status(500).json({ message: 'Error updating watchlist', error });
  }
};

// 5. Remove an auction from the watchlist
const removeFromWatchlist = async (req, res) => {
  try {
    const { userId, auctionId } = req.params;

    // Find and remove the watchlist entry
    const deletedWatchlist = await Watchlist.findOneAndDelete({ userId, auctionId });

    if (!deletedWatchlist) {
      return res.status(404).json({ message: 'Auction not found in watchlist' });
    }

    res.status(200).json({ message: 'Auction removed from watchlist successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing auction from watchlist', error });
  }
};

// 6. Get all watchlist entries (admin access)
const getAllWatchlists = async (req, res) => {
  try {
    const watchlist = await Watchlist.find().populate('userId auctionId');
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all watchlists', error });
  }
};

module.exports = {
  createWatchlist,
  getUserWatchlist,
  getWatchlistById,
  updateWatchlist,
  removeFromWatchlist,
  getAllWatchlists,
};
