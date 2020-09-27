import MainController from "./../MainController";
import Pagination from "./../../components/Pagination";
import eventTypes from "../../commons/enums/eventTypes";

export default class PaginationController extends MainController {
  update() {
    this.renderPageList();
  }

  handlePageOnChange(event) {
    const { value: pageValue } = event.currentTarget;
    const { selectedSection, ...rest } = this._globalStore.getState();

    this._apiClient
      .addPAGEParam(pageValue)
      .addSECTIONParam(selectedSection)
      .getArticles()
      .then((data) => {
        const { results: articles, currentPage, pages } = data.response;
        this._globalStore.setState({
          ...rest,
          pages,
          selectedSection,
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
    pagination.value = currentPage;
    this._renderer(pagination);
  }
}
