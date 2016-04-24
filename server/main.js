import { Meteor } from 'meteor/meteor';


Meteor.methods({
    clearLogs: function() {
        DebugData.remove({}); 
    }
})