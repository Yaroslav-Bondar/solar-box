window.onscroll = function showHeader() {
    var menuItem= document.querySelectorAll('.billboard__menu-item');
    var header = document.querySelector('.billboard__header');
    var selecItemColor_1 = document.querySelector('.billboard__select_color-1');
    var selecItemColor_2 = document.querySelector('.billboard__select_color-2');
    var selecItemColor_3 = document.querySelector('.billboard__select_color-3');
    // && pageXOffset > 1315
    var w = window.outerWidth;
    var i;
    if (window.pageYOffset > 689.469 && w > 1350) {
        for(i = 0; i < menuItem.length; i++){
            menuItem[i].classList.add('billboard__menu-item-fixed');
        }       
        // menuItem.classList.add('billboard__menu-item-fixed');
        header.classList.add('billboard__header-fixed');
        // $('.billboard__header').toggleClass('billboard__header-fixed');
        selecItemColor_1.classList.add('billboard__select_color-fixed');
        selecItemColor_2.classList.add('billboard__select_color-fixed');
        selecItemColor_3.classList.add('billboard__select_color-fixed');
    } else {
        for(i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('billboard__menu-item-fixed');
        }    
        header.classList.remove('billboard__header-fixed');
        selecItemColor_1.classList.remove('billboard__select_color-fixed');
        selecItemColor_2.classList.remove('billboard__select_color-fixed');
        selecItemColor_3.classList.remove('billboard__select_color-fixed');
    }
}