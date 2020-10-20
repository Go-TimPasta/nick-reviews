/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/getsy', { useNewUrlParser: true, useUnifiedTopology: true });

// eslint-disable-next-line prefer-destructuring
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('Connected to database');
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  productOrShopId: Number,
  userName: String,
  userPhoto: String,
  reviewDate: { type: Date, default: Date.now },
  style: String,
  review: String,
  reviewPic: String,
  reviewRating: Number,
  purchasedItemDescription: String,
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = {
  Review,
  connection,
};
