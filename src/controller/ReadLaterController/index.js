import MainController from "./../MainController";
import ArticleReadLater from "./../../components/ArticleReadLater";

export default class ReadLaterController extends MainController {
  updateReadLater(event, id) {
    event.preventDefault();
    this._observer.setState({
      ...this._observer.getState(),
      readLater: [...this._observer.getState().readLater, id],
    });
  }

  getTitleById(readLaterId) {
    if (!readLaterId) throw new Error("Missing ID argument");
    return this._observer
      .getState()
      .articles.filter(({ id }) => id === readLaterId)
      .pop().webTitle;
  }

  renderReadLaterList(readLater) {
    const articleList = readLater.map((readLaterId) => {
      return new ArticleReadLater({
        title: this.getTitleById(readLaterId),
      }).render();
    });

    this._renderer(articleList);
  }

  update(observer) {
    this._observer = observer;
    const { readLater } = observer.getState();

    this.renderReadLaterList(readLater);
  }
}
