const jwt = require('jsonwebtoken');
const env = require('../config/environment');

module.exports = {
  authenticate,
  generateToken
};

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, env.jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: 'No token provided, must be set on Authorization Header' });
  }
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, env.jwtKey, options);
}