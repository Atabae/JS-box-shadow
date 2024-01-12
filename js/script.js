const elBox = document.querySelector('.box');
const elTitle = document.querySelector('.title');
const elInput = document.querySelector('.input-1');
const elInput1 = document.querySelector('.input-2');
const elTitle2 = document.querySelector('.title-2');
const elInput3 = document.querySelector('.input-3');
const elTitle3 = document.querySelector('.title-3');
const elTitle4 = document.querySelector('.title-4');
const elInput4 = document.querySelector('.input-4')

elInput.addEventListener('input', function () {
    elBox.style.boxShadow = elInput.value + 'px' +  ' 1px ' + ' 1px ' + ' red '
    elTitle.textContent = elInput.value + 'px'
})

elInput1.addEventListener('input', function() {
    elBox.style.boxShadow = elInput.value+ 'px ' + elInput1.value + 'px'  + ' 1px ' + ' red '
    elTitle2.textContent = elInput1.value + 'px'
})

elInput3.addEventListener('input', function() {
    elBox.style.boxShadow = elInput.value+ 'px ' + elInput1.value + 'px '  + elInput3.value + 'px ' + ' red '
    elTitle3.textContent = elInput3.value + 'px'
})
elInput4.addEventListener('input', function() {
    elBox.style.boxShadow = elInput.value+ 'px ' + elInput1.value + 'px '  + elInput3.value + 'px ' + elInput4.value + 'px ' + 'red'
    elTitle4.textContent = elInput4.value + 'px'
})