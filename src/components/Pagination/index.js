import BaseComponent from "../../framework/BaseComponent";
import eventTypes from "./../../commons/enums/eventTypes";
export default class Pagination extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<select ${
      eventTypes.onChange
    } id="activePageSelect" data-pages="${
      this._props.pages
    }">${this.renderPageOptions()}</select>`;
  }

  renderPageOptions() {
    const limitPagesTo10 = this._props.pages > 10 ? 10 : this._props.pages;
    const options = [];
    for (let i = 1; i <= limitPagesTo10; ++i) {
      options.push(`<option value="${i}">${i}</option>`);
    }

    return options.join("");
  }
}
