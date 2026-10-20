require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
