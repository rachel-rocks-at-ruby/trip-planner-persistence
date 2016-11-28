const restaurantRouter = require('express').Router();
var Restaurant = require('../../models/restaurant');

restaurantRouter.get('/', function(req, res, next) {
  Restaurant.findAll({})
  .then(restaurants => {
    res.json(restaurants);
  })
})

module.exports = restaurantRouter;
