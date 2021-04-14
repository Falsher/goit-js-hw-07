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

         const list = ingredients.map(function(element){
                       const el = document.createElement('li');
                       el.textContent = element;
                       return el;
                     });
document.body.append(...list);