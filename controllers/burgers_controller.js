// connect to express npm package
var express = require('express');

var router = express.Router();

// import the model (burgers.js) to use the database functions
var burger = require('../models/burger.js');

// create all routes and set up logic within those routes.
router.get("/", function(req, res){
    burger.all(function(data) {
        var routeObject = {
            burgers: data
        };
        console.log(routeObject);
        res.render("index", routeObject);   
    });
});

router.post("api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // send ID of the new burger
        res.json({ id: result.insertID });
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // if ID does not exist display 404
          return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });   
});

router.delete("api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // if ID does not exist display 404
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

// export routes for server.js to use
module.exports = router;

