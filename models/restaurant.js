// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var restaurant = {
  all: function(cb) {
    //calls orm's .selectAll()
    orm.selectAll("restaurants", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  //calls orm's .insertOne()
  create: function(cols, vals, cb) {
    orm.insertOne("restaurants", cols, vals, function(res) {
      cb(res);
    });
  },

  //calls orm's .updateOne()
  update: function(objColVals, condition, cb) {
    orm.updateOne("restaurants", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //calls orm's .deleteOne()
  delete:function(objColVals,cb){
    orm.deleteOne("restaurants",objColVals, function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (restaurants_controller.js).
module.exports = restaurant;
