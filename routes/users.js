var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // res.send('Hello Rahul');
});

module.exports = router;


