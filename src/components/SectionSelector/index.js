import BaseComponent from "../../framework/BaseComponent";
import eventTypes from "./../../commons/enums/eventTypes";
import sections from "./../../commons/enums/sections";

export default class SectionSelector extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<select ${
      eventTypes.onChange
    }>${this.renderSectionOptions()}</select>`;
  }

  renderSectionOptions() {
    const options = [];
    for (let section in sections) {
      options.push(
        `<option value="${sections[section]}">${sections[section]}</option>`
      );
    }

    return options.join("");
  }
}
