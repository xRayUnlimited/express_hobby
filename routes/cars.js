var express = require('express')
var router = express.Router()
var Car = require('../cars').Cars
//REFACTOR THIS PAGE
// PUT /movies/7
router.put('/:id', function(req, res) {
  Car.update(
    { title: req.body.title },
    { where: { id: req.params.id }}
  )
    .then( function() {
      return res.redirect('/cars')
    })
})

// GET /movies/7/edit
router.get('/:id/edit', function(req, res) {
  Car.findById(req.params.id)
    .then( function(car) {
      return res.render('edit', { car: car })
    })
})

//  DELETE /movies/7
router.delete('/:id', function(req, res) {
  Car.findById(req.params.id)
    .then( function(car) { car.destroy() })
    .then( function() { return res.redirect('/cars') })
  
})

// GET /movies
router.get('/', function(req, res) {
  Car.all({
    order: [['createdAt', 'ASC']]
  })
    .then( function(cars) {
      res.render('cars', { cars: cars })
    })
})

// POST /movies
router.post('/', function(req, res) {
  var title = req.body.title
  Car.create({ title: title })
    .then( function() {
      res.redirect('/cars')
    })
})

module.exports = router;
