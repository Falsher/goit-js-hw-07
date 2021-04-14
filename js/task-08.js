const boxCreateDiv = document.querySelector('#boxes')
const render = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')
const inputScreenAmountDiv = document.querySelector('input')

let divv
let number = 0
const newDiv = (event) => {
 number  = event.currentTarget.value
  }
  let a = 10
const rendering = () => {
  const r = Math.floor(Math.random() * (255))
const g = Math.floor(Math.random() * (255))
const b = Math.floor(Math.random() * (255))
const rgb = `${r}, ${g}, ${b}`
  let items = [];
  for (let i = 0; i < number; i++) {
  let divv = document.createElement('div');
   a += 10
  divv.style.width = a + 'px';
    divv.style.height = a + 'px';
  divv.style.backgroundColor = `rgb(${rgb})`
  items.push(divv);
  }

  boxCreateDiv.append(...items);
  };

  const deleteDiv = () => {
  boxCreateDiv.innerHTML = '';
  inputScreenAmountDiv.value = 0;
  number = 0;
  // обнуляю number так как если его не обнулить в памяти сохраняется полученное от фукции newDiv значение
  };

  render.addEventListener('click', rendering);
  inputScreenAmountDiv.addEventListener('input', newDiv);
  destroy.addEventListener('click', deleteDiv);

