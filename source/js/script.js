const burgerToggle = document.querySelector('.navigation-toggle');
const mobileNav = document.querySelector('.navigation__list');

burgerToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('.navigation__list--opened');
});
