import { SubList } from "../JS/modules/SubLists.js";
import {
  createEl,
  calcTotalPrice,
  calcAmountOfItemsInBasket,
  totalPrice,
} from "../JS/modules/functions.js";
import { Swiper } from "../JS/modules/Swiper.js";
import { burger } from "../JS/modules/HeaderEvents.js";
import { goodsWrapper, slotsData } from "../JS/modules/goods.js";
import {
  basket,
  itemsInBasketData,
  ItemInBasket,
  basketBtnCounter,
} from "../JS/modules/basket.js";
import "../JS/modules/adaptive.js";
import "../JS/modules/Watch.js";
import "../JS/modules/scroll-button.js"
window.addEventListener("beforeunload", () => {
  const itemsInBasketINFO = [];
  itemsInBasketData.forEach((item) => {
    itemsInBasketINFO.push({
      image: item.image.src,
      price: item.price.querySelector(`span`).textContent,
      info: item.info.textContent,
      number: item.number.textContent,
      id: item.id,
    });
  });
  localStorage.setItem("itemsInBasketData", JSON.stringify(itemsInBasketINFO));
});
window.addEventListener("DOMContentLoaded", () => {
  const itemsInBasketINFO = JSON.parse(
    localStorage.getItem("itemsInBasketData")
  );
  itemsInBasketINFO.forEach((item) => {
    const newItem = new ItemInBasket(item.image, item.price, item.info, item.number, item.id);
    itemsInBasketData.push(newItem);
  });
  calcTotalPrice(); 
  calcAmountOfItemsInBasket(); 
});
