import { createEl, scrollByX } from "./functions";///<---У меня не получилось импортировать сюда картинки, 
const main = document.querySelector("main");      ///можешь сам попробовать
class Swiper {
  slidesList = [];
  swiper = createEl("div", {
    className: "swiper",
  });
  constructor(parentNode) {
    parentNode.prepend(this.swiper);
  }
  addSlide(options = {}) {
    this.slide = createEl("div", {
      className: "slide",
    });
    this.image = createEl("image", {
      className: "image-bg",
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
        this.autoScroll();
        this.page++;
        if (this.page > this.slidesList.length - 1) this.page = 0;
        // console.log( window.scrollX + this.slidesList[this.page].slide.getBoundingClientRect().left);<---посмотри, как изменяется абсолютное значение по Х для третьего слайда, в чем проблема?
        scrollByX(this.swiper, this.slidesList[this.page].slide);// Я час сидел не мог понять почему это так работает, пока не добавил координату через offsetLeft
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
swiper.addSlide();
swiper.addSlide();
swiper.addSlide();
swiper.addEvents();
swiper.autoScroll();
window.addEventListener('mouseover', (event)=>{
  if(event.target.className === 'slide'){
    event.target.style.opacity = 0.8;
  }
  else{
    document.querySelectorAll('.slide').forEach(slide=>{
      slide.style.opacity = 1;
    })
  }
})
export { Swiper };
