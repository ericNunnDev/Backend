const router = require('express').Router();
const db = require('../../data/helpers/candidateDb');

router.get('/', async (req, res) => {
    try {
        const candidates = await db.find();
        res.status(200).json(candidates);
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const candidate = await db.findById(req.params.id);
        if(candidate) {
            res.status(200).json(candidate);
        } else {
            res.sendStatus(400);
        }
    } catch(e) {
        res.sendStatus(500);
    }
});

module.exports = router;