const router = require('express').Router();
const db = require('../../data/helpers/userDb');
const bcrypt = require('bcryptjs');
const { authenticate } = require('../../auth/auth');
const { generateToken } = require('../../auth/auth');

router.get('/', async (req, res) => {
    try {
      const users = await db.find();
        res.json(users)
    } catch (e) { res.sendStatus(500); }
  });

router.post('/register', async (req, res) => {
    try {
        let user = await db.add('users')
          const hash = bcrypt.hashSync(user.password, 10);
          user.password = hash;
        
          const token = await generateToken(user);
          res.status(201).json({
            username: user.username,
            token,
          });
    } catch(e) { res.sendStatus(500); }
  });
  
  router.post('/login', async (req, res) => {
   try {
    let { username, password } = req.body; 
  
    db.find({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token,
          });
        } else {
          if(!user) {
            res.status(400).json({ message: 'That username does not exist. Please try again.' });
          }
          if(user && bcrypt.compareSync(password, user.password)) {
            res.status(401).json({ message: 'Invalid password. Please try again.' });
          }
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      });
   } catch(e) { res.sendStatus(500); }
  });

module.exports = router;