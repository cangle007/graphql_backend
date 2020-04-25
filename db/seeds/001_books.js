exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Books')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Books').insert([
        { name: 'Name of the Wind', genre: 'Fantasy', author_id: '1' },
        { name: 'The Final Empire', genre: 'Fantasy', author_id: '2' },
        { name: 'The Hero of Ages', genre: 'Fantasy', author_id: '2' },
        { name: 'The Long Earth', genre: 'Sci-Fi', author_id: '3' },
        { name: 'The Colour of Magic', genre: 'Fantasy', author_id: '3' },
        { name: 'The Light Fantastic', genre: 'Fantasy', author_id: '3' },
      ]);
    });
};
