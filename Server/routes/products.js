const express = require('express');
const router = express.Router();
const products = require('../data/Products.json');

// GET /api/products → return JSON list of products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;