/* eslint-disable no-console */
require('newrelic');

const express = require('express');
const compression = require('compression');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbHelpers = require('../database/dbHelpers-postgres.js');
// eslint-disable-next-line no-unused-vars
const db = require('../database/index-postgres.js');

const server = express();
const port = 8003;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(cors());
server.use(compression());

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

server.listen(port, () => console.log(`listening on ${port}`));
