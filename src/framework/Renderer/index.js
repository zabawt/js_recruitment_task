import InvalidContainerParameter from './Exceptions/InvalidContainerParameter.js';
import InvalidComponentParameter from './Exceptions/InvalidComponentParameter.js';

const Renderer = (container) => (component) => {
  if (container instanceof Element || container instanceof HTMLElement) {
    if (typeof component !== 'string')
      throw new InvalidComponentParameter(component);

    const tmp = new DOMParser().parseFromString(component, 'text/html').body
      .firstChild;

    container.replaceWith(tmp);
  } else {
    throw new InvalidContainerParameter(container);
  }
};

export default Renderer;
