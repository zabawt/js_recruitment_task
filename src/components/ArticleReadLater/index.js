import BaseComponent from "../../framework/BaseComponent";

export default class ArticleReadLater extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<li>
                <h4 class="readLaterItem-title">${this._props.title}</h4>
                <section>
                  <a href="https://theguardian.com" class="button button-clear">Read</a>
                  <button class="button button-clear">Remove</button>
                </section>
              </li>`;
  }
}
