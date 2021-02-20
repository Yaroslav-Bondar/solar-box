var body = document.querySelector("body");
var billboard = document.querySelector(".billboard");
var billboardHeaderFixed = document.querySelector('.billboard__header-fixed');
let billboardHeader = document.querySelector('#bill__header');
var billboardHeight = billboard.clientHeight;  // высота секции .billboard 
var headerFixedHeight = billboardHeaderFixed.clientHeight; // высота .billboard__header-fixed
var billboardHeaderHeight = billboardHeader.clientHeight;
var scrollUp = billboardHeight - headerFixedHeight;   // значение вертикального скролла страницы при которой вкл./откл. отображение кнопки скролла вверх
var iAmScroll = window.scrollY;
window.addEventListener("scroll", ()=> {   // получаем высоту вертикального скролла страницы
    iAmScroll = window.scrollY;            // в переменную iAmScroll при вертикальном скроллле
});
window.addEventListener("resize", ()=> {   // получаем высоту вертикального скролла страницы
    console.log(iAmScroll);
    iAmScroll = window.scrollY;            // в переменную iAmScroll при изменении ширины/высоты окна
    billboardHeight = billboard.clientHeight;  // высота секции .billboard при изменении ширины/высоты окна
    billboardHeaderHeight = billboardHeader.clientHeight;
    headerFixedHeight = billboardHeaderFixed.clientHeight; // высота .billboard__header-fixed при изменении ширины/высоты окна
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