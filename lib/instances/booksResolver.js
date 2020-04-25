const Resolver = require('../resolvers/EntityResolver');
const booksService = require('./booksService');

const booksResolver = new Resolver({
  entityName: 'Books',
  entityService: booksService,
});

module.exports = booksResolver;
