const form=document.querySelector(".feedback-form"),formButton=document.querySelector(".feedback-form__submit");let modals=document.querySelectorAll(".modal-container"),modalError=document.querySelector(".error"),modalSuccess=document.querySelector(".success");const requiredInputs=document.querySelectorAll("[required]");formButton.onclick=function(){form.addEventListener("submit",(function(){modalSuccess.classList.add("modal-container--open")})),requiredInputs.forEach((o=>{o.validity.valid||modalError.classList.add("modal-container--open")}))},modals.forEach((o=>{document.addEventListener("keydown",(function(e){27===e.keyCode&&o.classList.remove("modal-container--open")}))}));let modalCloseButtons=document.querySelectorAll(".modal-container__button");for(const o of modalCloseButtons)o.onclick=function(){modals.forEach((o=>{o.classList.remove("modal-container--open")}))};