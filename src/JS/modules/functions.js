function createEl(tag = "div", options = {}) {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  return el;
}
function scrollByX(el){
  el.scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
}
export { createEl, scrollByX };
