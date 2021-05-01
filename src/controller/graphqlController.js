const { graphqlHTTP } = require('express-graphql');
const { schema } = require('../schema_types/schema');
const bibleApiService = require('../service/bibleApiService');

const rootResolver = {

    bible: graphqlInput => bibleApiService.getABible(graphqlInput.id),
    bibles: () => bibleApiService.getAllBibles(),

    books: graphqlInput => bibleApiService.getAllBooks(graphqlInput.bibleId),
    book: ({ bibleId, bookId, includeChapters }) => bibleApiService.getABook(bibleId, bookId, includeChapters)
};
  
const graphql = graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true, // this creates the interactive GraphQL API explorer with documentation.
});

module.exports = graphql;