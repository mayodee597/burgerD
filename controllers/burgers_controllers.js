var express = require("express");
var burger = require("./../models/burger.js");

var router = express.Router();

router.get ("/", function(req, res) {
   burger.selectAll(function(data){
       var hbObj = {
           burgers: data

       };
       res.render("index", hbObj);
   });

});

router.post("/burgers", function (req, res){
   
    burger.insertOne(req.body.burgerName, function(data){
        console.log("burger Added");
        res.redirect("/");

    });
});

router.put("/burgers/:id", function (req, res){
    var id = req.params.id;
    burger.updateOne(id, 1, function(data){
        console.log("burger devoured");
        res.redirect("/");

    });
});

module.exports = router;