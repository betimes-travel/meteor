import { Mongo } from 'meteor/mongo';

DebugData = new Mongo.Collection('debugdata');

Meteor.startup(function() {
    if (Meteor.isServer) {
        DebugData.remove({});   
    }
})