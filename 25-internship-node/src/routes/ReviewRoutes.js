// const express = require('express');
const routes = require('express').Router();
const reviewController = require('../controllers/ReviewController');

// 1. Create a new review
routes.post('/reviews', reviewController.createReview);

// 2. Get all reviews for a specific seller
routes.get('/reviews/seller/:sellerId', reviewController.getReviewsBySeller);

// 3. Get a specific review by reviewId
routes.get('/reviews/:reviewId', reviewController.getReviewById);

// 4. Update a review by reviewId
routes.put('/reviews/:reviewId', reviewController.updateReview);

// 5. Delete a review by reviewId
routes.delete('/reviews/:reviewId', reviewController.deleteReview);

// 6. Get all reviews for a specific buyer
routes.get('/reviews/buyer/:buyerId', reviewController.getReviewsByBuyer);

module.exports = routes;
