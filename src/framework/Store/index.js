import Publisher from "../../framework/Publisher";

class Store extends Publisher {
  constructor(initialState = {}, name = "Store") {
    super();
    this._name = name;
    this._state = initialState;
  }

  getState() {
    return this._state;
  }

  setState(newState) {
    this._state = newState;
    this.notify(this);
  }
}

export default Store;
