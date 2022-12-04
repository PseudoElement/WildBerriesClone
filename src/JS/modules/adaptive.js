import { swiper } from "../modules/Swiper.js";
import img1 from "../../styles/pics/1slide.png";
import img2 from "../../styles/pics/2slide.png";
import img3 from "../../styles/pics/3slide.png";
import img4 from "../../styles/pics/4slide.png";
const imgArray = [img1, img2, img3, img4];
const search = document.querySelector(`.svg.search`);
const inputMobile = document.querySelector(`.header_wrapper2`);
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 770) {
    let i = -1;
    document.querySelectorAll(`.image-bg`).forEach((img) => {
      img.style.objectFit = "fill";
      i++;
      for (i; i < imgArray.length; ) {
        img.setAttribute("src", imgArray[i]);
        return;
      }
    });
    swiper.swiper.style.height = `300px`;
    document.querySelector(`.svg.logo`).style.display = "none";
    document.querySelector(`.header_wrapper input`).style.display = "none";
    search.style.display = "flex";
  }
});
search.addEventListener("click", (event) => {
  event.stopPropagation();
  inputMobile.classList.toggle("header_active");
});
export { search, inputMobile };
