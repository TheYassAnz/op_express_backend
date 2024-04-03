// import express
const express = require('express');

// import auth middleware
const auth = require('../middleware/auth');

// create a router
const router = express.Router();

// Import the model Thing
const Thing = require('../models/Thing');

// import controllers
const stuffCtrl = require('../controllers/stuff.js');

// Middleware which intercept POST requests
router.post('/', auth, stuffCtrl.createThing);

// Middleware for PUT request
router.put('/:id', auth, stuffCtrl.modifyThing);

// Middleware for DELETE request
router.delete('/:id', auth, stuffCtrl.deleteThing);

// Middleware which return information of a specific stuff
router.get('/:id', auth, stuffCtrl.getOneThing);

// Create a middleware who return stuff information
router.get('', auth, stuffCtrl.getAllStuff);

// export the router
module.exports = router;