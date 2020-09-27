import Subscriber from "./../framework/Subscriber";

export default class MainController extends Subscriber {
  constructor(renderer, globalStore, apiClient) {
    super();
    this._renderer = renderer;
    this._globalStore = globalStore;
    this._apiClient = apiClient;
  }
}
