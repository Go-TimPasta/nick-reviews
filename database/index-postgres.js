const { Pool } = require('pg');

// // Local:
// const pool = new Pool({
//   database: 'getsy',
//   port: 5432,
// });

// EC2:
const pool = new Pool({
  host: 'IP_ADDRESS',
  port: 5432,
  user: 'nickrotondo',
  password: 'PASSWORD',
  database: 'getsy',
});

module.exports = {
  query: (text, callback) => pool.query(text, callback),
};

// const { Client } = require('pg');

// const client = new Client({
//   host: 'IP_ADDRESS',
//   port: 5432,
//   user: 'nickrotondo',
//   password: 'PASSWORD',
//   database: 'getsy',
// });

// client.connect((err) => {
//   if (err) {
//     console.error('connection error', err.stack);
//   } else {
//     console.log('connected');
//   }
// });

// module.exports = client;
