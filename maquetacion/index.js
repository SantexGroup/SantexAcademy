document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.querySelector(".nav__btn").addEventListener("click", cartelVisible);

let lineOne = document.querySelector(".line1__bars-menu");
let lineTwo = document.querySelector(".line2__bars-menu");
let lineThree = document.querySelector(".line3__bars-menu");
let navMenu = document.querySelector(".nav");

function animateBars() {
  lineOne.classList.toggle("activeLine1");
  lineTwo.classList.toggle("activeLine2");
  lineThree.classList.toggle("activeLine3");
  navMenu.classList.toggle("navOpen");
}

function cartelVisible() {
  alert("Echo con mucho amor por exedeveloper.me");
}
