let billboardMenu = document.querySelector('.billboard__menu');
let billboardBurger = document.querySelector('.billboard__burger');
let burgerFixed = document.querySelector('.burger__fixed');
let menuBurger = document.querySelector('.menu-burger');
let menuBurgerFixed = document.querySelector('.menu-burger__fixed')
let billboardMenuBoardFixed = document.querySelector('.billboard__menu-board-fixed');
let widthBurgerActive = 870;
menuBurger.style.setProperty('--var-heightMenuBurger', window.innerHeight - billboardHeaderHeight + 'px');  // расчет высоты меню
menuBurger.style.setProperty('--var-topMenuBurger', (window.innerHeight - (window.innerHeight - billboardHeaderHeight)) + 'px');  // расчет позиции меню
menuBurgerFixed.style.setProperty('--var-heightMenuFixed', window.innerHeight - headerFixedHeight + 'px');  // расчет высоты меню
menuBurgerFixed.style.setProperty('--var-topMenuFixed', (window.innerHeight - (window.innerHeight - headerFixedHeight)) + 'px');  // расчет позиции меню
// действия при определенной ширине
if (window.innerWidth <= widthBurgerActive) {
    addClass([billboardBurger, burgerFixed, billboardMenu, billboardMenuBoardFixed],
             ['burger_show', 'burger_show', 'burger__menu_no-active', 'burger__menu_no-active']);
} else {
    removeClass([billboardBurger, burgerFixed, billboardMenu, billboardMenuBoardFixed], ['burger_show', 'burger_show', 'burger__menu_no-active', 'burger__menu_no-active']);
}
// действия при изменении ширины окна
window.addEventListener('resize', () => {
    menuBurger.style.setProperty('--var-heightMenuBurger', window.innerHeight - billboardHeaderHeight + 'px');   // расчет высоты меню
    menuBurger.style.setProperty('--var-topMenuBurger', (window.innerHeight - (window.innerHeight - billboardHeaderHeight)) + 'px');  // расчет позиции меню
    menuBurgerFixed.style.setProperty('--var-heightMenuFixed', window.innerHeight - headerFixedHeight + 'px');
    menuBurgerFixed.style.setProperty('--var-topMenuFixed', (window.innerHeight - (window.innerHeight - headerFixedHeight)) + 'px');  // расчет позиции меню 
    if (window.innerWidth <= widthBurgerActive) {
        addClass([billboardBurger, burgerFixed, billboardMenu, billboardMenuBoardFixed], ['burger_show', 'burger_show', 'burger__menu_no-active', 'burger__menu_no-active']);
        if (iAmScroll == 0 && billboardBurger.classList.contains('active')) {
            addClass([menuBurger, body], ['menu-burger_active', 'lock']);
        }
        if (burgerFixed.classList.contains('active') && billboardHeaderFixed.classList.contains('active')) {
            addClass([menuBurgerFixed], ['menu-burger__fixed_active']);
        }
    } else {
        removeClass([billboardBurger, burgerFixed, billboardMenu, billboardMenuBoardFixed], ['burger_show', 'burger_show', 'burger__menu_no-active', 'burger__menu_no-active']);
        removeClass([menuBurger, menuBurgerFixed, body], ['menu-burger_active', 'menu-burger__fixed_active', 'lock']);
    }
    if (iAmScroll > billboardHeader.offsetHeight && body.classList.contains('lock') && menuBurger.classList.contains('menu-burger_active') && billboardBurger.classList.contains('active')) {
        removeClass([body, menuBurger], ['lock', 'menu-burger_active']);
    }
    if (iAmScroll >= scrollUp - 5) {                         // управление fixed menu и fixed header. (-5) для "мерцания" при скролле fixed header         
        billboardHeaderFixed.classList.add('active');
        if (burgerFixed.classList.contains('active') && billboardHeaderFixed.classList.contains('active') && window.innerWidth <= widthBurgerActive) {
            addClass([menuBurgerFixed], ['menu-burger__fixed_active']);
        }
    } else {
        billboardHeaderFixed.classList.remove('active');
        if (burgerFixed.classList.contains('active') && billboardHeaderFixed.classList.contains('active') == 0) {
            removeClass([menuBurgerFixed], ['menu-burger__fixed_active']);
        }
    }
});
// действия при вертикальном скролле, появление фиксированного меню
window.onscroll = () => {
    if (iAmScroll >= scrollUp) {
        billboardHeaderFixed.classList.add('active');
        if (burgerFixed.classList.contains('active') && billboardHeaderFixed.classList.contains('active') && window.innerWidth <= widthBurgerActive) {
            addClass([menuBurgerFixed], ['menu-burger__fixed_active']);
        }
    } else {
        billboardHeaderFixed.classList.remove('active');
        if (burgerFixed.classList.contains('active') && billboardHeaderFixed.classList.contains('active') == 0) {
            removeClass([menuBurgerFixed], ['menu-burger__fixed_active']);
        }
    }
    if (iAmScroll == 0 && billboardBurger.classList.contains('active')) {
        addClass([body, menuBurger], ['lock', 'menu-burger_active']);
    }
}
// действия при клике на бургер
billboardBurger.addEventListener('click', () => {
    toggleClass([billboardBurger, menuBurger, body], ['active', 'menu-burger_active', 'lock']);
});
// действия при клике на бургер всплывающего меню
burgerFixed.addEventListener('click', () => {
    toggleClass([burgerFixed, menuBurgerFixed], ['active', 'menu-burger__fixed_active']);
});
menuBurgerFixed.addEventListener('mouseover', () => {
    body.classList.add('lock');
});
menuBurgerFixed.addEventListener('mouseout', () => {
    body.classList.remove('lock');
});
billboardHeaderFixed.addEventListener('mouseover', () => {
    body.classList.add('lock');
});
billboardHeaderFixed.addEventListener('mouseout', () => {
    body.classList.remove('lock');
});
 

