const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const elList = [];

const addElements = (array) => {
  array.forEach(item => {
    const li = document.createElement("li");
    li.textContent=`${item}`;
    li.classList.add('item');
    elList.push(li)
  })
}

addElements(ingredients)

list.append(...elList);