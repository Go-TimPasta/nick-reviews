const db = require('./index.js');

const dbHelpers = {
  getAllReviewsForItem: (id, callback) => {
    const queryString = `Select * from users, reviewsForItemDogs where users.id = reviewsForItemDogs.userID AND users.category=${id}  LIMIT 28;`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getAllReviewsForShop: (id, callback) => {
    const queryString = `Select * from users, reviewsForShopDogs where users.id = reviewsForShopDogs.userID AND users.category=${id} LIMIT 44;`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};
module.exports = dbHelpers;
