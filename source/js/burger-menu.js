// Burger menu toggle
const burgerToggle = document.querySelector('.navigation-toggle');
const burgerToggleLines = document.querySelectorAll('.navigation-toggle__line');
const mobileNav = document.querySelector('.navigation__wrapper');

mobileNav.classList.remove('navigation__wrapper--nojs');
burgerToggle.classList.remove('navigation-toggle--nojs');

burgerToggleLines[0].classList.remove('navigation-toggle__line-first--open');
burgerToggleLines[1].classList.remove('navigation-toggle__line-second--open');
burgerToggleLines[2].classList.remove('navigation-toggle__line-third--open');

burgerToggle.addEventListener('click', () => {

  mobileNav.classList.toggle('navigation__wrapper--opened');

  burgerToggleLines[0].classList.toggle('navigation-toggle__line-first--open');
  burgerToggleLines[1].classList.toggle('navigation-toggle__line-second--open');
  burgerToggleLines[2].classList.toggle('navigation-toggle__line-third--open');
});
