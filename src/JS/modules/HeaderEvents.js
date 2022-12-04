import { arrData, SubList, subListsArray, subListsWrapper } from "./SubLists.js";
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
import { search, inputMobile } from "./adaptive.js";
document.querySelectorAll(`header input`).forEach((input) => {
  input.addEventListener("click", (event) => {
    event.stopPropagation();
    input.style.opacity = 1;
  });
});
burger.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.left = "0";
  closeBtn.style.left = `${menu.offsetWidth - 30}px`;
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
  if (
    event.target != input &&
    event.target != inputMobile &&
    event.target != inputMobile.childNodes[1]
  ) {
    document.querySelectorAll(`header input`).forEach((input) => {
      input.style.opacity = 0.5;
    });
    inputMobile.classList.remove(`header_active`);
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
    if(window.innerWidth< 770){
      Array.from(subListsWrapper.children).forEach(child=>{
        child.style.fontSize = `1.2rem`;
      })
    }
  });
});
export { burger, menu, closeBtn };
