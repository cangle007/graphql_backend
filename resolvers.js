const booksResolver = require('./lib/instances/booksResolver');

module.exports = {
  Query: {
    getBooks: booksResolver.getAll,
    getBookById: booksResolver.getById,
  },
  Mutation: {
    createNew: booksResolver.createNew,
  },
};
