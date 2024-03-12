// import express
const express = require('express');

// create a router
const router = express.Router();

// Import the model Thing
const Thing = require('../models/Thing');

// import controllers
const stuffCtrl = require('../controllers/stuff.js');

// Middleware which intercept POST requests
router.post('/', stuffCtrl.createThing);

// Middleware for PUT request
router.put('/:id', stuffCtrl.modifyThing);

// Middleware for DELETE request
router.delete('/:id', stuffCtrl.deleteThing);

// Middleware which return information of a specific stuff
router.get('/:id', stuffCtrl.getOneThing);

// Create a middleware who return stuff information
router.get('', stuffCtrl.getAllStuff);

// export the router
module.exports = router;