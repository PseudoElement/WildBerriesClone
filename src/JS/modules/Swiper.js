import { createEl, scrollByX } from "./functions";
const root = document.querySelector("#root");
const input = createEl("input", {
  className: "input",
});
root.append(input);
class Swiper {
  swiperElementsList = [];
  swiper = createEl("div", {
    className: "swiper",
  });
  constructor(parentNode) {
    parentNode.append(this.swiper);
  }
  addSlide(price, description) {
    this.slide = createEl("div", {
      className: "slide",
    });
    this.arrowNext = createEl("div", {
      className: "arrow arrowNext",
      textContent: "➤",
    });
    this.arrowPrev = createEl("div", {
      className: "arrow arrowPrev",
      textContent: "➤",
    });
    this.info = createEl("div", {
      className: "info",
    });
    this.price = createEl("div", {
      className: "price",
      textContent: price,
    });
    this.description = createEl("div", {
      className: "description",
      textContent: description,
    });
    this.info.append(this.price, this.description);
    this.slide.append(this.arrowPrev, this.arrowNext, this.info);
    this.swiper.append(this.slide);
    this.swiperElementsList.push({
      slide: this.slide,
      arrowNext: this.arrowNext,
      arrowPrev: this.arrowPrev,
      price: this.price,
      description: this.description,
    });
  }
  page = 0;
  addEvents() {
    this.swiperElementsList.forEach((slide) => {
      slide.arrowNext.addEventListener("click", () => {
        this.page++;
        if (this.page > this.swiperElementsList.length - 1) this.page = 0;
        scrollByX(this.swiperElementsList[this.page].slide);
      });
      slide.arrowPrev.addEventListener("click", () => {
        this.page--;
        if (this.page < 0) this.page = this.swiperElementsList.length - 1;
        scrollByX(this.swiperElementsList[this.page].slide);
      });
    });
  }
}
const swiper = new Swiper(root);
swiper.addSlide("50 BYN", "1st");
swiper.addSlide("100 BYN", "2nd");
swiper.addSlide("150 BYN", "3th");
swiper.addEvents();
export { Swiper };
