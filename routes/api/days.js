'use strict'
const dayRouter = require('express').Router();
const Day = require('../../models/day');
const Hotel =require('../../models/hotel');
const Restaurant =require('../../models/restaurant');
const Activity =require('../../models/activity');

//Gets all days
dayRouter.route('/')
	.get((req, res, next) => {
		Day.findAll({})
		.then( days => {
			res.json(days);
		})
		.catch(next);
	})
	//creates a new day
	.post((req, res, next) => {
		Day.create({
			number: req.body.number
		})
		.then( newDay => {
			res.json(newDay);
		})
		.catch(next);

	});


dayRouter.route('/:id')
	//get one day
	.get((req, res, next) => {

	})
	//delete a day
	.delete((req, res, next) => {
		console.log(req.params);
		Day.destroy({
			where: {
				number: req.params.id
			}
		})
		.then( deletedDay => {
			res.json(deletedDay);
		})
		.catch(next);

	});

dayRouter.route('/:id/:type')
	//add a hotel to a day
	.put((req, res, next) => {
		console.log(req.body);
		let dayToLink;
		Day.findOne({
			where: {
				number: req.params.id
			}
		})
		.then( updateDay => {
			dayToLink = updateDay;
		})
		.then(() => {
			switch (req.params.type) {
	      case 'hotel':
	        return Hotel.findOne({
	        	where: {
	        		name: req.body.name
	        	}
	        })
	        .then( hotel => {
	        	return dayToLink.setHotel(hotel);
	        })
	      case 'restaurant':
	        return Restaurant.findOne({
	        	where: {
	        		name: req.body.name
	        	}
	        })
	        .then( restaurant => {
	        	return dayToLink.addRestaurant(restaurant);
	        })
	      case 'activity':
	        return Activity.findOne({
	        	where: {
	        		name: req.body.name
	        	}
	        })
	        .then( activity => {
	        	return dayToLink.addActivity(activity);
	        })
	    }
		})
		.then( attraction => {
			res.json(attraction);
		})
		.catch(next);

	})
	//delete a hotel from a day
	.delete((req, res, next) => {

	});


// dayRouter.route('/:id/restaurant')
// 	//add a restaurant to a day
// 	.put((req, res, next) => {

// 	})
// 	//delete a restaurant from a day
// 	.delete((req, res, next) => {

// 	});


// dayRouter.route('/:id/activity')
// 	//add a activity to a day
// 	.put((req, res, next) => {

// 	})
// 	//delete a activity from a day
// 	.delete((req, res, next) => {

// 	});

module.exports = dayRouter;