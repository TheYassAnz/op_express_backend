// import express
const express = require('express');

// create a router
const router = express.Router();

// Import the model Thing
const Thing = require('../models/Thing');

// Middleware which intercept POST requests
router.post('/', (req, res, next) => {
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
});

// Middleware for PUT request
router.put('/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object updated successfully!' }))
        .catch((error) => res.status(400).json({ error }));
});

// Middleware for DELETE request
router.delete('/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Object deleted successfully!' }))
        .catch((error) => res.status(400).json({ error }));
});

// Middleware which return information of a specific stuff
router.get('/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

// Create a middleware who return stuff information
router.get('', (req, res) => {
    // Return things array with the find method
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});

// export the router
module.exports = router;