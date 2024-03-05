const express = require('express');

// Import mongoose
const mongoose = require('mongoose');

// Import the model Thing
const Thing = require('./models/Thing');

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
    // Delete the ID sent by the client
    delete req.body._id;
    // Create an instance and receive POST data
    const thing = new Thing({
        ...req.body
    });
    // Save the thing in the DB
    thing.save()
        .then(() => res.status(201).json({ message: 'Object saved successfully!' }))
        .catch(error => res.status(400).json({ error }));
})

// Middleware for PUT request
app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object updated successfully!' }))
        .catch((error) => res.status(400).json({ error }));
});

// Middleware for DELETE request
app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object deleted successfully!' }))
        .catch((error) => res.status(400).json({ error }));
})

// Middleware which return information of a specific stuff
app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

// Create a middleware who return stuff information
app.get('/api/stuff', (req, res) => {
    // Return things array with the find method
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
})

// Export the application
module.exports = app;