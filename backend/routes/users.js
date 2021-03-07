var express = require('express');
var router = express.Router();
var db = require('../db/config');

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.any('select * from users').then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  db.any('select * from users where id = $1', id).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
