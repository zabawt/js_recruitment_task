import MainController from './../MainController';
import Article from './../../components/Article';

export default class NewsListController extends MainController {
  handleReadLater(event, id) {
    event.preventDefault();
    this._observer.setState({
      ...this._observer.getState(),
      readLater: [...this._observer.getState().readLater, id],
    });
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
          onClick: (event) => this.handleReadLater(event, id),
        }).render();
      }
    );

    this._renderer(articleList);
  }

  update(observer) {
    this._observer = observer;
    this.renderNewsList(observer.getState().articles);
  }
}
