const { graphqlHTTP } = require('express-graphql');
const { schema } = require('../schema_types/schema');
const bibleApiService = require('../service/bibleApiService');

const rootResolver = {

    bible: graphqlInput => bibleApiService.getABible(graphqlInput.id),
    bibles: graphqlInput => bibleApiService.getAllBibles(graphqlInput),

    books: graphqlInput => bibleApiService.getAllBooks(graphqlInput),
    book: ({ bibleId, bookId, includeChapters }) => bibleApiService.getABook(bibleId, bookId, includeChapters),

    chapters: ({ bibleId, bookId }) => bibleApiService.getAllChapters(bibleId, bookId),
    chapter : graphqlInput => bibleApiService.getAChapter(graphqlInput)

};
  
const graphql = graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true, // this creates the interactive GraphQL API explorer with documentation.
});

module.exports = graphql;