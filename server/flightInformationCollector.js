/**
 * fetch http data and pipe it to the CLIENT ...
 * @return {[type]} [description]
 */
getFlightData = function(id, callback) {
	var flightData = FlightDB.findOne(id) || 0;

	var flightInfo = FlightModel[flightData.flightnumber];
	var temp = {};
	_.each(flightInfo['waypoints'], function(e, i) {	
		temp[i] = AirportModel[e];
	});
	
	writeLog('flight data processed');
	
	Meteor.setTimeout(function() {
		updateStatus(id, 'flight data fetched', 30);
	}, 2000);

	return getWeatherData(id, callback);
}