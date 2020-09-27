import BaseComponent from "../../framework/BaseComponent";

export default class Article extends BaseComponent {
  constructor(props) {
    super(props);
    this._html = `<li><article class="news">
                  <header>
                    <h3>${this._props.title}</h3>
                  </header>
                  <section class="newsDetails">
                    <ul>
                      <li><strong>Section Name:</strong> ${this._props.section}</li>
                      <li><strong>Publication Date:</strong> ${this._props.date}</li>
                    </ul>
                  </section>
                  <section class="newsActions">
                    <a href="${this._props.link}" class="button" target="_blank">Full article</a>
                    <button class="button button-outline" onClick>Read Later</button>
                  </section>
                </article></li>`;
  }
}
