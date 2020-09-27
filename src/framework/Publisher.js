export default class Publisher {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter(
      (subscriber) => subscriber !== observer
    );
  }

  notify() {
    this._observers.forEach((observer) => observer.update());
  }
}
