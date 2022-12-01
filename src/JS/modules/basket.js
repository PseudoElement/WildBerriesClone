import {
  createEl,
  calcTotalPrice,
  calcAmountOfItemsInBasket,
  deleteItemInBasket
} from "./functions.js";
import { main, basketBtn } from "./const.js";
import { slotsData } from "./goods.js";
const basket = createEl("div", {
  className: "basket-wrapper",
});
main.append(basket);
const title = createEl("div", {
  className: "subList-title",
  textContent: "Корзина",
});
const itemsInBasketData = [];
class ItemInBasket {
  constructor(image, price, info, number) {
    this.addItem(image, price, info, number);
    this.addEvents();
  }
  addItem(image, price, info, number) {
    this.deleteBtn = createEl("button", {
      className: "basketItem-delete",
    });
    this.basketItem = createEl("div", {
      className: "basketItem",
    });
    this.description = createEl("div", {
      className: "description",
    });
    this.info = createEl("div", {
      className: "basketItem-info",
      textContent: info,
    });
    this.price = createEl("div", {
      className: "basketItem-price",
      innerHTML: `Price: <span>${price}</span>`,
    });
    this.image = createEl("img", {
      className: "basketItem-image",
    });
    this.image.setAttribute("src", image);
    this.number = createEl("div", {
      className: "number",
      textContent: number,
    });
    this.numberChanger = createEl("div", {
      className: "numberChanger",
    });
    this.btnPlus = createEl("button", {
      className: "basket-btnPlus",
    });
    this.btnMinus = createEl("button", {
      className: "basket-btnMinus",
    });
    this.description.append(this.price, this.info);
    this.numberChanger.append(this.btnPlus, this.number, this.btnMinus);
    this.basketItem.append(
      this.image,
      this.numberChanger,
      this.description,
      this.deleteBtn
    );
    basket.append(this.basketItem);
  }
  addEvents() {
    this.deleteBtn.addEventListener("click", (event) => {
      deleteItemInBasket(event);
    });
    this.btnPlus.addEventListener("click", () => {
      this.number.textContent++;
      calcTotalPrice();
    });
    this.btnMinus.addEventListener('click', (event)=>{
      if(+(this.number.textContent) <= 1){
        deleteItemInBasket(event)
        return;
      }
      this.number.textContent--;
      calcTotalPrice();
    })
  }
}
const basketBtnCounter = createEl("div", {
  className: "basketBtn-counter",
  textContent: `${itemsInBasketData.length}`,
});
basketBtn.append(basketBtnCounter);
export { basket, ItemInBasket, itemsInBasketData, title, basketBtnCounter, slotsData };
