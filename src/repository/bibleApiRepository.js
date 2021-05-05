const fetch = require('node-fetch');
const _ = require('lodash');

class BibleAPIRepository {
  constructor() {
    this.baseURL = 'https://api.scripture.api.bible/v1/';

      // put api-key in environment variable before going live
    this.apiKey = { 'api-key' : '9bea9ab8db7fd98f1f0ebb9cd98b8001' };
  }

  _fetchData = async (url) => {
    const result = await fetch(url, { headers: this.apiKey })
    .then(res => res.json())
    .then(json => json.data);
    return result; 
  }

  getAllBibles(graphqlInput) {
    let url = `${this.baseURL}bibles`;
    if(!_.isEmpty(graphqlInput)){
        url += `?${serialize(graphqlInput)}`;
    }
    return this._fetchData(url);
  }


  getABible(id) {
    let url = `${this.baseURL}bibles/${id}`;
    return this._fetchData(url);
  }


  getAllBooks(graphqlInput) {
    let url = `${this.baseURL}bibles/${graphqlInput.bibleId}/books`;
    delete graphqlInput.bibleId;

    if(!_.isEmpty(graphqlInput)){
        url += `?${serialize(graphqlInput)}`;
    }

    return this._fetchData(url);
  }


  getABook(bibleId, bookId, includeChapters = false) {
    const optionalQuery = includeChapters ? '?include-chapters=true' : '';
    let url = `${this.baseURL}bibles/${bibleId}/books/${bookId}${optionalQuery}`;
    return this._fetchData(url);    
  }


  getAllChapters(bibleId, bookId) {
    let url = `${this.baseURL}bibles/${bibleId}/books/${bookId}/chapters`;
    return this._fetchData(url);
  }


  async getAChapter(graphqlInput) {
    let url = `${this.baseURL}bibles/${graphqlInput.bibleId}/chapters/${graphqlInput.chapterId}`;
    delete graphqlInput.bibleId;
    delete graphqlInput.chapterId;

    if(!_.isEmpty(graphqlInput)){
        url += `?${serialize(graphqlInput)}`;
        console.log(url);
    }
    return this._fetchData(url);

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