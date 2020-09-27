import MainController from "./../MainController";
import ArticleReadLater from "./../../components/ArticleReadLater";

export default class ReadLaterController extends MainController {
  //class function currying , such a cool thing!
  handleRemoveArticle(id) {
    //I use arrow to have access to lexical 'this'
    return (event) => {
      event.preventDefault();
      this.removeArticle(id);
    };
  }

  removeArticle(readLaterId) {
    // I was wondering how to optimize the search bearing in mind that modern js engines are pretty well optimized,
    // based on this article https://medium.com/javascript-in-plain-english/how-to-remove-a-specific-item-from-an-array-in-javascript-a49b108404c
    //I decided to go with filter as it's only slightly slower than for loop and way more maintable and readable

    const { readLater, ...rest } = this._globalStore.getState();
    const updatedReadLaterList = readLater.filter((id) => readLaterId !== id);

    this._globalStore.setState({ ...rest, readLater: updatedReadLaterList });
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
