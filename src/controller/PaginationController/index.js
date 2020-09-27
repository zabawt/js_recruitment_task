import MainController from "./../MainController";
import Pagination from "./../../components/Pagination";
import eventTypes from "../../commons/enums/eventTypes";

export default class PaginationController extends MainController {
  update() {
    this.renderPageList();
  }

  handlePageOnChange(event) {
    const { value } = event.currentTarget;

    this._apiClient.getArticles(value).then((data) => {
      const { results: articles, currentPage } = data.response;
      const currentState = this._globalStore.getState();
      this._globalStore.setState({
        ...currentState,
        articles,
        currentPage,
      });
    });
  }

  renderPageList() {
    const { pages, currentPage } = this._globalStore.getState();
    const pagination = new Pagination({
      pages,
      currentPage,
      [eventTypes.onChange]: this.handlePageOnChange.bind(this),
    }).render();
    pagination.value = this._globalStore.getState().currentPage;
    this._renderer(pagination);
  }
}
