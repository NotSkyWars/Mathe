

changeBorder(document.getElementById('question'));
changeBorder(document.getElementById('answer'));

function changeBorder(input){
console.log('asdsad');

input.addEventListener('input', event => {
  if (input.value === '' || input.value == 'Frage') {
    input.style.border = "none"
    input.style.border = '.2vw solid red';
  } else {
    input.style.border = '.2vw solid green';
  }
});
}
