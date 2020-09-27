import BaseComponent from "../../framework/BaseComponent";
import eventTypes from "./../../commons/enums/eventTypes";
export default class Search extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<input type="search" placeholder="News content search" ${eventTypes.onBlur}/>`;
  }
}
