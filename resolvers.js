const booksResolver = require('./lib/instances/booksResolver');
const authorsResolver = require('./lib/instances/authorsResolver');

module.exports = {
  Query: {
    getBooks: booksResolver.getAll,
    getAuthors: authorsResolver.getAll,
    getAuthorById: authorsResolver.getById,
    getBookById: booksResolver.getById,
  },
  Mutation: {
    createNewBook: booksResolver.createNewBook,
    createNewAuthor: authorsResolver.createNewAuthor,
  },
};
