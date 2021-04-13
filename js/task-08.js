const boxCreateDiv = document.querySelector('#boxes')
const render = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')
const inputScreenAmountDiv = document.querySelector('input')

let divv
let number = 0
const newDiv = (event) => {
 number  = event.currentTarget.value
  }
inputScreenAmountDiv.addEventListener('input', newDiv)

const rendering = () => {
  console.log(number)
  for(let i = 0; i < number; i++){
    divv = document.createElement('div')
    divv.setAttribute('width', '30')
    divv.setAttribute('height', '30')
    console.log(boxCreateDiv.appendChild(divv))
  }
}
render.addEventListener('click', rendering)

const deleteDiv = () => {
  for(let i = 0; i < number; i++){
    boxCreateDiv.removeChild(divv)
   console.log(boxCreateDiv)
  }

}

destroy.addEventListener('click', deleteDiv)