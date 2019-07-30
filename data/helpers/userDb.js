const db = require('../dbConfig');
module.exports = {
  getAllUsers: async () => {
    const users = await db('users');
    return users;
  },
  add: async credential => {
    const userId = await db('users').add(credential);
    return userId;
  },
  update: async (id, change) => {
    const userId = await db('users')
      .where({ id })
      .update(change);
    return userId;
  },
  delete: async id => {
    const count = await db('users')
      .where({ id })
      .del();
    return count;
  }
};