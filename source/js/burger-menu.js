// Burger menu toggle
const burgerToggle = document.querySelector('.navigation-toggle');
const mobileNavList = document.querySelector('.navigation__wrapper');
const header = document.querySelector('.page-header');

header.classList.remove('page-header--nojs');

burgerToggle.addEventListener('click', () => {

  mobileNavList.classList.toggle('navigation__wrapper--opened');

  if (mobileNavList.classList.contains('navigation__wrapper--opened')) {
    burgerToggle.setAttribute('aria-label', 'Закрыть меню.');
  } else {
    burgerToggle.setAttribute('aria-label', 'Открыть меню.');
  }

  burgerToggle.classList.toggle('navigation-toggle--opened');
});
