const BibleAPIRepository = require('../repository/bibleApiRepository');

class BibleAPIService {
    constructor() {
        this.bibleApiRepository = new BibleAPIRepository();
    }

    getAllBibles (graphqlInput) {
        return this.bibleApiRepository.getAllBibles(graphqlInput);
    }

    getABible (graphqlInput) {
        return this.bibleApiRepository.getABible(graphqlInput);
    }

    getAllBooks(graphqlInput) {
        return this.bibleApiRepository.getAllBooks(graphqlInput);
    }

    getABook(bibleId, bookId, includeChapters) {
        return this.bibleApiRepository.getABook(bibleId, bookId, includeChapters);
    }

    getAllChapters(bibleId, bookId) {
        return this.bibleApiRepository.getAllChapters(bibleId, bookId);
    }

    getAChapter(graphqlInput) {
        return this.bibleApiRepository.getAChapter(graphqlInput);
    } 

}

module.exports = new BibleAPIService();