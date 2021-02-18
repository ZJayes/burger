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
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  //put route
  //used to update the route

  router.put('/api/burger/:id', function(req,res) {
    // console.log(req.params.id)
    let id = req.params.id
    burger.update([
      "devoured = true"
    ], [
      `id = ${id}` 
    ], function(result) {
      res.json({id: result.insertId})
    })
  })















module.exports = router;
