import "./styles/main.css";
import Renderer from "./framework/Renderer";
import Store from "./framework/Store";
import apiConfig from "./config/api";
import ArticleClient from "./api/ArticleClient";
import NewsListController from "./controller/NewsListController";
import ReadLaterListController from "./controller/ReadLaterController";
import PaginationController from "./controller/PaginationController";
import SearchController from "./controller/SearchController";
import SectionSelectorController from "./controller/SectionSelectorController";
import MainApp from "./MainApp";
import initialState from "./initialState";
const articleClient = new ArticleClient(
  apiConfig["api-key"],
  apiConfig["api-url"]
);

// create dom containers
const paginationContainer = document.getElementById("activePageSelect");
const newsListContainer = document.getElementById("news-list");
const readLaterContainer = document.getElementById("read-later-list");
const searchContainer = document.getElementById("newsContentSearch");
const sectionSelectorContainer = document.getElementById("sectionSelect");

// /* create globalStore
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
  .registerController(SearchController, searchContainer, articleClient)
  .registerController(
    SectionSelectorController,
    sectionSelectorContainer,
    articleClient
  );
