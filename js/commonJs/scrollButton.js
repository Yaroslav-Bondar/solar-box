let billboardScrollIcon = document.querySelector(".billboard__scroll-icon");
let buttonUp = document.querySelector('.button-up');
function backToTop() { 
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// скролл старнцы в низ на величину указанную в переменной scrollUp
function scrollFunction() {
    document.body.scrollTop = scrollUp + 1; // For Safari
    document.documentElement.scrollTop = scrollUp + 1; // For Chrome, Firefox, IE and Opera
}
// действия при вертикальном скролле окна 
window.addEventListener("scroll", () => {
    switchClass(iAmScroll, buttonUp, "button-up_show", scrollUp);
});
// действия при изменении размеров окна 
window.addEventListener("resize", () => {
    switchClass(iAmScroll, buttonUp, "button-up_show", scrollUp - 1); // (-1) для устранения "мирцания" кнопки
});
// вызов скролла страницы вверх
buttonUp.addEventListener("click", backToTop);
// скролл старнцы в низ на величину указанную в переменной scrollUp
billboardScrollIcon.addEventListener("click", scrollFunction);


  