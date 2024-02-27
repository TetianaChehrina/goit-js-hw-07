const span = document.querySelector('#name-output')
const input = document.querySelector('#name-input').addEventListener("input", handlerInput)
function handlerInput(event) {
  span.textContent = event.target.value.trim() || 'Anonymous'
}

const titleEl = document.querySelector('h1');
titleEl.classList.add('title-input');

