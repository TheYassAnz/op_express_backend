// impot express
const express = require('express');

// import router module
const router = express.Router();

// import controllers for user
const userCtrl = require('../controllers/user');

// Middleware for signup
router.post('/signup', userCtrl.signup);

// Middleware for login
router.post('/login', userCtrl.login);

// export the router
module.exports = router;