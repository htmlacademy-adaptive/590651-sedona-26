// Form validation
const form = document.querySelector('.feedback-form');
const formButton = document.querySelector('.feedback-form__submit');
let modals = document.querySelectorAll('.modal-container');
let modalError = document.querySelector('.error');
let modalSuccess = document.querySelector('.success');
const requiredInputs = document.querySelectorAll('[required]');

formButton.onclick = function () {
  form.addEventListener('submit', function () {
    modalSuccess.classList.add('modal-container--open');
  });
  requiredInputs.forEach(element => {
    if (!element.validity.valid) {
      modalError.classList.add('modal-container--open');
    }
  });
};

modals.forEach(element => {
  document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {
      element.classList.remove('modal-container--open');
    }
  });
});
let modalCloseButtons = document.querySelectorAll('.modal-container__button');
for (const button of modalCloseButtons) {
  button.onclick = function() {
    modals.forEach(element => {
      element.classList.remove('modal-container--open');
    });
  }
}
