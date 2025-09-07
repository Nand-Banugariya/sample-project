const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/inventory'; // Replace with your MongoDB connection string

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
