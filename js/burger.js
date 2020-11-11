// let body = document.querySelector("body");
let htmlTag = document.querySelector("html");
let burger = document.querySelectorAll(".burger");
let billboardBurger = document.querySelector(".billboard__burger");
let billboardMenu = document.querySelector(".billboard__menu");
let burgerFixed = document.querySelector(".burger__fixed");
let billboardMenuFixed = document.querySelector(".billboard__menu-fixed");

billboardBurger.addEventListener("click", () => {
    burger[1].classList.toggle("active");
    billboardMenu.classList.toggle("active");
    htmlTag.classList.toggle("lock");
}) 
burgerFixed.addEventListener("click", () => {
    burger[0].classList.toggle("active");
});

