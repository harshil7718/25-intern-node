// const express = require('express');
const routes = require('express').Router();
const auctionController = require('../controllers/AuctionController');

// Create a new auction
routes.post('/auction', auctionController.createAuction);

// Get all auctions
routes.get('/auctions', auctionController.getAllAuctions);

// Get a single auction by id
routes.get('/auction/:id', auctionController.getAuctionById);

// Update an auction by id
routes.put('/auction/:id', auctionController.updateAuction);

// Delete an auction by id
routes.delete('/auction/:id', auctionController.deleteAuction);

module.exports = routes;
