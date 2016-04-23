DEBUG = {
    log: function(msg) {
    
        DebugData.insert({msg: 'client LOG - START'});
        if (typeof Array === msg) {
            _.each(msg, function(ele, i) {
                DebugData.insert({msg: ele});
            })
        } else {
            DebugData.insert({msg: msg});  
        }
//        DebugData.insert({msg: '---'});  
        DebugData.insert({msg: 'client LOG - END'});
    },
    
    entries: function() {
        return DebugData.find().fetch(); 
    }
}

Template.debugExec.helpers({
    log: function() {
        //console.log(DebugData.find().fetch());
        return DebugData.find().fetch();   
    }
})

Template.debugExec.events({
    'click #clearLogs': function() {
        Meteor.call('clearLogs', function(err, res) {
            if (err)
                DEBUG.log(err);
        });
    }
})