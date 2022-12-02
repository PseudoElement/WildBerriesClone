import { createEl, scrollByX } from "./functions.js";
const main = document.querySelector("main");
const imagesArr = [
  `https://images.wbstatic.net/bners1/newbig_elki_02125656.jpg`,
  `https://images.wbstatic.net/bners1/big_moda_1_12_2248548.jpg`,
  `https://images.wbstatic.net/bners1/big_autumn_13_10_22_224566.jpg`,
  `https://images.wbstatic.net/bners1/big_inditexx_14_11_22.jpg`,
];
class Swiper {
  slidesList = [];
  swiper = createEl("div", {
    className: "swiper",
  });
  constructor(parentNode) {
    parentNode.prepend(this.swiper);
  }
  addSlide(options = { image }) {
    this.slide = createEl("div", {
      className: "slide",
    });
    this.image = createEl("img", {
      className: "image-bg",
      src: options.image,
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
      textContent: options.price,
    });
    this.description = createEl("div", {
      className: "description",
      textContent: options.description,
    });
    this.info.append(this.price, this.description);
    this.slide.append(this.arrowPrev, this.arrowNext, this.image, this.info);
    this.swiper.append(this.slide);
    this.slidesList.push({
      slide: this.slide,
      arrowNext: this.arrowNext,
      arrowPrev: this.arrowPrev,
      price: this.price,
      description: this.description,
    });
  }
  page = 0;
  addEvents() {
    this.slidesList.forEach((slide) => {
      slide.arrowNext.addEventListener("click", () => {
        clearInterval(this.idInterval);
        this.autoScroll();
        this.page++;
        if (this.page > this.slidesList.length - 1) this.page = 0;
        scrollByX(this.swiper, this.slidesList[this.page].slide);
      });
      slide.arrowPrev.addEventListener("click", () => {
        clearInterval(this.idInterval);
        this.page--;
        if (this.page < 0) this.page = this.slidesList.length - 1;
        scrollByX(this.swiper, this.slidesList[this.page].slide);
      });
    });
  }
  autoScroll() {
    this.idInterval = setInterval(() => {
      this.page++;
      if (this.page > this.slidesList.length - 1) this.page = 0;
      scrollByX(this.swiper, this.slidesList[this.page].slide);
    }, 3000);
  }
}
const swiper = new Swiper(main);
swiper.addSlide({ image: imagesArr[0] });
swiper.addSlide({ image: imagesArr[1] });
swiper.addSlide({ image: imagesArr[2] });
swiper.addSlide({ image: imagesArr[3] });
swiper.addEvents();
swiper.autoScroll();
window.addEventListener("mouseover", (event) => {
  if (event.target.className === "slide") {
    event.target.style.opacity = 0.8;
  } else {
    document.querySelectorAll(".slide").forEach((slide) => {
      slide.style.opacity = 1;
    });
  }
});
export { Swiper };
