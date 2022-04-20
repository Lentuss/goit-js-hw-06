const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    console.log(`\nCategory: ${category.firstElementChild.innerText}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`)
});