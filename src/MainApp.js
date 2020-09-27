export default class MainApp {
  constructor(renderer, store) {
    this._store = store;
    this._controllers = [];
    this._renderer = renderer;
  }
  registerController(Controller, componentContainer, apiClient) {
    const renderer = this._renderer(componentContainer);

    const currentController = new Controller(renderer, this._store, apiClient);
    this._store.subscribe(currentController);
    this._controllers.push(currentController);
    return this;
  }
}
