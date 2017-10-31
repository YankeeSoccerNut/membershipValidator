var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log ('GET index.js');
  res.render('index', { title: 'Membership Validator' });
});

module.exports = router;
