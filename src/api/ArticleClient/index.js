export default class ArticleClient {
  constructor(apiKey, apiUrl) {
    this._apiKey = apiKey;
    this._apiUrl = apiUrl;
  }
  buildQs(page, pageSize, section) {
    return `${this._apiUrl}/search?api-key=${this._apiKey}&page=${page}&pageSize=${pageSize}&section=${section}`;
  }
  async getArticles(page = 1, pageSize = 10, section = "books") {
    const response = await fetch(this.buildQs(page, pageSize, section));
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}
