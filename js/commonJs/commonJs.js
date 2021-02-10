var body = document.querySelector("body");
var billboard = document.querySelector(".billboard");
var billboardHeaderFixed = document.querySelector('.billboard__header-fixed');
var billboardHeight = billboard.clientHeight;  // высота секции .billboard 
var headerFixedHeight = billboardHeaderFixed.clientHeight; // высота .billboard__header-fixed, так как высота этого хедера по неизвестным на тот момент причинам при
// загрузке страницы в скриптах была неверной и не соответствовала высоте в консоли браузера (при ресайзе окна все соответсвовало) было принято решение использовать фиксированную высоту в css
let menuBurgerFixed = document.querySelector('.menu-burger__fixed')
var scrollUp = billboardHeight - headerFixedHeight;   // значение вертикального скролла страницы при которой вкл./откл. отображение кнопки скролла вверх
var iAmScroll = window.scrollY;
// body.addEventListener("load", () => {
//     headerFixedHeight = billboardHeaderFixed.clientHeight; // высота .billboard__header-fixed 
//     console.log("window loaded");   
// });
console.log("in coomon.js", headerFixedHeight);
menuBurgerFixed.style.setProperty('--var-heightMenuFixed', window.innerHeight - billboardHeaderFixed.clientHeight + 'px');  // расчет высоты меню
menuBurgerFixed.style.setProperty('--var-topMenuFixed', (window.innerHeight - (window.innerHeight - headerFixedHeight)) + 'px');  // расчет позиции меню
window.onload = function() {
    headerFixedHeight = myFunck();
};
function myFunck () {
    console.log("window loaded");
    return headerFixedHeight = billboardHeaderFixed.clientHeight;
};

// console.log(window.getComputedStyle(billboardHeaderFixed, null).height);            
window.addEventListener("scroll", ()=> {   // получаем высоту вертикального скролла страницы
    iAmScroll = window.scrollY;            // в переменную iAmScroll при вертикальном скроллле
});
window.addEventListener("resize", ()=> {   // получаем высоту вертикального скролла страницы
    iAmScroll = window.scrollY;            // в переменную iAmScroll при изменении ширины/высоты окна
    billboardHeight = billboard.clientHeight;  // высота секции .billboard при изменении ширины/высоты окна
    headerFixedHeight = billboardHeaderFixed.clientHeight; // высота .billboard__header-fixed при изменении ширины/высоты окна
    console.log("in coomon.js resize", headerFixedHeight);
    scrollUp = billboardHeight - headerFixedHeight;
});
function removeClass (obj = [], className = []) {     // удаление (remove) классов сss
    obj.forEach ((item, index) => {                   // удаляет классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.remove(className[index]);
        }
    });
}
function addClass (obj = [], className = []) {     // добавление (add) сss
    obj.forEach ((item, index) => {                   // добавляет классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.add(className[index]);
        }
    });
}
function toggleClass (obj = [], className = []) {     // переключения (toogle) сss
    obj.forEach ((item, index) => {                   // переключает классы CSS для обьектов DOM в соответствии с порядком задания их в    
        if (className[index] != undefined) {          // аргументах функции
            item.classList.toggle(className[index]);
        }
    });
}
function switchClass (traceVal, obj, className, switchVal) {  // переключение класов в зависимости от величины switchVal
    if (Math.round(traceVal) >= switchVal) {
        obj.classList.add(className);
    } else {
        obj.classList.remove(className);
    }
}