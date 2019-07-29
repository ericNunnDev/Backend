const express = require('express'); 
const cors = require('cors');

// Import Routers Here

const server = express();

server.use(express.json());
server.use(cors());

// Make endpoints here
// server.use('/login', authRouter); 
// server.use('/signup', router);
// server.use('/users', router)

server.get('/', (req, res) => {
    res.send('<h1>Sanity == Good</h1>');
});

module.exports = server;