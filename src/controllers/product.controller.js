const Product = require('../models/product.model');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products,
      totalRecords: products.length,
      
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message,
    });
  }
};

module.exports = { createProduct, getAllProducts };
