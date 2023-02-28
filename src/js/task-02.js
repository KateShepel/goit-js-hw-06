const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemsElArray = [];

for (const ingredient of ingredients) {
  const itemsEl = document.createElement('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = ingredient
  itemsElArray.push(itemsEl);
}

// console.log(itemsElArray);


const listEl = document.querySelector('#ingredients');
listEl.append(...itemsElArray);

// console.log(listEl)