const db = require('./index-mongo.js');

module.exports = {
  getAllReviewsForItem: (productId, callback) => {
    db.Review.find({ productOrShopId: productId }).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getAllReviewsForShop: (shopId, callback) => {
    db.Review.find({ productOrShopId: shopId }).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};
