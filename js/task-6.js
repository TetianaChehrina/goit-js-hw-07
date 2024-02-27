const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
createBtn.addEventListener('click', () => {
  let amount = input.valueAsNumber;
  createBoxes(amount);
});
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  let boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div class="randomBox" style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxesContainer.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

createBtn.classList.add('create-item');
destroyBtn.classList.add('destroy-item');
input.classList.add('input-item');