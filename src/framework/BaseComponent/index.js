import InvalidArgument from "./Exceptions/InvalidArgument.js";
import MissingArgument from "./Exceptions/MissingArgument.js";
import componentRenderer from "./../componentRenderer";
export default class BaseComponent {
  constructor(props) {
    this._props = props;
    this._renderer = componentRenderer;
    this._html = "<div></div>";

    const tmpComponent = this._html.toString();

    if (tmpComponent.match(/undefined/g) || tmpComponent.match(/null/g)) {
      throw new MissingArgument();
    }

    if (typeof props !== "object") {
      throw new InvalidArgument();
    }
  }

  handleOnClick() {}

  handleOnChange() {}

  render() {
    const element = this._renderer(this._html);
    if (this._props["onClick"]) {
      const handler = element.querySelector("[onclick]");
      handler.removeAttribute("onclick");
      handler.addEventListener("click", this._props.onClick);
    }

    return element;
  }
}
