const categoriesItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
const categoryTitle = item.querySelector("h2").textContent;
const categoryItemsCount = item.querySelectorAll("ul > li").length;
console.log(`Category: ${categoryTitle}`);
console.log(`Number of items: ${categoryItemsCount}`);
});


const titleAll = document.querySelectorAll('h2');
titleAll.forEach(element => element.classList.add('list-title'));

const parentUl = document.getElementById('categories');
parentUl.classList.add('categories');

const liItems = parentUl.querySelectorAll('.item');
liItems.forEach(item => {
const nextUl = item.querySelector('ul');
if (nextUl) {
nextUl.classList.add('menu-item');
const nextItemsEl = nextUl.querySelectorAll('li');
nextItemsEl.forEach(nextItemEl => {
nextItemEl.classList.add('menu-title-list');
});
}
});





// const linextElementSibling = nextElementSibling.querySelector('li')
// linextElementSibling.classList.add('list-item')



// const liEl = listEl.querySelectorAll("li");
// liEl.forEach(element => element.classList.add('list-item-element'));

// const firstTitleSibling = h2.nextElementSibling;
// console.log(firstTitleSibling);
