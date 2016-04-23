import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {

  FlightDB = new Mongo.Collection("flightdb");


});

Meteor.methods({
    clearLogs: function() {
        DebugData.remove({}); 
    },

    requestFlightPrediction: function(obj) {

    }
})