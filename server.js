// requiring express npm package
var express = require('express');

// connection to Heroku & local host 
var PORT = process.env.PORT || 8000;

// calling express connection as app
var app = express();

//connecting static content for the app from "public" directory in the app
app.use(express.static("public"));