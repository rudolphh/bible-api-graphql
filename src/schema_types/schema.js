const { buildSchema } = require("graphql");

exports.schema = buildSchema(`

  type AudioBible {
    id: String
    name: String
    nameLocal: String
    description: String
    descriptionLocal: String
  }

  type Country {
    id: String
    name: String
    nameLocal: String
  }

  type Language {
    id: String
    name: String
    nameLocal: String
    script: String
    scriptDirection: String
  }

  type Bible {
    id: String
    dblId: String
    abbreviation: String
    abbreviationLocal: String
    name: String
    nameLocal: String
    description: String
    descriptionLocal: String
    relatedDbl: String
    type: String
    updatedAt: String
    audioBibles: [AudioBible]
    countries: [Country]
    language: Language
  }

  type Chapter { 
    id: String
    bibleId: String
    number: String
    bookId: String
    reference: String }
  
  type Book { 
    id: String
    bibleId: String
    abbreviation: String
    name: String
    nameLong: String
    chapters: [Chapter] }
  
  type Query {
    bibles(language: String, abbreviation: String, name: String, ids: String, 
        includeFullDetails: String): [Bible]
    bible(id: String!): Bible
    books(bibleId: String!): [Book]
    book(bibleId: String!, bookId: String!, includeChapters: Boolean): Book
  }

`);
