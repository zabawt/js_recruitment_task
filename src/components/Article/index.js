import BaseComponent from '../../framework/BaseComponent';

export default class Article extends BaseComponent {
  handleOnClick(event) {
    event.preventDefault();
  }

  render() {
    return `<article class="news">
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
                    <a href="${this._props.link}" class="button">Full article</a>
                    <button class="button button-outline">Read Later</button>
                  </section>
                </article>`;
  }
}
