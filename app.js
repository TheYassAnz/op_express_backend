const express = require('express');

// Create an Express application
const app = express();

// Return a JSON response object
app.use((req, res) => {
    res.json({ message: 'Hello, world' })
})

// Export the application
module.exports = app;