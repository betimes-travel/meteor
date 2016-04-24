var openWeatherAPI = { token : "b5a7c93c2bc392c46082491927f6825e" };

/**
 * fetch http data and pipe it to the CLIENT ...
 * @return {[type]} [description]
 */
getWeatherData = function(id, callback) {
	
	// writeLog(JSON.stringify(AirportModel[obj.location.start]));
	// writeLog(AirportModel[obj.location.start].lat + ' | ' + AirportModel[obj.location.start].lon);
	var obj = FlightDB.findOne(id);

	var convertAsyncToSync  = Meteor.wrapAsync( HTTP.get ),
	    resultOfAsyncToSync = convertAsyncToSync( 
	    	'http://api.openweathermap.org/data/2.5/weather?lat=' 
	    	+ AirportModel[obj.location.start].lat 
	    	+ '&lon=' + AirportModel[obj.location.start].lon 
	    	+ '&appid=' + openWeatherAPI.token);

	FlightDB.update(id, {$push: {weather: resultOfAsyncToSync}});

	Meteor.setTimeout(function() {
		writeLog('sync call for getWeatherData');
		updateStatus(id, 'weather data fetched', 60);
	}, 4000);
	

	return callback(id);

}