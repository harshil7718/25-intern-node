const routes = require('express').Router();
const cityController = require('../controllers/CityController.js');
routes.post("/addcity", cityController.addCity);    
routes.get("/c/getallcities", cityController.getCities);
routes.get("/getcitybystate/:stateId",cityController.getCityByStateId)
module.exports = routes;