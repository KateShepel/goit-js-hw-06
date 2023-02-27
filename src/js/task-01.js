const List = document.querySelector("#categories");
// console.log(List)
console.log("Number of categories:", List.children.length); 

const itemEl = List.querySelectorAll(".item")
// console.log(itemEl)

for (let i = 0; i < itemEl.length; i += 1) {
    console.log("Category:", itemEl[i].querySelector('h2').textContent)
    console.log("Elements:", itemEl[i].querySelectorAll('li').length)
}