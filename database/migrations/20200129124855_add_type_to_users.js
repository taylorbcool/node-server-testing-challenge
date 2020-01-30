
exports.up = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.string('type', 80);
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
      tbl.dropColumn('type');
  })
};
