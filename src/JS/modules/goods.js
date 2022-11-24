import { createEl } from "./functions.js";
import { main } from "./const.js";
const goodsWrapper = createEl("div", {
  className: "goodsWrapper",
});
const URL = "https://637ea45a5b1cc8d6f931a9b2.mockapi.io/goods";
let mockApiData = [];
console.log(mockApiData);
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => data.forEach(object => {
    console.log(object.image);
    addSlot(object.image, object.info, object.price)
  }))
  .catch((err) => {
    // console.log(err);
  });
//   console.log(mockApiData);
// let firstObject = Array.from(mockApiData)[0];
// console.log(firstObject);
function addSlot(img, info, price){
    const slot = createEl('div',{
        className: 'slot'
    });
    const priceSlot = createEl('div',{
        className: 'price',
        textContent:price
    })
    const imgSlot = createEl('img', {
        className: 'slot-img',
        src: img
    })
    const infoSlot = createEl('h2', {
        className: 'info',
        textContent: info
    })
    const description = createEl('div',{
        className:'description'
    })
    goodsWrapper.append(slot);
    description.append(priceSlot, infoSlot);
    slot.append(imgSlot, description);
}
main.append(goodsWrapper);
export { goodsWrapper };
