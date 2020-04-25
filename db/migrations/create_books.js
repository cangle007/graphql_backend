exports.up = function(knex, Promise) {
  return knex.schema.createTable('Books', (table) => {
    table.increments();
    table.varchar('name').notNullable();
    table.varchar('genre').notNullable();
    table.integer('author_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Books');
};
