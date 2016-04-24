import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './main.html';



Template.flightdata.onCreated(function onCreated() {
  	console.log($().jquery);
});

Template.flightdata.helpers({
	startDate: function() {
		return moment().unix();
	}
});

Template.flightdata.events({
  	'click #flight-data-btn'(event, instance) {
	  	var flightnumber = $('#flight-number').val(),
	  		locationStart = $('#flight-location-start').val(),
	  		locationEnd = $('#flight-location-end').val(),
	  		dateStart = $('#flight-date-start').val();
	    
	    var id = dateStart + '$' + flightnumber + '$' + locationStart + '$' + locationEnd;
	    var obj = {
	    	_id: id,
	    	flightnumber: flightnumber,
	    	location: {
	    		start: locationStart,
	    		end: locationEnd
	    	},
	    	date: {
	    		start: dateStart
	    	},
	    	status: {
	    		level: 'processing...',
	    		width: 10
	    	}
	    }
	    console.log(obj);

	    Session.set('flightID', id);

	    Meteor.call('requestDelayPrediction', obj);
	 }
});

Template.status.helpers({
	progressLevel: function() {
		if (FlightDB.findOne(Session.get('flightID')))
			return FlightDB.findOne(Session.get('flightID')).status.level;
		return 'waiting for data input...';
	},
	progressWidth: function() {
		if (FlightDB.findOne(Session.get('flightID')))
			return FlightDB.findOne(Session.get('flightID')).status.width;
		return 0;
	}
})

Template.predictionResult.helpers({
	prediction: function() {
		if (FlightDB.findOne(Session.get('flightID')).prediction)
			return FlightDB.findOne(Session.get('flightID')).prediction[0];
		return null;
	},
	route: function() {
		return FlightDB.findOne(Session.get('flightID'))
			? _.values(FlightDB.findOne(Session.get('flightID')).prediction[0].route)
			: false;
	},
	format: function(val) {
		return Math.round(val / 60) + ' Minutes';
	}
})