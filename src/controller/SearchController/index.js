/* eslint-disable no-unused-vars */
import MainController from "./../MainController";
import Search from "./../../components/Search";
import eventTypes from "../../commons/enums/eventTypes";
import { fromDateMinusDays } from "./../../commons/fromDate";
export default class SearchController extends MainController {
  constructor(renderer, globalStore, apiClient) {
    super(renderer, globalStore, apiClient);
    this.renderSearch();
  }

  renderSearch() {
    this._renderer(
      new Search({ [eventTypes.onBlur]: this.handleSearch.bind(this) }).render()
    );
  }

  handleSearch(event) {
    const { value } = event.currentTarget;
    if (value) {
      const { pageSize, ...rest } = this._globalStore.getState();
      debugger;
      this._apiClient
        .getArticles(1, pageSize, null, fromDateMinusDays(30), value)
        .then((data) => {
          this._globalStore.setState({
            ...rest,
            articles: data.response.results,
          });
        });
    }
  }
}
