const fetch = require('node-fetch');
const _ = require('lodash');

class BibleAPIRepository {
  constructor() {
    this.baseURL = 'https://api.scripture.api.bible/v1/';

      // put api-key in environment variable before going live
    this.apiKey = { 'api-key' : '9bea9ab8db7fd98f1f0ebb9cd98b8001' };
  }

  async getAllBibles(graphqlInput) {
    if(!_.isEmpty(graphqlInput)){
        console.log(graphqlInput);
        
    }

    const result = await fetch(this.baseURL + 'bibles', { headers: this.apiKey })
    .then(res => res.json())
    .then(json => json.data);

    return result;
  }

  async getABible(id) {
    const result = await fetch(`${this.baseURL}bibles/${id}`, { headers: this.apiKey })
    .then(res => res.json())
    .then(json => json.data);

    return result; 
  }

  async getAllBooks(bibleId) {
    const result = await fetch(`${this.baseURL}bibles/${bibleId}/books`, {headers: this.apiKey})
    .then(res => res.json())
    .then(json => json.data);

    return result;
  }

  async getABook(bibleId, bookId, includeChapters = false) {
    const optionalQuery = includeChapters ? '?include-chapters=true' : '';
    const url = `${this.baseURL}bibles/${bibleId}/books/${bookId}${optionalQuery}`;

    const result = await fetch(url , {headers: this.apiKey})
    .then(res => res.json())
    .then(json => json.data);

    return result;    
  }
};

module.exports = BibleAPIRepository;