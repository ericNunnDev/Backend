const jwt = require('jsonwebtoken');
const env = require('../config/environment');

module.exports = {
  authenticate,
  generateToken
};

async function authenticate(req, res, next) {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, env.jwtKey, (e, decoded) => {
      if (e) return res.sendStatus(401);
        req.decoded = decoded;
        next();
    });
  } else {
    return res.status(401).json({ message: 'No token provided, must be set on Authorization Header' });
  }
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    password: user.password
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, env.jwtKey, options);
};