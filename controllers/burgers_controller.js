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



















module.exports = router;
