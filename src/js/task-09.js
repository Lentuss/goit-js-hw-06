function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
 colorSpan.innerText = (`${getRandomHexColor()}`)
}

changeBtn.addEventListener("click", changeColor)

