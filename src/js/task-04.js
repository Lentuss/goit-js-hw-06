let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const decrementValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;    
}
const incrementValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue)

decrementBtn.style.backgroundColor = "#ff9999";
incrementBtn.style.backgroundColor = "#ccffcc";
