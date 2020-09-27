import "./styles/main.css";
import Renderer from "./framework/Renderer";
import Store from "./framework/Store";
import apiConfig from "./config/api";
import ArticleClient from "./api/ArticleClient";
import NewsListController from "./controller/NewsListController";
import ReadLaterListController from "./controller/ReadLaterController";

const articleClient = new ArticleClient(
  apiConfig["api-key"],
  apiConfig["api-url"]
);

const sectionNames = ["sport", "books", "business", "culture"];

const initialState = {
  sectionNames,
  readLater: [],
  articles: [],
  currentPage: 1,
  pages: 1,
};
const newsListRenderer = Renderer(
  document.getElementsByClassName("newsList")[0]
);
const readLaterRenderer = Renderer(
  document.getElementsByClassName("readLaterList")[0]
);
// eslint-disable-next-line no-unused-vars
const globalStore = new Store(initialState, "globalStore");

const newsListController = new NewsListController(newsListRenderer);
const readLaterController = new ReadLaterListController(readLaterRenderer);

globalStore.subscribe(newsListController);
globalStore.subscribe(readLaterController);
//globalStore.subscribeObservers([newsListController, readLaterController]);

articleClient.getArticles().then((data) => {
  const { results, pages, pageSize, currentPage } = data.response;
  const currentState = globalStore.getState();
  globalStore.setState({
    ...currentState,
    articles: results,
    currentPage,
    pages,
    pageSize,
  });
});
