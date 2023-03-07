const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

//Зміна шрифту по результату події.
// refs.input.addEventListener('change', onInputChange);

// function onInputChange(event) {
//     const fontSizeForText = event.currentTarget.value + 'px';
//     refs.span.style.fontSize = fontSizeForText;
// }

//Динамічні зміни шрифту.
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const fontSizeForText = event.currentTarget.value + 'px';
    refs.span.style.fontSize = fontSizeForText;
}