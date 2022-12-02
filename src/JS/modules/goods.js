import {
  createEl,
  calcTotalPrice,
  calcAmountOfItemsInBasket,
} from "./functions.js";
import { main } from "./const.js";
import { ItemInBasket, itemsInBasketData } from "./basket.js";
const URL = "https://637ea45a5b1cc8d6f931a9b2.mockapi.io/goods";
const goodsWrapper = createEl("div", {
  className: "goodsWrapper",
});
const slotsData = [];
main.append(goodsWrapper);
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) =>
    data.forEach((object) => {
      const newSlot = new Slot(
        `${object.image}?lock=${object.id}`,
        object.info,
        object.price,
        object.id
      );
    })
  )
  .catch((err) => {
    console.error(err);
  });
class Slot {
  constructor(img, info, price, id) {
    this.addSlot(img, info, price, id);
    this.addEvents();
  }
  addSlot(img, info, price, id) {
    this.slot = createEl("div", {
      className: "slot",
    });
    this.id = id;
    this.priceSlot = createEl("div", {
      className: "price",
      innerHTML: `<span>${price}</span>$`,
    });
    this.imgSlot = createEl("img", {
      className: "slot-img",
      src: img,
    });
    this.infoSlot = createEl("h2", {
      className: "info",
      textContent: info,
    });
    this.description = createEl("div", {
      className: "description",
    });
    this.buttonsWrapper = createEl("div", {
      className: "buttonsWrapper",
    });
    this.row1 = createEl("div", {
      className: "row1",
    });
    this.row2 = createEl("div", {
      className: "row2",
    });
    this.btnPlus = createEl("button", {
      className: "btn btnPlus",
    });
    this.btnMinus = createEl("button", {
      className: "btn btnMinus",
    });
    this.counter = createEl("div", {
      className: "slot-counter",
      textContent: "0",
    });
    this.addInBasket = createEl("button", {
      className: "addInBasketBtn",
      textContent: "В корзину",
    });
    goodsWrapper.append(this.slot);
    this.row1.append(this.btnPlus, this.counter, this.btnMinus);
    this.row2.append(this.addInBasket);
    this.buttonsWrapper.append(this.row1, this.row2);
    this.description.append(this.priceSlot, this.infoSlot);
    this.slot.append(this.imgSlot, this.description, this.buttonsWrapper);
    slotsData.push(this);
  }
  addEvents() {
    this.btnPlus.addEventListener("click", () => {
      this.counter.textContent++;
    });
    this.btnMinus.addEventListener("click", () => {
      if (parseInt(this.counter.textContent) <= 0) return;
      this.counter.textContent--;
    });
    this.addInBasket.addEventListener("click", (event) => {
      event.preventDefault();
      if (parseInt(this.counter.textContent) <= 0) return;
      for (let item of itemsInBasketData) {
        if (item.id === this.id) {
          item.number.textContent =
            +item.number.textContent + +this.counter.textContent;
          this.counter.textContent = 0;
          calcTotalPrice();
          calcAmountOfItemsInBasket();
          return;
        }
      }
      const newItemInBasket = new ItemInBasket(
        this.imgSlot.src,
        this.priceSlot.querySelector(`span`).textContent,
        this.infoSlot.textContent,
        this.counter.textContent,
        this.id
      );
      itemsInBasketData.push(newItemInBasket);
      this.counter.textContent = 0;
      calcAmountOfItemsInBasket();
      calcTotalPrice();
    });
  }
}

export { goodsWrapper, slotsData };
