const hotelRouter = require('express').Router();
var Hotel = require('../../models/hotel');

hotelRouter.get('/', function(req, res, next) {
  Hotel.findAll({})
  .then(hotels => {
    res.json(hotels);
  })
})

module.exports = hotelRouter;
