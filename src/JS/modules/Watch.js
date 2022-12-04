import { main } from "./const.js";
import { createEl } from "./functions.js";
const time = createEl('div',{
    className: 'time',
    innerHTML:`<span>${new Date().toLocaleTimeString()}</span>`
})
main.prepend(time);
setInterval(()=>{
    time.innerHTML = `<span>${new Date().toLocaleTimeString()}</span>`
},1000)