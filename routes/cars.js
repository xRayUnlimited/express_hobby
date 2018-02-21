var express = require('express');
var router = express.Router();
var Cars = require('../models').Cars;

/* GET car listings. */
router.get('/', function(req, res) {
  Cars.all()
    .then( function(cars) {
      return res.render('cars', { cars: cars });
  })
});

/* POST add car listing */
router.post('/', function(req, res) {
  var make = req.body.make;
  Car.create({ make: make })
    .then( function() {
      res.redirect('/cars');
  });
});
module.exports = router;