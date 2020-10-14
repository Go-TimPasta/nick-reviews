const mysql = require('mysql');
const PASSWORD = require('./config.js');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'etsyReviewsDB',
});

db.connect();

module.exports = db;
