var express = require('express');
var router = express.Router();
var Bill = require('../models/Bill');
var Legislator = require('../models/Legislator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bills', function (req, res) {

  Bill.find({}, function(err, docs){
    res.send(docs);
  });
});


router.get('/legislators', function (req, res) {

  Legislator.find({}, function(err, docs){
    res.send(docs);
  });
});

router.get('/legislators/:chamber', function (req, res) {

  Legislator.find({'chamber.name': req.params.chamber}, function(err, docs){
    res.send(docs);
  });
});

router.get('/legislators/:chamber/:party', function (req, res) {

  Legislator.find({'chamber.name': req.params.chamber, party: req.params.party}, function(err, docs){
    res.send(docs);
  });
});

router.post('/bill', function (req, res) {

  var newBill = new Bill(req.body);

  //newBill.billName = req.body.billName;

  newBill.save();

  console.log(req.body);
  res.send(req.body);
});


router.post('/legislator', function (req, res) {

  var newLegislator = new Legislator(req.body);

  //newBill.billName = req.body.billName;

  newLegislator.save();

  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
