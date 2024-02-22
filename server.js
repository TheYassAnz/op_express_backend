const http = require('http');

// Create an HTTP server that returns a simple 'Hello World' message
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

// Start the server on port 3000
server.listen(process.env.PORT || 3000);