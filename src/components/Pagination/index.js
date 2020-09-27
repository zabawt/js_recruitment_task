import BaseComponent from "../../framework/BaseComponent";
import eventTypes from "./../../commons/enums/eventTypes";
export default class Pagination extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<select ${
      eventTypes.onChange
    }>${this.renderPageOptions()}</select>`;
  }

  renderPageOptions() {
    const options = [];
    for (let i = 1; i <= 10; ++i) {
      options.push(`<option value="${i}">${i}</option>`);
    }
    return options.join("");
  }
}
