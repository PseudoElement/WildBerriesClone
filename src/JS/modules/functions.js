import { closeBtn, menu } from "./const.js";
import { SubList, arrData, subListsWrapper } from "./SubLists.js";
function createEl(tag = "div", options = {}) {
  const el = document.createElement(tag);
  if (options.src) el.src = options.src;
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  return el;
}
function scrollByX(el, slide) {
  el.scrollTo({
    top: 0,
    left: slide.offsetLeft,
    behavior: "smooth",
  });
}
function closeList() {
  menu.style.left = "-25rem";
  closeBtn.style.left = "-20rem";
  subListsWrapper.classList.remove("active");
}
function switchONsublist(index, event) {
  subListsWrapper.classList.add("active");
  Array.from(subListsWrapper.children).forEach((child) => {
    child.remove();
  });
  const title = createEl('div',{
    className: 'subList-title',
    textContent: event.target.textContent
  })
  subListsWrapper.prepend(title);
  arrData[index].itemList.forEach((item) => {
    subListsWrapper.append(item);
  });
  closeBtn.style.left = `${
    menu.offsetWidth + subListsWrapper.offsetWidth + 5
  }px`;
}
function toggleDisability(type) {
  if (type === "ON") {
    Array.from(document.body.children).forEach((child) => {
      Array.from(child.children).forEach((subChild) => {
        if (
          !Array.from(subChild.classList).includes("menu") &&
          !Array.from(subChild.classList).includes(`subList-wrapper`)
        ) {
          subChild.classList.add("passive");
        }
      });
    });
  } else {
    Array.from(document.body.children).forEach((child) => {
      Array.from(child.children).forEach((subChild) => {
        if (
          !Array.from(subChild.classList).includes("menu") &&
          !Array.from(subChild.classList).includes(`subList-wrapper`)
        ) {
          subChild.classList.remove("passive");
        }
      });
    });
  }
}
export { createEl, scrollByX, closeList, switchONsublist, toggleDisability };
