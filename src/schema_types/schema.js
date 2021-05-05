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
    reference: String 
    content: String
  }
  
  type Book { 
    id: String
    bibleId: String
    abbreviation: String
    name: String
    nameLong: String
    chapters: [Chapter] }
  
  type Query {
    bibles(language: String, abbreviation: String, name: String, ids: String, 
        includeFullDetails: Boolean): [Bible]
    bible(id: String!): Bible
    books(bibleId: String!, includeChapters: Boolean, includeChaptersAndSections: Boolean): [Book]
    book(bibleId: String!, bookId: String!, includeChapters: Boolean): Book
    chapters(bibleId: String!, bookId: String!): [Chapter]
    chapter(bibleId: String!, chapterId: String!, includeNotes: Boolean,
        includeTitles: Boolean, includeChapterNumbers: Boolean, includeVerseSpans: Boolean, 
        parallels: String): Chapter
  }

`);
