exports.up = function(knex, Promise) {
  return knex.schema.createTable('Authors', (table) => {
    table.increments('id');
    table.varchar('name').notNullable();
    table.varchar('age').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Authors');
};
