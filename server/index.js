/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbHelpers = require('../database/dbhelpers.js');

const server = express();
const port = 8003;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

server.use('/', express.static(path.join(__dirname, '../client/dist')));

// route for getting all reviews for item
server.get('/reviewsItem/:id', (req, res) => {
  dbHelpers.getAllReviewsForItem(req.params.id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// route for getting all reviews for shop
server.get('/reviewsShop/:id', (req, res) => {
  dbHelpers.getAllReviewsForShop(req.params.id, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// Route to post a new review
server.post('/reviews/add', (req, res) => {
  dbHelpers.postReview(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// Route to update a review
server.put('/reviews/:id', (req, res) => {
  dbHelpers.postReview(req.params.id, req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// Route to delete a review
server.delete('/reviews/:id', (req, res) => {
  dbHelpers.postReview(req.params.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

server.listen(port, () => console.log(`listening on ${port}`));
