import Subscriber from "./../framework/Subscriber";

export default class MainController extends Subscriber {
  constructor(renderer, globalStore) {
    super();
    this._renderer = renderer;
    this._globalStore = globalStore;
  }
}
