import {
  createEl,
  calcTotalPrice,
  calcAmountOfItemsInBasket,
  deleteItemInBasket,
  closeList,
  toggleDisability
} from "./functions.js";
import { main, basketBtn } from "./const.js";
import { slotsData } from "./goods.js";
const basket = createEl("div", {
  className: "basket-wrapper",
});
const basketCloseBtn = createEl("div", {
  className: "close-button",
  textContent: "✖",
});
basket.append(basketCloseBtn);
basketBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  basket.style.right = 0;
  basketCloseBtn.style.right = `${basket.offsetWidth-50}px`
  toggleDisability("ON");
});
basketCloseBtn.addEventListener('click',(event)=>{
  event.stopPropagation();
  closeList();
  toggleDisability('OFF');
})
main.append(basket);
const title = createEl("div", {
  className: "subList-title",
  textContent: "Корзина",
});
const itemsInBasketData = [];
class ItemInBasket {
  constructor(image, price, info, number, id) {
    this.addItem(image, price, info, number, id);
    this.addEvents();
  }
  addItem(image, price, info, number, id) {
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
    this.id = id;
    this.price = createEl("div", {
      className: "basketItem-price",
      innerHTML: `Price: <span>${price}</span>$`,
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
      className: "basketBtn Plus",
    });
    this.btnMinus = createEl("button", {
      className: "basketBtn Minus",
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
    this.btnMinus.addEventListener("click", (event) => {
      if (+this.number.textContent <= 1) {
        deleteItemInBasket(event);
        return;
      }
      this.number.textContent--;
      calcTotalPrice();
    });
  }
}
const basketBtnCounter = createEl("div", {
  className: "basketBtn-counter",
  textContent: `${itemsInBasketData.length}`,
});
basketBtn.append(basketBtnCounter);
export {
  basket,
  ItemInBasket,
  itemsInBasketData,
  title,
  basketBtnCounter,
  slotsData,
  basketCloseBtn
};
