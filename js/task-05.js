const inputYourName = document.querySelector('input')
const newNameSpan = document.querySelector('#name-output')
function onInputChangeName(event){
console.log(event.currentTarget.value)
newNameSpan.textContent = event.currentTarget.value
}
inputYourName.addEventListener('input', onInputChangeName)
