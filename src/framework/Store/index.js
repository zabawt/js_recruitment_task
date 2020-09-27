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
    this._state = newState; //this should be deep copied to ensure we won't introduce side effects
    this.notify(this);
  }
}

export default Store;
