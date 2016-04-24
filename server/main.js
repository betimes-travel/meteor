import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../imports/api/tasks.js';

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