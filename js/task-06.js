const countString = document.querySelector('input')
function onInputChangeName(event){
  console.log(event.currentTarget.value)
  countString.textContent = event.currentTarget.value
  if(countString.textContent.length > 6){
  
    countString.classList.add('invalid')

  }countString.classList.add('valid')
  }
  countString.addEventListener('input', onInputChangeName)
