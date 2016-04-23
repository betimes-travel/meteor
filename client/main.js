import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.flightdata.onCreated(function helloOnCreated() {
  // counter starts at 0
  // this.counter = new ReactiveVar(0);
  console.log($().jquery);
});

Template.flightdata.helpers({
	startDate: function() {
		return moment("25-12-1995", "DD-MM-YYYY");
	}
});

Template.flightdata.events({
  'click #flight-data-btn'(event, instance) {
  	var flight = $('#flight-number').val(),
  		locationStart = $('#flight-location-start').val(),
  		locationEnd = $('#flight-location-end').val(),
  		dateStart = $('#flight-date-start').val();
    
    var id = dateStart + '$' + flight + '$' + locationStart + '$' + locationEnd;
    var obj = {
    	id: id,
    	flight: flight,
    	location: {
    		start: locationStart,
    		end: locationEnd
    	},
    	date: {
    		start: dateStart
    	}
    }
    console.log(obj);

    Meteor.call('requestDelayPrediction', obj, function(err, res) {
        if (err) DEBUG.log(JSON.stringify(err))
        if (res) DEBUG.log(JSON.stringify(res.data))
    })
  },
});

Template.authorize.events({
	'click #authorize-open-weather': function(e) {
		Meteor.call('authorizeWeatherAPI', function(err, res) {
	        if (err) DEBUG.log(JSON.stringify(err))
	        if (res) DEBUG.log(JSON.stringify(res.data))
	    })
	}
})