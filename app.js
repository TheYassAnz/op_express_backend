const express = require('express');

// Import mongoose
const mongoose = require('mongoose');

// import routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://yassine_anzarbasha:Cqy42zXhAPil04v4@ocexpresstraining.xd0o2xj.mongodb.net/?retryWrites=true&w=majority&appName=ocExpressTraining',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Create an Express application
const app = express();

// Middleware which intercept JSON data
app.use(express.json());

// Headers to prevent CORS errors
app.use((req, res, next) => {
    // Set the headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Set the headers to allow the following methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware for stuff
app.use('/api/stuff', stuffRoutes);

// Middleware for authentification
app.use('/api/auth', userRoutes);

// Export the application
module.exports = app;