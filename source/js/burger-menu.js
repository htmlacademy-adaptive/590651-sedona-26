// Burger menu toggle
const burgerToggle = document.querySelector('.navigation-toggle');
const burgerToggleLines = document.querySelectorAll('.navigation-toggle__line');
const mobileNavList = document.querySelector('.navigation__wrapper');

burgerToggleLines[0].classList.remove('navigation-toggle__line-first--open');
burgerToggleLines[1].classList.remove('navigation-toggle__line-second--open');
burgerToggleLines[2].classList.remove('navigation-toggle__line-third--open');

burgerToggle.addEventListener('click', () => {

  mobileNavList.classList.toggle('navigation__wrapper--opened');

  if (mobileNavList.classList.contains('navigation__wrapper--opened')) {
    burgerToggle.setAttribute('aria-label', 'Закрыть меню.');
  } else {
    burgerToggle.setAttribute('aria-label', 'Открыть меню.');
  }

  burgerToggleLines[0].classList.toggle('navigation-toggle__line-first--open');
  burgerToggleLines[1].classList.toggle('navigation-toggle__line-second--open');
  burgerToggleLines[2].classList.toggle('navigation-toggle__line-third--open');
});
