const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = require('./env');

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'pg',
    //connection: 'postgres://localhost/graphql_db',
    // connection: {
    //   host: PGHOST,
    //   database: PGDATABASE,
    //   user: PGUSER,
    //   password: PGPASSWORD,
    // },
    connection: {
      host: 'localhost',
      database: 'graphql_db',
      user: 'cangle',
      password: 'secret',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
