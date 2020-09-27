/* eslint-disable no-unused-vars */
import MainController from "./../MainController";
import eventTypes from "../../commons/enums/eventTypes";
import SectionSelector from "./../../components/SectionSelector";

export default class SectionSelectorController extends MainController {
  constructor(renderer, globalStore, apiClient) {
    super(renderer, globalStore, apiClient);
    this.renderSelector();
  }

  renderSelector() {
    this._renderer(
      new SectionSelector({ onChange: this.handleChange.bind(this) }).render()
    );
  }

  async selectNewsBySection(sectionName) {
    const updatedState = this._globalStore.getState();
    if (sectionName === "") {
      sectionName = null; //if cleared null parameter will return default ALL
    }
    const {
      response: { results: articles, ...rest },
    } = await this._apiClient
      .addPAGEParam(1)
      .addSECTIONParam(sectionName)
      .getArticles();

    this._globalStore.setState({
      ...updatedState,
      selectedSection: sectionName,
      articles,
      ...rest,
    });
  }

  handleChange(event) {
    const { value: section } = event.currentTarget;
    this.selectNewsBySection(section);
  }
}
