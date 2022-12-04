import { main } from "./const.js";
import { createEl } from "./functions";
const scrollBtn = createEl("button", {
  className: "scrollBtn",
  innerHTML: "<span>↕</span>",
});
let currentScrollvalue;
scrollBtn.addEventListener("click", () => {
  if (window.scrollY === 0) {
    window.scrollTo({
      top: currentScrollvalue,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    currentScrollvalue = window.scrollY;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
});
main.append(scrollBtn);
