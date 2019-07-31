const router = require('express').Router();
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../../auth/auth');

router.get('/', async (req, res) => {
    try {
        res.sendStatus(200)
    } catch (e) { res.sendStatus(500); }
  });

router.post('/register', async (req, res) => {
  const credentials = req.body;
    try {
        let user = await db('users')
        .where({ username: credentials.username })
        first();
        if(user) {
          res.status(400).json({ message: `${user.username} is already taken. Please choose another username` })
        } else {
          const hash = bcrypt.hashSync(user.password, 10);
          credentials.password = hash;
          
          const userId = await db('users').add(credentials);
          user = await db('users')
          .where({ id: userId[0] })
          .first();
          const token = await generateToken(user);
          res.status(201).json({
            userId: userId[0],
            username: user.username,
            token,
            user_type: user.user_type
          });
        }
    } catch(e) { res.sendStatus(500); }
  });
  
  router.post('/login', async (req, res) => {
   try {
    let { username, password } = req.body; 
  
    db.findBy({ username })
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
      res.sendStatus(500);
    };
  });

module.exports = router;