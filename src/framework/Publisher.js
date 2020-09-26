export default class Publisher {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  subscribeObservers(observers) {
    this._observers.concat(observers);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  notify() {
    console.error('NOTIFY OF STATE UPDATE');
    this._observers.forEach((observer) => observer.update(this));
  }
}
