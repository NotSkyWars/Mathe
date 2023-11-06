

changeBorder(document.getElementById('question'));
changeBorder(document.getElementById('answer'));

function changeBorder(input){
console.log('asdsad');

input.addEventListener('input', event => {
  if (input.value === '' || input.value == 'Frage') {
    input.style.border = "none"
    input.style.border = '.2vw solid red';
    document.getElementById('arrows').style.fill = 'red';
  } else {
    input.style.border = '.2vw solid green';
    switch(input){
      case document.getElementById('question'):
       if(document.getElementById('answer').style.border == '0.2vw solid green'){
        document.getElementById('arrows').style.fill = 'green';
       }else
       console.log(document.getElementById('answer').style.border);
       break;
       case document.getElementById('answer'):
        if(document.getElementById('question').style.border == '0.2vw solid green'){
          document.getElementById('arrows').style.fill = 'green';
         }else
         console.log(document.getElementById('question').style.border);
         break;
    }
  }
});
}
