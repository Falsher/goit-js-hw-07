
const categories = document.querySelectorAll('#categories li.item');
categories.forEach(el => {

console.log(`Категория: ${el.querySelector('h2').textContent}`)
console.log(
  `Количество элементов: ${el.querySelector('ul').children.length}`,
   );
})