import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

FlightDB = new Mongo.Collection("flightdb");

Meteor.startup(() => {

});

Meteor.methods({
    clearLogs: function() {
        DebugData.remove({}); 
    },

    requestFlightPrediction: function(obj) {

    }
})