const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();
  
  if (emailValue === "" || passwordValue === "") {
    alert(`Please fill in all the fields!`);
  } else{
  const formData = {
        email: emailValue,
        password: passwordValue,
      };
  console.log(formData);
  event.currentTarget.reset();
}}

const btn = document.querySelector('button');
btn.classList.add('submit-btn');

const labelEl = document.querySelectorAll('label');
labelEl.forEach(element => element.classList.add('form-label'))

const inputEl = document.querySelectorAll('input');
inputEl.forEach(element => element.classList.add('form-input'))



