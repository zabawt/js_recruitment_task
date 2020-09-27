export default class InvalidParameterType extends Error {
  constructor(element) {
    super(`Invalid, should be HTMLElement|Element, received ${typeof element}`);
  }
}
