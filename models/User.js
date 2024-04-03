const mongoose = require('mongoose');

// import mongoose unique validator
const uniqueValidator = require('mongoose-unique-validator');

// create a user schema for authentication
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// use the unique validator plugin to ensure email is unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);