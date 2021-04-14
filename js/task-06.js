const countString = document.querySelector('input')
const lengthString = countString.dataset.length
function onInputChangeName(event){
  console.log(event.currentTarget.value)
  countString.textContent = event.currentTarget.value
  if(countString.textContent.length != lengthString){

    countString.classList.add('invalid')
  }else{
    countString.classList.remove('invalid')
    countString.classList.add('valid')
  }



  }
  countString.addEventListener('input', onInputChangeName)
