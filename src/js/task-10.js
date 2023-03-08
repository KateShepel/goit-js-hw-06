function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onClick() {
  createBoxes(refs.input.value);
}

function createBoxes(amount) {
  const newBoxes = [];

  for ( let i = 0; i < amount; i += 1) {
    const boxColor = getRandomHexColor();
    const boxSize = 30 + (10 * i);


    const newBox = document.createElement('div');
    newBox.style.width = String(boxSize) + 'px';
    newBox.style.height = String(boxSize) + 'px';
    newBox.style.backgroundColor = boxColor;

    newBoxes.push(newBox);
  }

  refs.divBoxes.append(...newBoxes);
}


function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";

}