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
      new Search({ [eventTypes.onBlur]: this.handleSearch }).render()
    );
  }

  handleSearch(event) {
    console.error(event.currentTarget.value);
  }
}
