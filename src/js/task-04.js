const decreaseBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const increaseBtn = document.querySelector('[data-action="increment"]');

decreaseBtn.addEventListener('click', onButtonDecreaseClick);
increaseBtn.addEventListener('click', onButtonIncreseClick);


function onButtonDecreaseClick() {
    valueEl.textContent -= 1;
}

function onButtonIncreseClick() {
    
    valueEl.textContent = Number(valueEl.textContent) + 1;
}
