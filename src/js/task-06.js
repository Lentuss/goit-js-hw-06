const input = document.querySelector("#validation-input");

const check = e => {
    input.classList.add('invalid');
    if (e.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.replace('invalid', 'valid')
        }
} 
input.addEventListener('blur', check);