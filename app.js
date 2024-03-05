const express = require('express');

// Import mongoose
const mongoose = require('mongoose');
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

// Middleware which intercept POST requests
app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({ message: 'POST request received successfully!' });
})

// Create a middleware who return stuff information
app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    // Return the stuff in JSON format
    res.status(200).json(stuff);
})

// Export the application
module.exports = app;