const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {username: 'admin', password: bcrypt.hashSync('password', 11), user_type: 'voter'},
        {username: 'eric', password: bcrypt.hashSync('eric', 11), user_type: 'voter'}
      ]);
    });
};
