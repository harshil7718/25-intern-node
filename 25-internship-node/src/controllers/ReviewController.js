const Review = require('../models/ReviewModel');

// 1. Create a new review
const createReview = async (req, res) => {
  try {
    const { sellerId, buyerId, rating, comment } = req.body;

    // Create a new review entry
    const newReview = new Review({
      sellerId,
      buyerId,
      rating,
      comment,
      reviewDate: new Date()
    });

    await newReview.save();
    res.status(201).json({ message: "Review created successfully", review: newReview });
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
  }
};

// 2. Get all reviews for a specific seller
const getReviewsBySeller = async (req, res) => {
  try {
    const sellerId = req.params.sellerId;

    // Fetch all reviews for the specific seller
    const reviews = await Review.find({ sellerId }).populate('buyerId', 'name'); // populate buyerId to get buyer's name

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this seller' });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

// 3. Get a specific review by reviewId
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId).populate('sellerId buyerId');

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: "Error fetching review", error });
  }
};

// 4. Update a review (e.g., update comment or rating)
const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.reviewId,
      req.body,
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: "Review updated successfully", review: updatedReview });
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error });
  }
};

// 5. Delete a review
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
};

// 6. Get all reviews for a specific buyer
const getReviewsByBuyer = async (req, res) => {
  try {
    const buyerId = req.params.buyerId;

    // Fetch all reviews for the specific buyer
    const reviews = await Review.find({ buyerId }).populate('sellerId', 'name'); // populate sellerId to get seller's name

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this buyer' });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching buyer's reviews", error });
  }
};

module.exports = {
  createReview,
  getReviewsBySeller,
  getReviewById,
  updateReview,
  deleteReview,
  getReviewsByBuyer
};
