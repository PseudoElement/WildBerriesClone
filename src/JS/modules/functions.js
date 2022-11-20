import { menu, closeBtn } from "./HeaderEvents";
import { subListsArray } from "./SubLists";
function createEl(tag = "div", options = {}) {
  const el = document.createElement(tag);
  if (options.src) el.src = options.src;
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  return el;
}
function scrollByX(el, slide) {
  el.scrollTo({
    top: 0,
    left: slide.offsetLeft,
    behavior: "smooth",
  });
}
function closeList() {
  menu.style.left = "-25rem";
  closeBtn.style.left = "-20rem";
  subListsArray.forEach((sublist) => {
    sublist.classList.remove("active");
  });
}
function switchONsublist(index) {
  subListsArray.forEach((sublist) => {
    sublist.classList.remove("active");
  });
  subListsArray[index].classList.add("active");
  closeBtn.style.left = `${
    menu.offsetWidth + subListsArray[index].offsetWidth + 5
  }px`;
}
function toggleDisability(type){
  if(type === 'ON'){
    Array.from(document.body.children).forEach(child=>{
      Array.from(child.children).forEach(subChild=>{
          if(!Array.from(subChild.classList).includes('menu') 
          && !Array.from(subChild.classList).includes(`subList-wrapper`)){
              subChild.classList.add('passive')
          }
      })
    })
  }
  else{
    Array.from(document.body.children).forEach(child=>{
      Array.from(child.children).forEach(subChild=>{
          if(!Array.from(subChild.classList).includes('menu') 
          && !Array.from(subChild.classList).includes(`subList-wrapper`)){
              subChild.classList.remove('passive');
          }
      })
    })
  }
}

export { createEl, scrollByX, closeList, switchONsublist, toggleDisability };
