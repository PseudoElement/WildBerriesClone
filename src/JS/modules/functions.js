import { closeBtn, menu } from "./const.js";
import { SubList, arrData, subListsWrapper } from "./SubLists.js";
import { basket, itemsInBasketData, totalPriceCounter } from "./basket.js";
function createEl(tag = "div", options = {}) {
  const el = document.createElement(tag);
  if (options.src) el.src = options.src;
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  if (options.innerHTML) el.innerHTML = options.innerHTML;
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
  basket.style.right = "-25rem";
}
function switchONsublist(index, event) {
  subListsWrapper.classList.add("active");
  Array.from(subListsWrapper.children).forEach((child) => {
    child.remove();
  });
  const title = createEl("div", {
    className: "subList-title",
    textContent: event.target.textContent,
  });
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
          !Array.from(subChild.classList).includes(`subList-wrapper`) &&
          !Array.from(subChild.classList).includes(`basket-wrapper`)
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
function calcTotalPrice() {
  let sum = itemsInBasketData.reduce((result, item) => {
    return (
      result +
      Number(item.number.textContent) *
        parseFloat(item.price.querySelector(`span`).textContent)
    );
  }, 0);
  totalPriceCounter = sum;
}
export {
  createEl,
  scrollByX,
  closeList,
  switchONsublist,
  toggleDisability,
  calcTotalPrice,
  totalPriceCounter,
};
