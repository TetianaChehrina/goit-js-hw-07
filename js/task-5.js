function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', function () {

  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
});

