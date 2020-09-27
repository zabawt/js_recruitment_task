import InvalidParameterType from "./Exceptions/InvalidParameterType.js";

const Renderer = (container) => (component) => {
  if (container instanceof HTMLElement || component instanceof HTMLElement) {
    if (typeof component.forEach === "function") {
      container.innerHTML = "";
      component.forEach((component) => container.appendChild(component));
    } else {
      container.innerHTML = "";
      container.appendChild(component);
    }
  } else {
    throw new InvalidParameterType(container);
  }
};

export default Renderer;
