// Include Server Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongo = require('mongodb');
var path = require('path');

// Require Incident Schema
var incident = require("./models/Incident");

// Create Instance of Express
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Import API routes
var apiRoutes = require("./routes/apiRoutes")
app.use('/', apiRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});


// Set PORT 
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));


// MongoDB Configuration configuration
mongoose.connect("mongodb://heroku_k0np0cmx:3qq3fvv0henroq5u9eherfcls5@ds139904.mlab.com:39904/heroku_k0np0cmx");

	// previous local connection:
	// mongodb://localhost:27017/StreetWise


var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


// PORT Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});