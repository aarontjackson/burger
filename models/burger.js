// import ORM to create functions that will interact with the database
var orm = require('../config/orm.js');

var burgers = {
    all: function (cb) {
       orm.all("burgers", function(res){
            cb(res);
       }); 
    },
    // variables cols and vals are arrays
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(cb){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

// export the database functions for the controller
module.exports = burgers;