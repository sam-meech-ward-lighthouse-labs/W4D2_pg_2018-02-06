
exports.up = function(knex, Promise) {
  // migrate forward
  return knex.schema.createTable('sellers', function (table) {
    table.increments('id');
    table.string('usernam');
    table.string('password');
  });
};

exports.down = function(knex, Promise) {
  // migrate backward
  return knex.schema.dropTable('sellers');
};
