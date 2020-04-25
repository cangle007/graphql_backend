const EntityRepository = require('../respositories/EntityRepository');
const knexDB = require('../../knex');

let booksRepository = new EntityRepository({
  entityName: 'Books',
  knexDB: knexDB,
});

module.exports = booksRepository;
