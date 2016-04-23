/**
 * fetch http data and pipe it to the CLIENT ...
 * @return {[type]} [description]
 */
getFlightData = function(obj) {
	var flightInfo = FlightModel[obj.flight];
	
	flightInfo['GeoCoords'] = [];
	flightInfo['Waypoints'].forEach(function(e) {
		flightInfo['GeoCoords'].push( AirportModel[e] );
	});
	
	writeLog(JSON.stringify(flightInfo));
	
	return flightInfo;
}