import Subscriber from './../framework/Subscriber';

export default class MainController extends Subscriber {
  constructor(renderer) {
    super();
    this._renderer = renderer;
  }
}
