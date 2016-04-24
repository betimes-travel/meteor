var openWeatherAPI = { token : "b5a7c93c2bc392c46082491927f6825e" };

Meteor.methods({
	
	/**
	 * fetch http data and pipe it to the CLIENT ...
	 * @return {[type]} [description]
	 */
	requestDelayPrediction : function(obj) {
		
		writeLog(JSON.stringify(AirportModel[obj.location.start]));
		writeLog(AirportModel[obj.location.start].lat + ' | ' + AirportModel[obj.location.start].lon);
		
		var flightId = obj.flight-number;
		
		collection.update(
			{ flightId	: flightId},
			{ $set : {
					flightId		: flightId,
					startLocation	: obj.location.start,
					endLocation		: obj.location.end,
					startDate		: obj.date.start
				}
			}
		);
		
		dataCollectionManager.getData(flightId);

		var convertAsyncToSync  = Meteor.wrapAsync( HTTP.get ),
		    resultOfAsyncToSync = convertAsyncToSync( 
		    	'http://api.openweathermap.org/data/2.5/weather?lat=' 
		    	+ AirportModel[obj.location.start].lat 
		    	+ '&lon=' + AirportModel[obj.location.start].lon 
		    	+ '&appid=' + openWeatherAPI.token);
	}
	
})
