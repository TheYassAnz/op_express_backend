// Desc: Middleware to verify JWT token
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
module.exports = (req, res, next) => {
    try {
        // Find the JWT token in the request headers
        const token = req.headers.authorization.split(' ')[1];
        // Decode the token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // Extract the user ID from the token
        req.auth = {
            userId: decodedToken.userId,
        };
    } catch (error) { res.status(401).json({ error }); }
}

