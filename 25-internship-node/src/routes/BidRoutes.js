const routes = require("express").Router();
// const router = express.Router();
const bidController = require("../controllers/BidController");

// Create a new bid
routes.post("/bids", bidController.createBid);

// Get all bids
routes.get("/bids", bidController.getAllBids);

// Get a bid by bidId
routes.get("/bids/:id", bidController.getBidById);

// Update a bid
routes.put("/bids/:id", bidController.updateBid);

// Delete a bid
routes.delete("/bids/:id", bidController.deleteBid);

module.exports = routes;
