const express = require('express');
const productRoute = express.Router();
const { createProduct, getAllProducts } = require('../controllers/product.controller');
const checkAgeLimit = require('../middleware/validateUser');

productRoute.post('/', checkAgeLimit, createProduct);
productRoute.get('/', getAllProducts);

module.exports = productRoute;
