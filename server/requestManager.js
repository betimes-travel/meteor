var id;

Meteor.methods({
	
	/**
	 * fetch http data and pipe it to the CLIENT ...
	 * @return {[type]} [description]
	 */
	requestDelayPrediction: function(obj) {
		
		id = obj._id;

		if (!FlightDB.findOne(id))
			FlightDB.insert(obj);
	
		// callback hell ;)
		dataCollectionManager.getData(id, callPredictionAlgorithm);
	},

	clearFlightDB: function() {
		FlightDB.remove({});
	}
	
})

updateStatus = function(id, msg, val) {
	var status = {level: msg, width: val};
	FlightDB.update({_id: id}, {$set: {status: status}});
}

callPredictionAlgorithm = function(id) {
	Meteor.setTimeout( function() {
			FlightDB.update(id, {$push: {prediction: Predictor.doSmth(id)}});
			updateStatus(id, 'flight delay calculation done', 100);
		}, 5000);
}