function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}

refs.btn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.span.textContent = newColor;
}
