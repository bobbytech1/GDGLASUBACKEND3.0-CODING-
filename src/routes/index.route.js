const express = require('express');
const router = express.Router();
const userRoutes = require('./user.route');
const productRoutes = require('./product.route');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
// router.use('/users', userRoutes);

module.exports = router;
