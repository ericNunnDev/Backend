const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('users');
};

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }
  
  function add(user) {
    return db('users').insert(user, 'id');
  }
  
  function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }