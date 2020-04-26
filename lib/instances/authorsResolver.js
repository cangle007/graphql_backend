const Resolver = require('../resolvers/EntityResolver');
const authorsService = require('./authorsService');

const authorsResolver = new Resolver({
  entityName: 'Authors',
  entityService: authorsService,
});

module.exports = authorsResolver;
