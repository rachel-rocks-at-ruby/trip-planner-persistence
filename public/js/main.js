'use strict';
/* global $ tripModule */

$(tripModule.load);

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

$.get('/api/hotels', (hotels) => {
  hotels.forEach(makeOption, $hotelSelect);
})

$.get('/api/restaurants', (restaurants) => {
  restaurants.forEach(makeOption, $restaurantSelect);
})

$.get('/api/activities', (activities) => {
  activities.forEach(makeOption, $activitySelect);
})
