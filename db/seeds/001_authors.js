exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Authors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Authors').insert([
        { name: 'cang le', age: '33' },
        { name: 'thao Pham', age: '22' },
        { name: 'binh le', age: '29' },
      ]);
    })
    .then(() =>
      knex.raw(`SELECT setval('"Authors_id_seq"', (SELECT MAX("id") FROM "Authors"))`)
    );
};
