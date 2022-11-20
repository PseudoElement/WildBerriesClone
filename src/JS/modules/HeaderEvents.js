import { SubList, subListsArray } from "./SubLists";
import { closeList, switchONsublist, toggleDisability } from "./functions";
const burger = document.querySelector(`.list`);
const header = document.querySelector(`header`);
const closeBtn = document.getElementsByClassName(`close-button`)[0];
const menu = document.querySelector(`section.menu`);
const input = document.querySelector(`.header_wrapper input`);
const liList = document.querySelectorAll(`section ul li`);
input.addEventListener("click", (event) => {
  event.target.style.opacity = 1;
});
burger.addEventListener("click", (event) => {
  event.stopPropagation();
  menu.style.left = "0";
  menu.style.transition = "all .5s";
  closeBtn.style.left = `${menu.offsetWidth + 5}px`;
  toggleDisability('ON');
});
closeBtn.addEventListener("click", () => {
    closeList();
    toggleDisability('OFF');
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
    !event.target.closest(`.subList-wrapper`)
  ) {
    closeList();
  }
  if (event.target != input) {
    input.style.opacity = 0.5;
  }
  toggleDisability('OFF');
});
liList.forEach((li) => {
  li.addEventListener("mouseover", () => {
    if(Array.from(li.classList).includes('forWomen')){
        switchONsublist(0);
    }
    if(Array.from(li.classList).includes('shoes')){
        switchONsublist(1);
    }
  });
});
export { burger, menu, closeBtn };
