let counterValue = document.querySelector('#value')
const reduceValue = document.querySelector('#counter button[data-action="decrement"]')
const increaseValue = document.querySelector('#counter button[data-action="increment"]')

// console.log(Number(counterValue.textContent))

const decrement = function (){
  counterValue.textContent --
  // counterValue.textContent -= 1
  console.log(counterValue.textContent)
}
const increment = function (){
  counterValue.textContent ++
  // counterValue.textContent += 1
  console.log(counterValue.textContent)
}

increaseValue.addEventListener('click', increment)
reduceValue.addEventListener('click', decrement)


