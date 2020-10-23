const db = require('./index-postgres.js');

module.exports = {
  getAllReviewsForItem: (productId, callback) => {
    db.query(`SELECT * FROM reviews WHERE productorshopid = ${productId}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getAllReviewsForShop: (shopId, callback) => {
    db.query(`SELECT * FROM reviews WHERE productorshopid = ${shopId}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },
};
