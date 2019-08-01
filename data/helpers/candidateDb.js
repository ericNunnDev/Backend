const db = require('../dbConfig');

module.exports = {
    find,
    findById
};

function find() {
    return db('candidates');
};

function findById(id) {
    return db('candidates')
      .where({ id })
      .first();
  }
  