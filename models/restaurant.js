// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var restaurant = {
  all: function(cb) {
    orm.selectAll("restaurants", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("restaurants", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("restaurants", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete:function(objColVals,cb){
    orm.deleteOne("restaurants",objColVals, function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = restaurant;
