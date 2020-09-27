import "./styles/main.css";
import Renderer from "./framework/Renderer";
import Store from "./framework/Store";
import apiConfig from "./config/api";
import ArticleClient from "./api/ArticleClient";
import NewsListController from "./controller/NewsListController";
import ReadLaterListController from "./controller/ReadLaterController";
import PaginationController from "./controller/PaginationController";
import SearchController from "./controller/SearchController";
import MainApp from "./MainApp";
import initialState from "./initialState";
const articleClient = new ArticleClient(
  apiConfig["api-key"],
  apiConfig["api-url"]
);

const paginationContainer = document.getElementById("activePageSelect");
const newsListContainer = document.getElementsByClassName("newsList")[0];
const readLaterContainer = document.getElementsByClassName("readLaterList")[0];
const searchContainer = document.getElementById("newsContentSearch");

const globalStore = new Store(initialState, "globalStore");
const app = new MainApp(Renderer, globalStore);

/**register controllers! This comment is pointless but that's the point */
app
  .registerController(NewsListController, newsListContainer, articleClient)
  .registerController(
    ReadLaterListController,
    readLaterContainer,
    articleClient
  )
  .registerController(PaginationController, paginationContainer, articleClient)
  .registerController(SearchController, searchContainer, articleClient);
