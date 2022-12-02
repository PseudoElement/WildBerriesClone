import { SubList, subListsArray } from "./SubLists.js";
import {
  burger,
  header,
  closeBtn,
  menu,
  input,
  liList,
  basketBtn,
} from "./const.js";
import { closeList, switchONsublist, toggleDisability } from "./functions.js";
import { basket } from "./basket.js";
input.addEventListener("click", (event) => {
  event.target.style.opacity = 1;
});
burger.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.left = "0";
  menu.style.transition = "all .3s";
  closeBtn.style.transition = null;
  closeBtn.style.left = `${menu.offsetWidth}px`;
  toggleDisability("ON");
});
closeBtn.addEventListener("click", () => {
  closeList();
  toggleDisability("OFF");
});
let prevScrollValue = window.scrollY;
window.addEventListener("scroll", () => {
  let currentScrollValue = window.scrollY;
  if (currentScrollValue > 200) {
    if (currentScrollValue > prevScrollValue) {
      header.style.transition = "all .3s";
      header.style.top = "-90px";
    } else {
      header.style.top = "0px";
    }
    prevScrollValue = currentScrollValue;
  }
});
window.addEventListener("click", (event) => {
  if (
    !event.target.closest(`.list`) &&
    !event.target.closest(`.menu`) &&
    !event.target.closest(`.subList-wrapper`) &&
    !event.target.closest(`.basket-wrapper`)
  ) {
    toggleDisability("OFF");
    closeList();
  }
  if (event.target != input) {
    input.style.opacity = 0.5;
  }
});
let arrSublistsNames = [
  "forWomen",
  "shoes",
  "forChildren",
  "forMen",
  "house",
  "newYear",
  "beauty",
  "accessories",
  "electro",
  "toys",
  "furniture",
  "forAdult",
  "products",
];
liList.forEach((li) => {
  li.addEventListener("mouseover", (event) => {
    switchONsublist(
      arrSublistsNames.findIndex((item) => item === li.classList[1]),
      event
    );
  });
});

export { burger, menu, closeBtn };
