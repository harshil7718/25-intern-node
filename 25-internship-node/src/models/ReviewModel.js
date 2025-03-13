const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // assuming the User model is named 'User'
    required: true
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users', // assuming the User model is named 'User'
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  reviewDate: {
    type: Date,
    default: Date.now
  }
});

// Create the model from the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
