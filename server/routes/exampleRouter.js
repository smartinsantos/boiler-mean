//Uses Express defines router
var express = require('express');
var router = express.Router();

var helpers = require('../helpers/helpers.js')


//Uses DB config and Schema
var db = require('../db/db');



// Get device by id
router.get('/', function (req, res) {

  res.status(200).send('This is an Example Route')
  
});

module.exports = router;
