const BibleAPIRepository = require('../repository/bibleApiRepository');

class BibleAPIService {
    constructor() {
        this.bibleApiRepository = new BibleAPIRepository();
    }

    getAllBibles () {
        return this.bibleApiRepository.getAllBibles();
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