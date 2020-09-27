export default class InvalidParameterType extends Error {
  constructor() {
    super("Invalid argument type, should be Node");
  }
}
