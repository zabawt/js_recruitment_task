const componentRenderer = (stringHTML) => {
  return new DOMParser().parseFromString(stringHTML, "text/html").body
    .firstChild;
};
export default componentRenderer;
