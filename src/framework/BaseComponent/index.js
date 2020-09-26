import InvalidArgument from './Exceptions/InvalidArgument.js';
import MissingArgument from './Exceptions/MissingArgument.js';

export default class BaseComponent {
  constructor(props, validate = true) {
    this._props = props;
    if (validate) {
      const tmpComponent = this.render(props);

      if (tmpComponent.match(/undefined/g) || tmpComponent.match(/null/g)) {
        throw new MissingArgument();
      }

      if (typeof props !== 'object') {
        throw new InvalidArgument();
      }
    }
  }

  render() {
    return `<div>${JSON.stringify(this._props)}</div>`;
  }
}
