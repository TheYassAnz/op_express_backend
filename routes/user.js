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

// Route GET /users
router.get('', userCtrl.getUsers);

// Route DELETE /users/:id
router.delete('/:id', userCtrl.deleteUser);

// export the router
module.exports = router;