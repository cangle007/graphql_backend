exports.up = function(knex, Promise) {
  return knex.schema.createTable('Books', (table) => {
    table.increments('id');
    table.varchar('title').notNullable();
    table.varchar('genre').notNullable();
    table
      .integer('author_id')
      .references('id')
      .inTable('Authors')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Books');
};
