import { createEl } from "./functions.js";
import { main } from "./const.js";
const URL = "https://637ea45a5b1cc8d6f931a9b2.mockapi.io/goods";
const goodsWrapper = createEl("div", {
  className: "goodsWrapper",
});
const slotsData = [];
fetch(URL)
  .then((response) => response.json())
  .then((data) =>
    data.forEach((slot) => slotsData.push({image: slot.image, info: slot.info, price: slot.price}))
  )
  .catch((err) => {
    console.error(err);
  });
console.log(slotsData);
main.append(goodsWrapper);

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) =>
//     data.forEach((object) => {
//       const newSlot = new Slot(`${object.image}?random=${object.id}`, object.info, object.price);
//     })
//   )
//   .catch((err) => {
//     console.log(err);
//   });
class Slot {
  constructor(image, info, price) {
    this.addSlot(image, info, price);
  }
  addSlot(img, info, price) {
    this.slot = createEl("div", {
      className: "slot",
    });
    this.priceSlot = createEl("div", {
      className: "price",
      textContent: price,
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
    goodsWrapper.append(this.slot);
    this.description.append(this.priceSlot, this.infoSlot);
    this.slot.append(this.imgSlot, this.description);
    slotsData.push({
      price: this.priceSlot.textContent,
      image: this.imgSlot.src,
      info: this.infoSlot.textContent,
    });
  }
}
window.addEventListener('beforeunload', ()=>{
  localStorage.setItem('slotsData', JSON.stringify(slotsData));
});
window.addEventListener('DOMContentLoaded', ()=>{
  const slotsData = JSON.parse(localStorage.getItem('slotsData'));
  slotsData?.forEach(slot=> new Slot(slot.image, slot.info, slot.price));
})

export { goodsWrapper };
