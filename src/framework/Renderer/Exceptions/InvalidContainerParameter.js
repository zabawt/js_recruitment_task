export default class InvalidContainerParameter extends Error {
  constructor(element) {
    super(
      `Invalid container, should be HTMLElement, received ${typeof element}`
    );
  }
}
