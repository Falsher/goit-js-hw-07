
const categories = document.querySelectorAll('#categories li.item');
const list1 = categories[0];
const list2 = categories[1];
const list3 = categories[2];
console.log(`Категория: ${list1.querySelector('h2').textContent}`);
console.log(
  `Количество элементов: ${list1.querySelector('ul').children.length}`,
);
console.log(`Категория: ${list2.querySelector('h2').textContent}`);
console.log(
  `Количество элементов: ${list2.querySelector('ul').children.length}`,
);
console.log(`Категория: ${list3.querySelector('h2').textContent}`);
console.log(
  `Количество элементов: ${list3.querySelector('ul').children.length}`,
);
