document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav__hamburger');
  const menu = document.querySelector('.cabecalho__menu');

  hamburger.addEventListener('click', () => {
    if (menu.classList.contains("nav__menu--active")) {
      menu.classList.remove("nav__menu--active");
      menu.style.maxHeight = "0";
    } else {
      menu.classList.add("nav__menu--active");
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  });
});

