exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Books')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Books').insert([
        { title: 'Name of the Wind', genre: 'Fantasy', author_id: '1' },
        { title: 'The Final Empire', genre: 'Fantasy', author_id: '2' },
        { title: 'The Hero of Ages', genre: 'Fantasy', author_id: '2' },
        { title: 'The Long Earth', genre: 'Sci-Fi', author_id: '3' },
        { title: 'The Colour of Magic', genre: 'Fantasy', author_id: '3' },
        { title: 'The Light Fantastic', genre: 'Fantasy', author_id: '3' },
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"Books_id_seq"', (SELECT MAX("id") FROM "Books"))`)
    );
};
