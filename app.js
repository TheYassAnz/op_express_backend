const express = require('express');

// Create an Express application
const app = express();

// Create a simple middleware
app.use((req, res, next) => {
    console.log('Request received !');
    next();
});

// Middleware which changes the state of the response
app.use((req, res, next) => {
    res.status(201);
    next();
})

// Return a JSON response object
app.use((req, res, next) => {
    res.json({ message: 'Hello, world' });
    next();
});

// Simple middleware
app.use((req, res) => {
    console.log('Response sent !');
})

// Export the application
module.exports = app;