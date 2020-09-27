import "./styles/main.css";
import Renderer from "./framework/Renderer";
import Store from "./framework/Store";
import apiConfig from "./config/api";
import ArticleClient from "./api/ArticleClient";
import NewsListController from "./controller/NewsListController";
import ReadLaterListController from "./controller/ReadLaterController";
import PaginationController from "./controller/PaginationController";
import MainApp from "./MainApp";

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

const paginationContainer = document.getElementById("activePageSelect");
const newsListContainer = document.getElementsByClassName("newsList")[0];
const readLaterContainer = document.getElementsByClassName("readLaterList")[0];

const globalStore = new Store(initialState, "globalStore");
const app = new MainApp(Renderer, globalStore);

/**register controllers! Probably this comment is pointless but that's the point */
app
  .registerController(NewsListController, newsListContainer)
  .registerController(ReadLaterListController, readLaterContainer)
  .registerController(PaginationController, paginationContainer);

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
