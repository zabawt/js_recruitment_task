import MainController from "./../MainController";
import ArticleReadLater from "./../../components/ArticleReadLater";

export default class ReadLaterController extends MainController {
  //class function currying , such a cool thing!
  handleRemoveArticle(id) {
    //I use arrow to have access to lexical 'this'
    return (event) => {
      event.preventDefault();
      console.error(id);
    };
  }

  getArticleById(readLaterId) {
    if (!readLaterId) throw new Error("Missing ID argument");
    return this._globalStore
      .getState()
      .articles.filter(({ id }) => id === readLaterId)
      .pop();
  }

  renderReadLaterList(readLater) {
    const articleList = readLater.map((readLaterId) => {
      const { id, webUrl, webTitle } = this.getArticleById(readLaterId);
      return new ArticleReadLater({
        title: webTitle,
        webUrl,
        onClick: this.handleRemoveArticle(id),
      }).render();
    });

    this._renderer(articleList);
  }

  update() {
    const { readLater } = this._globalStore.getState();
    this.renderReadLaterList(readLater);
  }
}
