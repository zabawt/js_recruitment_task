import InvalidContainerParameter from './Exceptions/InvalidContainerParameter.js';

const Renderer = (container) => (component) => {
  if (container instanceof HTMLElement || component instanceof HTMLElement) {
    component.forEach((component) => container.appendChild(component));
  } else {
    throw new InvalidContainerParameter(container);
  }
};

export default Renderer;
