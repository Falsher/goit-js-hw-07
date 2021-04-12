const boxCreateDiv = document.querySelector('#boxes')
const render = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')
const inputScreenAmountDiv = document.querySelector('input')

const newDiv = () => {
const div = document.createElement('div')
div.style.backgroundColor = '#' + Math.random().toString(16).substring(4)
div.setAttribute('width', '30')
div.setAttribute('height', '30')

boxCreateDiv.appendChild(div)
console.log(boxCreateDiv)
}

render.addEventListener('click', newDiv)