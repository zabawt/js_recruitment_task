/* eslint-disable no-unused-vars */
import MainController from "./../MainController";
import Search from "./../../components/Search";
import eventTypes from "../../commons/enums/eventTypes";

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

    const { selectedSection, ...rest } = this._globalStore.getState();

    this._apiClient
      .addPAGEParam(1)
      .addSECTIONParam(selectedSection)
      .addQUERYParam(value)
      .getArticles()
      .then((data) => {
        const {
          pages,
          currentPage,
          pageSize,
          results: articles,
        } = data.response;

        this._globalStore.setState({
          ...rest,
          currentPage,
          pageSize,
          selectedSection,
          pages,
          articles,
        });
      });
  }
}
