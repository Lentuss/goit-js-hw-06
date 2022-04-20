const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.setAttribute('value', '16');//чтобы не было скачка размера шрифта в начале взаимодействия с бегунком

const changeSize = e => {
    text.style.fontSize = `${e.currentTarget.value}px`;
console.log()};

input.addEventListener('input',changeSize)