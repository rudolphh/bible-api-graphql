const BibleAPIRepository = require('../repository/bibleApiRepository');

class BibleAPIService {
    constructor() {
        this.bibleApiRepository = new BibleAPIRepository();
    }

    getAllBibles (graphqlInput) {
        return this.bibleApiRepository.getAllBibles(graphqlInput);
    }

    getABible (id) {
        return this.bibleApiRepository.getABible(id);
    }

    getAllBooks(bibleId) {
        return this.bibleApiRepository.getAllBooks(bibleId);
    }

    getABook(bibleId, bookId, includeChapters) {
        return this.bibleApiRepository.getABook(bibleId, bookId, includeChapters);
    }

}

module.exports = new BibleAPIService();