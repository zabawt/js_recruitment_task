import MainController from "./../MainController";
import Article from "./../../components/Article";

export default class NewsListController extends MainController {
  //uber cool function currying to handle events
  handleReadLater(id) {
    return (event) => {
      //prevent puttin double entries to read later list with use of set!
      const readLaterUnique = Array.from(
        new Set([...this._globalStore.getState().readLater, id])
      );

      event.preventDefault();
      this._globalStore.setState({
        ...this._globalStore.getState(),
        readLater: readLaterUnique,
      });
    };
  }

  renderNewsList(articles) {
    const articleList = articles.map(
      ({ id, webPublicationDate, webTitle, webUrl, sectionName }) => {
        return new Article({
          id,
          title: webTitle,
          link: webUrl,
          date: new Date(webPublicationDate).toLocaleDateString(),
          section: sectionName,
          onClick: this.handleReadLater(id),
        }).render();
      }
    );

    this._renderer(articleList);
  }

  update() {
    this.renderNewsList(this._globalStore.getState().articles);
  }
}
