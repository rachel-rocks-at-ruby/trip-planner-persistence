const activityRouter = require('express').Router();
var Activity = require('../../models/activity');

activityRouter.get('/', function(req, res, next) {
  Activity.findAll({})
  .then(activities => {
    res.json(activities);
  })
})

module.exports = activityRouter;
