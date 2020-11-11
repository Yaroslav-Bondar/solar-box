var billboardHeaderFixed = document.querySelector(".billboard__header-fixed");
window.onscroll = () => {
    // if (window.pageYOffset > 689.469) {
        if (window.pageYOffset > 689.469) {
        billboardHeaderFixed.classList.add("active");
    } else {
        billboardHeaderFixed.classList.remove("active");
    }

}
    