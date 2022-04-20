const form = document.querySelector(".login-form");
const submitBtn = document.querySelector("button");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните, пожалуйста, все поля!");
  }

  console.log(`${form.firstElementChild.innerText}: ${email.value}, ${form.firstElementChild.nextElementSibling.innerText}: ${password.value}`);
  event.currentTarget.reset();
};