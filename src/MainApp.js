export default class MainApp {
  constructor(renderer, store) {
    this._store = store;
    this._controllers = [];
    this._renderer = renderer;
  }
  registerController(Controller, componentContainer) {
    const renderer = this._renderer(componentContainer);

    const currentController = new Controller(renderer, this._store);
    this._store.subscribe(currentController);
    this._controllers.push(currentController);
    return this;
  }
}
