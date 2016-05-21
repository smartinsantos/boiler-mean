// let us use .env file variables 
require('dotenv').load();
//nodejs framework & sessions
var express = require('express');
var session = require('express-session');
//generate unique ids
var uuid = require('node-uuid');
//display messages in dev mode
var morgan = require('morgan');

//parse body request, cookies
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// add db config file
var db = require('./db/db.js');

//defining the main router of the app
var router = require('./routes/mainRouter.js');

if(process.env.NODE_ENV !== 'test') {

  // We're in development or production mode;
  // create and run a real server.
  var app = express();
   // Use morgan to log requests to our express server to the console
  app.use(morgan('dev'));
  // Parse incoming request bodies as JSON
  app.use(bodyParser.json());
  
  // Parse incoming cookies
  app.use(cookieParser());
  //create and use sessionId
  // TODO: NOTE THAT EXPRESS SESSION DOES NOT REQUIRE cookieParser ANYMORE 
  // CHANGE THE COOKIE GATHERING TO BE SECURE 
  app.use(session({
    name: 'boiler-mean',
    secret: 'What a Secert Man!', // CHANGE THIS TO A ENV VARIABLE
    resave: false, // Whether or not to save the session back to the store if no modification happened
    rolling: true, // Resets expiry date after each request
    saveUninitialized: false, // Save new sessions that havent been modified
    genid: function() { // Each session id will be based on uuid v4
      return uuid.v4();
    }
  }));

  // Mount our main router on /api/
  app.use('/', router);

  // Start the server!
  var port = process.env.PORT || 5000;
  app.listen(port);
  console.log("Server Listening on port: ", port);

} else {
  // We're in test mode; make this file importable instead.
  module.exports = routes;
}
