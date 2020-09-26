import MainController from './../MainController';
import Article from './../../components/Article';

export default class NewsListController extends MainController {
  addToReadLaterList() {
    if (this._observer) {
      console.error(this._observer);
    }
  }

  renderNewsList(articles) {
    const articleList = articles.map(
      ({ webPublicationDate, webTitle, webUrl, sectionName }) => {
        return new Article({
          title: webTitle,
          link: webUrl,
          date: new Date(webPublicationDate).toLocaleDateString(),
          section: sectionName,
        }).render();
      }
    );
    console.error(articleList);
    this._renderer(articleList);
  }

  update(observer) {
    this._observer = observer;
    this.renderNewsList(observer.getState().articles);
  }
}
