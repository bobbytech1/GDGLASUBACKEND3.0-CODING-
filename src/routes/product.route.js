const express = require('express');
const productRoute = express.Router();
const { createProduct, getAllProducts, updateProductPatch, updateProductPut, getSingleProduct, deleteProduct } = require('../controllers/product.controller');
const checkAgeLimit = require('../middleware/validateUser');

productRoute.post('/', checkAgeLimit, createProduct);
productRoute.patch('/:id', updateProductPatch);
productRoute.put('/:id', updateProductPut);
productRoute.get('/', getAllProducts);
productRoute.get('/:id', getSingleProduct);
productRoute.delete('/:id', deleteProduct)


module.exports = productRoute;
