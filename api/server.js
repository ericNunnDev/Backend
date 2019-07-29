const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');
const usersRoute = require('./routes/users');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/', usersRoute);

module.exports = server;