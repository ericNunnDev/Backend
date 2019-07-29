const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');

// Import Routers Here

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Make endpoints here
// server.use('/api/auth', authRouter); 
// server.use('/api/users', router)

server.get('/', (req, res) => {
    res.send('<h1>Sanity == Good</h1>');
});

module.exports = server;