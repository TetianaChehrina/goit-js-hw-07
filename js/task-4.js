const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
  const form = event.currentTarget;
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
  return alert(`Please fill in all the fields!`);
  }
  const formData = {
        Email: emailValue,
        Password: passwordValue
      };
  console.log(formData);
  form.reset();
}
