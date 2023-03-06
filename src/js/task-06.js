const input = document.querySelector("#validation-input");
let inputValue = '';

input.addEventListener('input', onInputChange);
input.addEventListener('input', onInputBlur);


function onInputChange(event) {
    inputValue = event.currentTarget.value;
}

function onInputBlur() {
    if (inputValue.length === Number(input.getAttribute('data-length'))) {
        input.classList.replace("invalid", "valid")
    } else { 
        input.classList.add('invalid')
    }
}
