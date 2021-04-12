//   const header = document.querySelectorAll('h2')
// const list = document.querySelectorAll('li ul')
// header.forEach((head) => {
// console.log(`Категория: ${head.textContent}`)

//   })
//   list.forEach(lis => console.log(`Количество элементов: ${lis.children.length}`))
// const liste = (add) => {
//   const header1 = document.querySelector('li.item h2')
//   const list = document.querySelectorAll('.li.item ul')

//   return `Категория: ${header1.textContent}`
// }
// console.log(liste(list1))
// // console.log(liste(list2))
// console.log(liste(list3))

// const categories = document.querySelectorAll('#categories li.item')

// console.log(categories[0].children[0])
// console.log(categories[1].children[0])
// console.log(categories[2].children[0])
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
