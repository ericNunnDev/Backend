const express = require('express'); 
const server = express();
const helmet = require('helmet');
const usersRoute = require('./routes/users');
const candidatesRoute = require('./routes/candidates');
const { authenticate } = require('../auth/auth');
server.use(helmet());
server.use(express.json());
server.use('/users', usersRoute);
// server.use('/candidates', authenticate, candidatesRoute);

module.exports = server;