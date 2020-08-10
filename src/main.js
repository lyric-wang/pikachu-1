import string from "./css.js";
let n = 1;
let time = 100;
let div1 = document.querySelector(".div1");
let style = document.querySelector(".style");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let quick = document.querySelector(".quick");
let slow = document.querySelector(".slow");
let paint = () => {
  if (n < string.length + 1) {
    div1.innerText = string.substring(0, n);
    style.innerHTML = string.substring(0, n);
    div1.scrollTop = div1.scrollHeight;
    n += 1;
  } else {
    window.clearInterval(id);
    return;
  }
};
let id = setInterval(paint, time);
stop.addEventListener("click", () => {
  window.clearInterval(id);
});
play.addEventListener("click", () => {
  window.clearInterval(id);
  id = setInterval(paint, time);
});
quick.addEventListener("click", () => {
  time = 0;
  window.clearInterval(id);
  id = setInterval(paint, time);
});
slow.addEventListener("click", () => {
  time = 300;
  window.clearInterval(id);
  id = setInterval(paint, time);
});
