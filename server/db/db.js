//moongose ORM to handle mongoDB, also making it a promise
var db = require('mongoose');
db.Promise = require('bluebird');

// Configure mongoose with the correct environment configuration Mongolab URL or localhost 
var config = {
  dbUrl: process.env.MONGOLAB_URI || 'mongodb://localhost/boiler-mean' //<your db name here>
};

//Connect to DB specifiying URL
db.connect(config.dbUrl);

//DB on error throw
db.connection.on('error', function(err){
 console.log('Connection to DB failed: ', err);
});

//DB on Connection show
db.connection.once('open', function (callback) {
  console.log('Connected to DB Success!');
});
module.exports = db;

