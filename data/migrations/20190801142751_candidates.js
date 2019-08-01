exports.up = function(knex, Promise) {
  return knex.schema.createTable('candidates', tbl => {
    tbl.increments();
    tbl
      .string('candidate_name');
    tbl
      .string('political_party');
    tbl
      .string('email');
    tbl
      .integer('phone_number');
    tbl
      .string('state');
    tbl
      .integer('zip');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('candidates');
};
