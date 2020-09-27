import InvalidArgument from "./Exceptions/InvalidArgument.js";
import MissingArgument from "./Exceptions/MissingArgument.js";
import componentRenderer from "./../componentRenderer";
import eventTypes from "./../../commons/enums/eventTypes";

export default class BaseComponent {
  constructor(props) {
    this._props = props;
    this._renderer = componentRenderer;
    this._html = "<div></div>";
    this._eventTypes = eventTypes;

    const tmpComponent = this._html.toString();

    if (tmpComponent.match(/undefined/g) || tmpComponent.match(/null/g)) {
      throw new MissingArgument();
    }

    if (props && typeof props !== "object") {
      throw new InvalidArgument();
    }
  }

  getHandlerElement(eventName, element) {
    return (
      element.querySelector(`[${eventName}]`) ||
      (element.getAttribute(eventName) !== null && element)
    );
  }

  addHandler(eventName, element) {
    const handler = this.getHandlerElement(eventName, element);

    if (this._props[eventName] && handler) {
      handler.removeAttribute(eventName);
      handler.addEventListener(
        eventName.replace("on", "").toLowerCase(),
        this._props[eventName]
      );
    }
  }

  render() {
    const element = this._renderer(this._html);
    for (let event in this._eventTypes) {
      this.addHandler(event, element);
    }
    return element;
  }
}
