function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBox = () => {
  const amount = input.value;
  let boxList = "";
  let size = 0;
  for (let i = 1; i <= amount; i += 1){
    boxList += `<div class="box" 
    style="background-color: ${getRandomHexColor()}; 
    display:inline-flex; width:${30 + size}px; 
    height:${30 + size}px"></div>`
    size += 10;
  }
  boxes.insertAdjacentHTML("afterbegin", boxList);
}

createBtn.addEventListener("click", createBox)
destroyBtn.addEventListener("click",()=>boxes.innerHTML = "")

createBtn.style.backgroundColor = "#ccffcc";
destroyBtn.style.backgroundColor = "#ff9999";