const { Pool } = require('pg');

const pool = new Pool({
  database: 'getsy',
  port: 5432,
});

module.exports = {
  query: (text, callback) => pool.query(text, callback),
};
