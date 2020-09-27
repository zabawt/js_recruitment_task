/* eslint-disable linebreak-style */
import { fromDateMinusDays } from "./../../commons/fromDate";
import qsParams from "./../../commons/enums/qsParams";

export default class ArticleClient {
  constructor(apiKey, apiUrl) {
    this._apiKey = apiKey;
    this._apiUrl = apiUrl;
    //default params
    this._qsParams = {
      "api-key": apiKey,
      [qsParams.PAGE]: 1,
      [qsParams.PAGE_SIZE]: 10,
      [qsParams.SECTION]: null,
      [qsParams.QUERY]: null,
      [qsParams.FROM_DATE]: fromDateMinusDays(30),
    };

    //Check this out, dynamically created verbose params functions to easily operate on api
    for (let param in qsParams) {
      ArticleClient.prototype[`add${param}Param`] = function (value) {
        return this.addParam(qsParams[param])(value);
      };
    }
  }

  addParam(paramName) {
    return (paramValue) => {
      this._qsParams[paramName] = paramValue;
      return this;
    };
  }

  buildQs() {
    Object.keys(this._qsParams).forEach(
      (key) => this._qsParams[key] == null && delete this._qsParams[key]
    );

    return `${this._apiUrl}/search?${new URLSearchParams(
      this._qsParams
    ).toString()}`;
  }

  async getArticles() {
    const response = await fetch(this.buildQs());

    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}
