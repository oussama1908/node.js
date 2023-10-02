// server.js
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Respond with an HTML message
    res.end('<h1>Hello Node!!!!</h1>\n');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
