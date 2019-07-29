const express = require('express'); 

// Import Routers Here

const server = express();

server.use(express.json());

// Make endpoints here
// server.use('/', router); 
// server.use('/', router);

server.get('/', (req, res) => {
    res.send('<h1>Sanity == Good</h1>');
});

module.exports = server;