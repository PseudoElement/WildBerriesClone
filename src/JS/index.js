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

window.addEventListener("beforeunload", () => {
  const slotsINFO = [];
  slotsData.forEach((slot) => {
    slotsINFO.push(slot.isAddedInBasket);
  });
  const itemsInBasketINFO = [];
  itemsInBasketData.forEach((item) => {
    itemsInBasketINFO.push({
      image: item.image.src,
      price: item.price.textContent,
      info: item.info.textContent,
      number: item.number.textContent,
    });
  });
  localStorage.setItem("slotsData", JSON.stringify(slotsINFO));
  localStorage.setItem("itemsInBasketData", JSON.stringify(itemsInBasketINFO));
});
window.addEventListener("DOMContentLoaded", () => {
  const slotsINFO = JSON.parse(localStorage.getItem("slotsData"));
  const itemsInBasketINFO = JSON.parse(
    localStorage.getItem("itemsInBasketData")
  );
  itemsInBasketINFO.forEach((item) => {
    new ItemInBasket(item.image, item.price, item.info, item.number);
  });
  slotsINFO.forEach((slot) => {
    slotsData[slotsINFO.indexOf(slot)].isAddedInBasket = slot;///<----Здесь массив slotsData ведет себя странно, типо массив, но методы массива и свойства к нему не применяются
    console.log(slotsData[0]);//////////////////////////////////////
  });
  calcTotalPrice();/////////////<----Эти каунтеры не работают при рестарте
  calcAmountOfItemsInBasket();//<----
});
