// const express = require('express');
const routes = require('express').Router();
const watchlistController = require('../controllers/WatchlistController');

// 1. Create a new watchlist entry
routes.post('/watchlist', watchlistController.createWatchlist);

// 2. Get all watchlist entries for a specific user
routes.get('/watchlist/:userId', watchlistController.getUserWatchlist);

// 3. Get a specific watchlist entry (by userId and auctionId)
routes.get('/watchlist/:userId/:auctionId', watchlistController.getWatchlistById);

// 4. Update a specific watchlist entry (by userId and auctionId)
routes.put('/watchlist/:userId/:auctionId', watchlistController.updateWatchlist);

// 5. Remove a specific auction from the watchlist (by userId and auctionId)
routes.delete('/watchlist/:userId/:auctionId', watchlistController.removeFromWatchlist);

// 6. Get all watchlist entries (admin access)
routes.get('/watchlists', watchlistController.getAllWatchlists);

module.exports = routes;
