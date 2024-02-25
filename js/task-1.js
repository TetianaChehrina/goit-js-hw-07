// let quantityLength = document.querySelector('ul').children.length;
// let quantityLength = document.getElementById('categories').childNodes.length;


const categoriesItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
const categoryTitle = item.querySelector("h2").textContent;
const categoryItemsCount = item.querySelectorAll("ul > li").length;
console.log(`Category: ${categoryTitle}`);
console.log(`Number of items: ${categoryItemsCount}`);
});