/**
 * fetch http data and pipe it to the CLIENT ...
 * @return {[type]} [description]
 */
getWeatherData = function(obj) {
	
	writeLog(JSON.stringify(AirportCodeMockup[obj.location.start]));
	writeLog(AirportCodeMockup[obj.location.start].lat + ' | ' + AirportCodeMockup[obj.location.start].lon);

	var convertAsyncToSync  = Meteor.wrapAsync( HTTP.get ),
	    resultOfAsyncToSync = convertAsyncToSync( 
	    	'http://api.openweathermap.org/data/2.5/weather?lat=' 
	    	+ AirportCodeMockup[obj.location.start].lat 
	    	+ '&lon=' + AirportCodeMockup[obj.location.start].lon 
	    	+ '&appid=' + openWeatherAPI);

	return resultOfAsyncToSync;

}