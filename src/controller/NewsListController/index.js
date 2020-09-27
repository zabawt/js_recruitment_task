import MainController from "./../MainController";
import Article from "./../../components/Article";

export default class NewsListController extends MainController {
  //uber cool function currying to handle events
  handleReadLater(id) {
    return (event) => {
      event.preventDefault();
      const { webUrl, webTitle } = this.getArticleById(id);
      let { readLater } = this._globalStore.getState();

      if (readLater.filter((item) => item.id === id).length === 0) {
        readLater.push({ id, webUrl, webTitle });

        // well I decided to make button disabled if item is already added to read later list, just for user experience purposes
        // the issue here though is that I mixed presentation layer with data layer, I mean that our article model should be separeted from it's representation
        // to handle that properly I will use a function that checks this isArticleDisabled

        this._globalStore.setState({
          ...this._globalStore.getState(),
          readLater,
        });
      }
    };
  }

  isArticleDisabled(articleId) {
    //we convert expresion to boolean with !! operator
    return !!this._globalStore
      .getState()
      .readLater.filter(({ id }) => id === articleId).length;
  }

  getArticleById(articleId) {
    const { articles } = this._globalStore.getState();
    return articles.filter(({ id }) => articleId === id).pop();
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
          disabled: this.isArticleDisabled(id),
        }).render();
      }
    );

    this._renderer(articleList);
  }

  update() {
    this.renderNewsList(this._globalStore.getState().articles);
  }
}
