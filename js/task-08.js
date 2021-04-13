const boxCreateDiv = document.querySelector('#boxes')
const render = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')
const inputScreenAmountDiv = document.querySelector('input')

// const newDiv = (event) => {
//   const number = event.currentTarget.value
//   let divv = document.createElement('div')
//   divv.setAttribute('width', '30')
//   divv.setAttribute('height', '30')

//   const array = []

//   for(let i = 0; i < number; i+=1){
//   array.unshift(divv)
//   }

//   console.log(array)

//   array.forEach(el => boxCreateDiv.appendChild(el))

//   console.log(boxCreateDiv)
//   }
//   inputScreenAmountDiv.addEventListener('input', newDiv)



const rendering = () => {

console.dir(inputScreenAmountDiv)

}
render.addEventListener('click', rendering)