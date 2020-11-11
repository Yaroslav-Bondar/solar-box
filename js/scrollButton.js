let billboardScrollIcon = document.querySelector(".billboard__scroll-icon");
    // When the user clicks on the button, scroll to the top of the document
billboardScrollIcon.addEventListener("click", scrollFunction)
function scrollFunction() {
  document.body.scrollTop = 750; // For Safari
  document.documentElement.scrollTop = 750; // For Chrome, Firefox, IE and Opera
}
  