const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const emailValue = registerForm.elements.email.value.trim();
  const passwordValue = registerForm.elements.password.value.trim();
  
  if (emailValue === "" || passwordValue === "") {
    alert(`Please fill in all the fields!`);
  } 
  const formData = {
        email: emailValue,
        password: passwordValue,
      };
  console.log(formData);
  event.currentTarget.reset();
}

const btn = document.querySelector('button');
btn.classList.add('submit-btn');

const labelEl = document.querySelectorAll('label');
labelEl.forEach(element => element.classList.add('form-label'))

const inputEl = document.querySelectorAll('input');
inputEl.forEach(element => element.classList.add('form-input'))
const inputEmail = document.querySelector('[name="email"]');
inputEmail.placeholder = 'Type area';


