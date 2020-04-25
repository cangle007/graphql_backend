const BooksService = require('../services/BooksService');
const booksRepository = require('./booksRepository');

let booksService = new BooksService({ booksRepository });

module.exports = booksService;
