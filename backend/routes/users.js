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
  const id = req.params.id;
  db.any('select * from users where id = $1', id).then(data => {
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/', function (req, res, next) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role_id = req.body.role;
  const sql = 'insert into users (name, email, password, role_id) values ($1, $2, $3, $4)';
  db.none(sql, [name, email, password, role_id]).then(() => {
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

router.put('/', function (req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role_id = req.body.role;
  const sql = 'update users set name = $1, email = $2, password = $3, role_id = $4 where id = $5';
  db.none(sql, [name, email, password, role_id, id]).then(() => {
    res.sendStatus(204);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  const sql = 'delete from users where id = $1';
  db.none(sql, id).then(() => {
    res.sendStatus(204);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  });
});

module.exports = router;
