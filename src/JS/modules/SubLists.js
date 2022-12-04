import { createEl } from "./functions.js";
import menuList from "./MenuList.js";
import {menu,main} from './const.js';
const subListsWrapper = createEl("div", {
  className: "subList-wrapper",
});
main.append(subListsWrapper);
subListsWrapper.style.position = "fixed";
subListsWrapper.style.zIndex = 9;
subListsWrapper.style.borderRadius = "10px";
subListsWrapper.style.top = `${menu.offsetTop}px`;
subListsWrapper.style.left = `${menu.offsetWidth}px`;
subListsWrapper.style.height = `${menu.offsetHeight}px`;
subListsWrapper.style.width = `${menu.offsetWidth}px`;
subListsWrapper.style.backgroundColor = "white";
const subListsArray = [];
export class SubList {
  itemList = [];
  addItem(text) {
    this.item = createEl("div", {
      className: "item",
      textContent: text,
    });
    this.itemList.push(this.item);
  } 
  addDefiniteNumberOfItems(arr) {
    for (let counter = 0; counter < arr.length; counter++) {
      this.addItem(arr[counter]);
    }
  }
}
const arrData = [];
function fillSublists(menuList){
  for(let counter = 0; counter < menuList.length; counter++){
    const newSubList = new SubList();
    newSubList.addDefiniteNumberOfItems(menuList[counter]);
    arrData.push(newSubList);
  }
}
fillSublists(menuList);
export { subListsArray, arrData, subListsWrapper };
