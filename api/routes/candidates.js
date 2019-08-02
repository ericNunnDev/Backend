const router = require('express').Router();
const db = require('../../data/helpers/candidateDb');

router.get('/', async (req, res) => {
    try {
        const candidates = await db.find();
        res.status(200).json(candidates);
    } catch(e) { res.sendStatus(500); }
});

router.get('/:id', async (req, res) => {
    try {
        const candidate = await db.findById(req.params.id);
        if(candidate) {
            res.status(200).json(candidate);
        } else {
            res.sendStatus(404);
        }
    } catch(e) { res.sendStatus(500); }
});

router.post('/', async (req, res) => {
    try {
      const candidates = await db.add(req.body);
      if(candidates) {
          res.status(201).json(candidates);
      } else {
          res.sendStatus(304);
      }
    } catch(e) { res.sendStatus(500); }
});

router.put('/:id', async (req, res) => {
    try {
      const candidates = await db.update(req.params.id);
      if(candidates) {
          res.status(200).json(candidates);
      } else {
          res.sendStatus(404);
      }
    } catch(e) { res.sendStatus(500); }
});

router.delete('/:id', async (req, res) => {
    try {
        const delId = await db.remove(req.params.id);
        if(delId > 0) {
            res.status(200).json({ message: 'Candidate has been removed.', db })
        } else {
            res.sendStatus(304);
        }
    } catch(e) { res.sendStatus(500); }
});

module.exports = router;