const fetch = require('node-fetch');
const _ = require('lodash');

class BibleAPIRepository {
  constructor() {
    this.baseURL = 'https://api.scripture.api.bible/v1/';

      // put api-key in environment variable before going live
    this.apiKey = { 'api-key' : '9bea9ab8db7fd98f1f0ebb9cd98b8001' };
  }

  async getAllBibles(graphqlInput) {
    let url = `${this.baseURL}bibles`;
    if(!_.isEmpty(graphqlInput)){
        url += `?${serialize(graphqlInput)}`;
    }

    const result = await fetch(url, { headers: this.apiKey })
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


  async getAllBooks(graphqlInput) {
    let url = `${this.baseURL}bibles/${graphqlInput.bibleId}/books`;
    delete graphqlInput.bibleId;

    if(!_.isEmpty(graphqlInput)){
        url += `?${serialize(graphqlInput)}`;
    }

    const result = await fetch(url, {headers: this.apiKey})
    .then(res => res.json())
    .then(json => json.data);

    return result;
  }


  async getABook(bibleId, bookId, includeChapters = false) {
    const optionalQuery = includeChapters ? '?include-chapters=true' : '';
    let url = `${this.baseURL}bibles/${bibleId}/books/${bookId}${optionalQuery}`;

    const result = await fetch(url , {headers: this.apiKey})
    .then(res => res.json())
    .then(json => json.data);

    return result;    
  }


  async getAllChapters(bibleId, bookId) {
    let url = `${this.baseURL}bibles/${bibleId}/books/${bookId}/chapters`;

    const result = await fetch(url , {headers: this.apiKey})
    .then(res => res.json())
    .then(json => json.data);

    return result;  
  }

};


serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p) && obj[p]) {
        str.push(encodeURIComponent(_.kebabCase(p)) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

module.exports = BibleAPIRepository;