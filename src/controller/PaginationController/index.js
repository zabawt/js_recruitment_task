import MainController from "./../MainController";
import Pagination from "./../../components/Pagination";
import eventTypes from "../../commons/enums/eventTypes";

export default class PaginationController extends MainController {
  update() {
    this.renderPageList();
  }

  handlePageOnChange(event) {
    const { value: currentPage } = event.currentTarget;
    const { selectedSection, ...rest } = this._globalStore.getState();

    this._apiClient
      .addPAGEParam(currentPage)
      .addSECTIONParam(selectedSection)
      .getArticles()
      .then((data) => {
        const { results: articles } = data.response;
        this._globalStore.setState({
          selectedSection,
          ...rest,
          articles,
          currentPage,
        });
      });
    debugger;
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
