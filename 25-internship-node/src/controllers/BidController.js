const Bid = require('../models/BidModel');

// Create a new bid
const createBid = async (req, res) => {
  try {
    const {  productId, userId, bidAmount, status } = req.body;

    const newBid = new Bid({

      productId,
      userId,
      bidAmount,
      status,
    });

    await newBid.save();
    res.status(201).json({ message: "Bid created successfully", bid: newBid });
  } catch (error) {
    res.status(500).json({ message: "Error creating bid", error });
  }
};

// Get all bids
const getAllBids = async (req, res) => {
  try {
    const bids = await Bid.find().populate('productId userId');
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bids", error });
  }
};

// Get a bid by bidId
const getBidById = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id).populate('productId userId');
    
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bid", error });
  }
};

// Update a bid
const updateBid = async (req, res) => {
  try {
    // const { bidAmount, status } = req.body;

    const updatedBid = await Bid.findByIdAndUpdate(
       req.params.id ,
       req.body,
      { new: true }
    );

    if (!updatedBid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    res.status(200).json({ message: "Bid updated successfully", bid: updatedBid });
  } catch (error) {
    res.status(500).json({ message: "Error updating bid", error });
  }
};

// Delete a bid
const deleteBid = async (req, res) => {
  try {
    const deletedBid = await Bid.findByIdAndDelete(req.params.id);

    if (!deletedBid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    res.status(200).json({ message: "Bid deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bid", error });
  }
};

module.exports = {
  createBid,
  getAllBids,
  getBidById,
  updateBid,
  deleteBid,
};
