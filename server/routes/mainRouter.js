var Path = require('path');
var express = require('express');

//routers declarations
var router = express.Router();
var exampleRouter = require('./exampleRouter');

var assetFolder = Path.resolve(__dirname, '../../dist/');

router.use(express.static(assetFolder));

// Middleware that checks if logged in and sets cookie to true
// Used so that Angular can check for this cookies existence to see if logged in or not
// Used only on production
// router.use(function(req, res, next) {
//   if (req.isAuthenticated()) {
//     res.cookie('isLoggedIn', true);
//   } else {
//     res.cookie('isLoggedIn', false);
//     req.logout();
//   }
//   next();
// });


// Set up our different api endpoints
// This is an example use of multiple routers
router.use('/api/example', exampleRouter);

// Basically, if we get to this point, serve our Angular app and let Angular deal with routing
router.get('/*', function (req, res) {
  res.sendFile(assetFolder + '/index.html');
});

module.exports = router; 

