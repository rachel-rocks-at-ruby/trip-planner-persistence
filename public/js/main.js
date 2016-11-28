'use strict';
/* global $ tripModule */



var $optionsPanel = $('#options-panel');
var $hotelSelect = $optionsPanel.find('#hotel-choices');
var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
var $activitySelect = $optionsPanel.find('#activity-choices');

function makeOption (databaseAttraction) {
  var $option = $('<option></option>') // makes a new option tag
    .text(databaseAttraction.name)
    .val(databaseAttraction.id);
  this.append($option); // add the option to the specific select
}



Promise.all([
	$.get('/api/hotels'),

	$.get('/api/restaurants'),

	$.get('/api/activities'),

	$.get('/api/days')

	])
.then( (results) => {
	results[0].forEach(makeOption, $hotelSelect);
	results[1].forEach(makeOption, $restaurantSelect);
	results[2].forEach(makeOption, $activitySelect);
	results[3].forEach(tripModule.addDatabaseDay);
	attractionsModule.createEnhanced(results);
	$(tripModule.load);
})
.catch((err) => {
	throw new Error(err);
});
