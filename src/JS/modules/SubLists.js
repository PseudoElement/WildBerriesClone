import { createEl } from "./functions";
import { menu } from "./HeaderEvents";
const main = document.querySelector(`main`);
const subListsArray = [];
class SubList {
  constructor() {
    this.wrapper = createEl("div", {
      className: "subList-wrapper",
    });
    main.append(this.wrapper);
    this.wrapper.style.position = "fixed";
    this.wrapper.style.zIndex = 11;
    this.wrapper.style.borderRadius = "10px";
    this.wrapper.style.top = `${menu.offsetTop}px`;
    this.wrapper.style.left = `${menu.offsetWidth}px`;
    this.wrapper.style.height = `${menu.offsetHeight}px`;
    this.wrapper.style.width = `300px`;
    this.wrapper.style.backgroundColor = "pink";
    subListsArray.push(this.wrapper);
  }
  addItem(text) {
    this.item = createEl("div", {
      className: "item",
      textContent: text,
    });
    this.wrapper.append(this.item);
  }
  addDefiniteNumberOfItems(number) {
    for (let counter = 0; counter < number; counter++) {
      this.addItem("Item");//<---Как здесь добавлять на каждый шаг разный текст,
    }                      //если не хардкодить с кучей if(counter===...){this.addItem('NewText)};
  }
}
const forWomen = new SubList();
forWomen.addDefiniteNumberOfItems(20);
const shoes = new SubList();
shoes.addDefiniteNumberOfItems(10);
export { SubList, subListsArray };
