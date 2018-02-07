
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('grocery_shopping_items', function(table){
      table.increments('id');
      table.string('name');
      table.integer('price');
      table.string('seller_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('grocery_shopping_items')
  ])
};
