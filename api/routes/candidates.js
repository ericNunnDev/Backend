const router = require('express').Router();
const axios = require('axios');
const db = require('../../data/dbConfig');

// router.get('/', async (req, res) => {
//     try {

//     } catch(e) {
//         res.status(500).json({ message: 'Internal error. Please try again' }, e);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {

//     } catch(e) {
//         res.status(500).json({ message: 'Internal error. Please try again' }, e);
//     }
// });

function getReps(req, res) {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };
    axios
    .get('https://www.googleapis.com/civicinfo/v2/representatives', requestOptions)
    .then(response => {
    res.status(200).json(response.data.results);
    })
    .catch(err => {
    res.status(500).json({ message: 'Error Fetching Data', error: err });
    });
}



module.exports = router;