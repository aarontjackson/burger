// requiring express npm package
var express = require('express');

// connection to Heroku & local host 
var PORT = process.env.PORT || 3000;

// calling express connection as app
var app = express();

// connecting static content for the app from "public" directory in the app
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start our server so that it can begin listening to client requests
app.listen(PORT, function() {
    // log(server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});