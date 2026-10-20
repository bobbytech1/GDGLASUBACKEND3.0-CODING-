const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    enum: ['', '', ''],
    // required: true,
  },
  reviews: [{ body: String, rating: { type: Number, max: 5, min: 0 } }],
  tags: [String],
  quantity: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
