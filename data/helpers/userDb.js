const db = require('../dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find(users) {
  const users = await db('users');
  return users;
}

async function add(user) {
  return db('users').insert(user, 'id');
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users')
  .where({ id })
  .first();
}