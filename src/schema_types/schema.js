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


  
  type Book { 
    id: String
    bibleId: String
    abbreviation: String
    name: String
    nameLong: String
    chapters: [Chapter] }

  type Meta { fums: String
    fumsId: String
    fumsJsInclude: String
    fumsJs: String
    fumsNoScript: String }
  
  type Attrs { verseId: String verseOrgIds: [String ] }
  
  type Items { text: String type: String attrs: Attrs }
  
  type Content { name: String
    type: String
    items: [Items ]
    attrs: Attrs }

    type Parallels { id: String
        bibleId: String
        number: String
        bookId: String
        reference: String
        copyright: String
        verseCount: Int
        orgId: String
        content: [Content ] }
      
    type Previous { id: String number: String bookId: String }
    
    type Next { id: String number: String bookId: String }
    
    type Chapter { id: String
        bibleId: String
        number: String
        bookId: String
        reference: String
        copyright: String
        verseCount: Int
        parallels: [Parallels ]
        previous: Previous
        next: Next
        content: [Content ] }

    type Query {
        bibles(language: String, abbreviation: String, name: String, ids: String, 
            includeFullDetails: Boolean): [Bible]
        bible(id: String!): Bible
        books(bibleId: String!, includeChapters: Boolean, includeChaptersAndSections: Boolean): [Book]
        book(bibleId: String!, bookId: String!, includeChapters: Boolean): Book
        chapters(bibleId: String!, bookId: String!): [Chapter]
        chapter(bibleId: String!, chapterId: String!, contentType: String, includeNotes: Boolean,
            includeTitles: Boolean, includeChapterNumbers: Boolean, includeVerseSpans: Boolean, 
            parallels: String): Chapter
        }
`);
