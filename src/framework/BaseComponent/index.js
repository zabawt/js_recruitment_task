import InvalidArgument from './Exceptions/InvalidArgument.js';
import MissingArgument from './Exceptions/MissingArgument.js';
import componentRenderer from './../componentRenderer';
export default class BaseComponent {
  constructor(props) {
    this._props = props;
    this._renderer = componentRenderer;
    this._html = `<div>${props}</div>`;

    const tmpComponent = this._html.toString();

    if (tmpComponent.match(/undefined/g) || tmpComponent.match(/null/g)) {
      throw new MissingArgument();
    }

    if (typeof props !== 'object') {
      throw new InvalidArgument();
    }
  }

  render() {
    return this._renderer(this._html);
  }
}
