const AuthorsService = require('../services/AuthorsService');
const authorsRepository = require('./authorsRepository');

let authorsService = new AuthorsService({ authorsRepository });

module.exports = authorsService;
