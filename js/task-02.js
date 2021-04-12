const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingreds = document.querySelector('#ingredients')
const listIngredients = []
ingredients.forEach(el => {
const list = document.createElement('li')
list.textContent = el

ingreds.appendChild(list)
})


