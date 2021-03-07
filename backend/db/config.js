const pgp = require('pg-promise')();
const cn = 'postgres://postgres:postgres@db:5432/faceappdb';
const db = pgp(cn);

module.exports = db;
