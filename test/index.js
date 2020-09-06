document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu-homepage");
  if (menu) {
    window.onscroll = function() {
      if (window.pageYOffset > 300 && window.innerWidth < 800) {
        menu.classList.add("fixed");
      } else {
        menu.classList.remove("fixed");
      }
    }
  }
});
