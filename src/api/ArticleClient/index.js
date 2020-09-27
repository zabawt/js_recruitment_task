/* eslint-disable linebreak-style */
import { fromDateMinusDays } from "./../../commons/fromDate";
export default class ArticleClient {
  constructor(apiKey, apiUrl) {
    this._apiKey = apiKey;
    this._apiUrl = apiUrl;
  }

  buildQs(page, pageSize, section, fromDate, q) {
    const pageParams = {
      "api-key": this._apiKey,
      page,
      pageSize,
      section,
      fromDate,
      q,
    };

    Object.keys(pageParams).forEach(
      (key) => pageParams[key] == null && delete pageParams[key]
    );

    return `${this._apiUrl}/search?${new URLSearchParams(
      pageParams
    ).toString()}`;
  }

  async getArticles(
    page = 1,
    pageSize = 10,
    section = null,
    fromDate = fromDateMinusDays(30),
    q = null
  ) {
    const response = await fetch(
      this.buildQs(page, pageSize, section, fromDate, q)
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}
