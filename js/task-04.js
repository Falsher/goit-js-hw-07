let counterValue = document.querySelector('#value')
const reduceValue = document.querySelector('#counter button[data-action="decrement"]')
const increaseValue = document.querySelector('#counter button[data-action="increment"]')



const decrement = function (){
  counterValue.textContent --

  console.log(counterValue.textContent)
}
const increment = function (){
  counterValue.textContent ++
 
  console.log(counterValue.textContent)
}

increaseValue.addEventListener('click', increment)
reduceValue.addEventListener('click', decrement)


