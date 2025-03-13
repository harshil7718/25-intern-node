const Auction = require('../models/AuctionModel');

// Create a new auction
const createAuction = async (req, res) => {
  try {
    const { productId, userId, startingBid, startDate, endDate, status } = req.body;

    // Create a new auction
    const newAuction = new Auction({
      productId,
      userId,
      startingBid,
      startDate,
      endDate,
      status,
    });

    await newAuction.save();
    res.status(201).json({ message: 'Auction created successfully', auction: newAuction });
  } catch (error) {
    res.status(500).json({ message: 'Error creating auction', error });
  }
};

// Get all auctions
const getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate('productId userId');
    res.status(200).json(auctions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching auctions', error });
  }
};

// Get auction by auctionId
const getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id).populate('productId userId');
    
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.status(200).json(auction);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching auction', error });
  }
};

// Update an auction
const updateAuction = async (req, res) => {
  try {
    const updatedAuction = await Auction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAuction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.status(200).json({ message: 'Auction updated successfully', auction: updatedAuction });
  } catch (error) {
    res.status(500).json({ message: 'Error updating auction', error });
  }
};

// Delete an auction
const deleteAuction = async (req, res) => {
  try {
    const deletedAuction = await Auction.findByIdAndDelete(req.params.id);

    if (!deletedAuction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.status(200).json({ message: 'Auction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting auction', error });
  }
};

module.exports = {
  createAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction,
};
