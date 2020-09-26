import './styles/main.css';
import Renderer from './framework/Renderer';
// Please use https://open-platform.theguardian.com/documentation/

import Store from './framework/Store';
import apiConfig from './config/api';
import ArticleClient from './api/ArticleClient';
import NewsListController from './controller/NewsListController';
const articleClient = new ArticleClient(
  apiConfig['api-key'],
  apiConfig['api-url']
);

const sectionNames = ['sport', 'books', 'business', 'culture'];

const initialState = {
  sectionNames,
  readLater: [],
  articles: [],
  currentPage: 1,
  pages: 1,
};
const newsListRenderer = Renderer(
  document.getElementsByClassName('newsList')[0]
);
// eslint-disable-next-line no-unused-vars
const globalStore = new Store(initialState, 'globalStore');
const newsListController = new NewsListController(newsListRenderer);
globalStore.subscribe(newsListController);
articleClient.getArticles().then((data) => {
  const { results, pages, pageSize, currentPage } = data.response;
  globalStore.setState({
    ...initialState,
    articles: results,
    currentPage,
    pages,
    pageSize,
  });
});
