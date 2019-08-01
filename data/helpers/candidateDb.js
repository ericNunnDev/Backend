const db = require('../dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('candidates');
};

function findById(id) {
    return db('candidates')
      .where({ id })
      .first();
  }

  function add(candidate) {
    return db('candidates').insert(candidate, 'id');
  }
  
  function update(id, changes) {
    return db('candidates')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('candidates')
      .where({ id })
      .del();
  }