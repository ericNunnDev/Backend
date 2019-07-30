const router = require('express').Router();
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../../auth/auth');

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'sanity == good' });
    } catch(e) {
        res.status(500).json({ message: 'Internal Error. Please try again.' });
    }
});

router.post('/register', async (req, res) => {
    try {
        let user = req.body;
        const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
        user.password = hash;
      
        db.add(user)
          .then(saved => {
            res.status(201).json(saved);
          });
    } catch(e) {
        res.status(500).json(e);
      };
  });
  
  router.post('/login', async (req, res) => {
   try {
    let { username, password } = req.body; 
  
    db.getAllUsers({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
  
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      });
   } catch(e) {
        res.status(500).json({ message: 'Internal Error. Please try again.', e });
    };
  });

module.exports = router;