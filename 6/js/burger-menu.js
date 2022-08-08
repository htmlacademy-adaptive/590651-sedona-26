// Burger menu toggle
const burgerToggle = document.querySelector('.navigation-toggle');
const burgerToggleLines = document.querySelectorAll('.navigation-toggle__line');
const mobileNav = document.querySelectorAll('.navigation__list');

mobileNav.forEach(element => {
  element.classList.remove('navigation__list--nojs');
});
burgerToggleLines[0].classList.remove('navigation-toggle__line-first--open');
burgerToggleLines[1].classList.remove('navigation-toggle__line-second--open');
burgerToggleLines[2].classList.remove('navigation-toggle__line-third--open');

burgerToggle.addEventListener('click', () => {
  mobileNav.forEach(element => {
    element.classList.toggle('navigation__list--opened');
  });
  burgerToggleLines[0].classList.toggle('navigation-toggle__line-first--open');
  burgerToggleLines[1].classList.toggle('navigation-toggle__line-second--open');
  burgerToggleLines[2].classList.toggle('navigation-toggle__line-third--open');
});
