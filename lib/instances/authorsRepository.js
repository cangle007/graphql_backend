const EntityRepository = require('../respositories/EntityRepository');
const knexDB = require('../../knex');

let authorsRepository = new EntityRepository({
  entityName: 'Authors',
  knexDB: knexDB,
});

module.exports = authorsRepository;
