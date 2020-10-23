const db = require('./index-mongo.js');

module.exports = {
  getAllReviewsForItem: (productId, callback) => {
    db.Review.find({
      productOrShopId: productId,
    }, {
      id: 1,
      productOrShopId: 1,
      userName: 1,
      userPhoto: 1,
      reviewDate: 1,
      style: 1,
      review: 1,
      reviewPic: 1,
      reviewRating: 1,
    }).hint({ productOrShopId: 1 }).exec((err, results) => {
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
