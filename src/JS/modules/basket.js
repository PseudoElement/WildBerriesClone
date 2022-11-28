import { createEl} from "./functions.js";
import { main, basketBtn } from "./const.js";
import { slotsData } from "./goods.js";
const basket = createEl("div", {
  className: "basket-wrapper",
});
let totalPriceCounter = 0;
const totalPrice = createEl('div',{
  className: 'basket-totalPrice',
  textContent: `Итого: ${totalPriceCounter}`
})
main.append(basket);
const title = createEl("div", {
  className: "subList-title",
  textContent: "Корзина",
});
basket.prepend(title, totalPrice);
const itemsInBasketData = [];
class ItemInBasket {
  constructor(image, price, info, number) {
    this.info.textContent = info;
    this.number.textContent = number;
    this.image.src = image;
    this.price.innerHTML = `Price: <span>${price}</span>`;
    this.description.append(this.price, this.info);
    this.basketItem.append(this.image, this.number, this.description, this.deleteBtn);
    basket.append(this.basketItem);
    this.addEvents();
  }
  deleteBtn = createEl('button',{
    className: 'basketItem-delete'
  })
  basketItem = createEl("div", {
    className: "basketItem",
  });
  description = createEl("div", {
    className: "description",
  });
  info = createEl("div", {
    className: "basketItem-info",
  });
  price = createEl("div", {
    className: "basketItem-price",
  });
  image = createEl("image", {
    className: "basketItem-image",
  });
  number = createEl("div", {
    className: "number",
  });
  addEvents(){
    this.deleteBtn.addEventListener('click', (event)=>{
      event.stopPropagation();
      event.target.closest(`.basketItem`).remove();
      slotsData.forEach(slot=>{
        if(slot.infoSlot.textContent === this.info.textContent) slot.isAddedInBasket = false;
      })
     const foundIndex = itemsInBasketData.findIndex(item=> item.deleteBtn === this.deleteBtn);
     itemsInBasketData.splice(foundIndex, 1);
    })
  }
}
 
export { basket, ItemInBasket, itemsInBasketData, totalPriceCounter};