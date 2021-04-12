const sizeRegulator = document.querySelector('input');
const variableSizeSpanText = document.querySelector('span')

const variableSize = event => {
  console.log(event.currentTarget.value);
  variableSizeSpanText.style.fontSize = `${event.currentTarget.value}.px`
  console.log(variableSizeSpanText)
};


sizeRegulator.addEventListener('change', variableSize);
