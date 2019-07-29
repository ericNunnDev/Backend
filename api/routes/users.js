const router = require('express').Router();
const db = require('../../data/dbConfig');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'sanity == good' });
    } catch(e) {
        res.status(500).json({ message: 'Internal Error. Please try again.' })
    }
});

module.exports = router;