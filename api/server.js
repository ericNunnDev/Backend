const express = require('express'); 
const helmet = require('helmet');
const usersRoute = require('./routes/users');
const candidatesRoute = require('./routes/candidates');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/', usersRoute);
// server.use('/candidates', candidatesRoute);

module.exports = server;