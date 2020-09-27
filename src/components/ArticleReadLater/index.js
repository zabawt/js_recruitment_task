import BaseComponent from "../../framework/BaseComponent";
import eventTypes from "./../../commons/enums/eventTypes";
export default class ArticleReadLater extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `
    <li>
      <h4 class="readLaterItem-title">${this._props.title}</h4>
      <section>
        <a href="${this._props.webUrl}" target="_blank" class="button button-clear">Read</a>
        <button class="button button-clear" ${eventTypes.onClick}>Remove</button>
      </section>
    </li>
    `;
  }
}
