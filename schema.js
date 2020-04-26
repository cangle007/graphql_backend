module.exports = `
  type Books {
    id: Int!
    title: String!
    genre: String!
    author_id: Int!
    created_at: String
  }

  type Authors {
    name: String!
    age: Int!
  }

  type Query {
    getBooks: [Books]!
    getAuthors: [Authors]!
    getAuthorById(id: Int!): Authors
    getBookById(id: Int!): Books
  }

  type Mutation {
    createNewBook(
      title: String!
      genre: String!
      author_id: Int!
    ):Books

    createNewAuthor(
      name: String!
      age: Int!
    ): Authors
  }
`;

// const graphql = require('graphql');

// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLSchema,
//   GraphQLID,
//   GraphQLList, //when you pull multiple items
// } = graphql;

// //dummy data
// var books = [
//   { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
//   { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
//   { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
//   { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
//   { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
//   { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
// ];

// var authors = [
//   { name: 'Patrick Rothfuss', age: 44, id: '1' },
//   { name: 'Brandon Sanderson', age: 42, id: '2' },
//   { name: 'Terry Pratchett', age: 66, id: '3' },
// ];

// const BookType = new GraphQLObjectType({
//   name: 'Book',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     genre: { type: GraphQLString },
//     author: {
//       type: AuthorType,
//       resolve(parent, args) {
//         //parent = Book the is the parent
//         return authors.find((obj) => obj.id === parent.authorId);
//       },
//     },
//   }),
// });

// const AuthorType = new GraphQLObjectType({
//   name: 'Author',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args) {
//         //parent = Author the is the parent
//         return books.filter((obj) => obj.authorId === parent.id);
//       },
//     },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     book: {
//       type: BookType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         //code to get data from db/other source
//         return books.find((obj) => obj.id === args.id);
//       },
//     },
//     author: {
//       type: AuthorType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return authors.find((obj) => obj.id === args.id);
//       },
//     },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args) {
//         return books;
//       },
//     },
//     authors: {
//       type: new GraphQLList(AuthorType),
//       resolve(parent, args) {
//         return authors;
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({
//   query: RootQuery,
// });
