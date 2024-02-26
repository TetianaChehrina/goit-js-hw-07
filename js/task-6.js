function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
function createBoxes(amount) {
 boxesContainer.innerHTML = "";
 boxsize = 30;
  amount = input.valueAsNumber;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div class=randomBox style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxesContainer.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
