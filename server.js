const http = require('http');

// Import the Express application
const app = require('./app');

// Create an HTTP server
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

// Start the server on port 3000
server.listen(process.env.PORT || 3000);