const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const addName = e =>
    output.textContent = e.currentTarget.value ? `${e.currentTarget.value}` : "Anonymous";

input.addEventListener('input', addName);