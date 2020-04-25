const express = require('express');
const morgan = require('morgan'); //HTTP request logger middleware for node.js. You could see the logs in the terminal for each time an HTTP request was made
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express'); //allow express to understand graphql
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PORT = process.env.PORT || 4000;

const app = express();

switch (process.env.NODE_ENV) {
  case 'development':
    app.use(morgan('dev'));
    break;
  case 'production':
    app.use(morgan('short'));
    break;
  default:
}

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`🚀 Server ready at PORT ${PORT}`); // eslint-disable-line no-console
});

module.exports = app;
