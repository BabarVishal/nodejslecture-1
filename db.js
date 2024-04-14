const mongoose = require('mongoose');

// Define the MongoDB connection URL with the correct scheme
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'; // Replace 'localhost' with your MongoDB server address if it's hosted elsewhere

// Set Up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Define event listener
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('Mongo Connection error', err);
});

db.on('disconnected', () => {
    console.log('Mongo disconnected');
});

module.exports = db;
