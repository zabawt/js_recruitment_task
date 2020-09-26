import BaseComponent from '../../framework/BaseComponent';

export default class ArticleList extends BaseComponent {
  articleList() {
    const { articles } = this._props;
    return articles.map((article) => `<li>${article}</li>`).join('');
  }

  render() {
    return `<ul class="newsList">
      ${this.articleList()}
     </ul>`;
  }
}
