var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var restaurant = require("../models/restaurant.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  restaurant.all(function(data) {
    var hbsObject = {
      restaurants: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/restaurants", function(req, res) {
    restaurant.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/restaurants/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  restaurant.update({
    visited: req.body.visited,
    liked:req.body.liked
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/restaurants/:id", function(req, res) {

    restaurant.delete(
    {id:req.params.id},
    function(result){
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


// Export routes for server.js to use.
module.exports = router;
