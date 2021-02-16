const express = require('express')
const burger = require('../models/burger')
const router = express.Router();

//creating the routes

//get route

router.get("/", function(req,res) {
 burger.all(function(data) {
     var hbsObject = {
         burgers: data
     };
     console.log(hbsObject);
     res.render("index", hbsObject)
 })
});

//post route

router.post("/api/burger", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  //put route
  //used to update the route

  router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function (result) {
        if (result.changedRows === 0) {
  
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
















module.exports = router;
