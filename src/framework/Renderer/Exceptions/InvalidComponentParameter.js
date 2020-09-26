export default class InvalidComponentParameter extends Error {
  constructor(element) {
    super(`Invalid component, should be string, received ${typeof element}`);
  }
}
