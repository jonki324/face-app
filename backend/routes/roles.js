var express = require('express');
var router = express.Router();
var db = require('../db/config');

router.get('/', function (req, res, next) {
  db.any('select * from roles').then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

module.exports = router;
