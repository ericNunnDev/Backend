exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 255).unique().notNullable();
    tbl.string('password', 255).notNullable();
    tbl.string('user_type', 128).defaultTo('voter');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
