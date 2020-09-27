import BaseComponent from "../../framework/BaseComponent";

export default class NoResults extends BaseComponent {
  constructor() {
    super({});
    this._html = "<li><h2>No results found</h2></li>";
  }
}
