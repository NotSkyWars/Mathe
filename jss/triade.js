
/*
    CHECK - FUNKTION
    In dieser Funktion schaue ich, ob die gegebene Triade richtig ist und erhöhre den Score um einen falls dieser richtig ist.

*/
const currentTerms = [];
const currentValues = [];
const currentCardsAlive = [0];


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    generateNewTerms(3);
    console.log(currentCardsAlive[0]);
  });




const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
function removeFromArray(value) {
 
    for(var i = 0; i < currentCardsAlive.length;i++){
        if(currentCardsAlive[i] != undefined && currentCardsAlive[i] == value.id){
            currentCardsAlive.splice(i,i);
            console.log("SPLICED : " + currentCardsAlive[i]);
        }else if(currentCardsAlive[i] == undefined){
            currentCardsAlive.splice(i,i);
        }
    }

 
}
function check(){
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");

    var variable;
    var answer;
    var term;

    var currentTriade = [];
    for(var i = 0; i < dropzones.length;i++){
        var droppedVariable = dropzones[i].childNodes[1];
        if(droppedVariable.childNodes[0].innerHTML.includes("x=")){
            variable = droppedVariable.childNodes[0].innerHTML.replace("x=","")
           
        }else if(droppedVariable.childNodes[0].innerHTML.includes("x")){
            term = droppedVariable.childNodes[0].innerHTML;
            
        }else{
            if(dropzones[i].childNodes[1] != null){
                answer =droppedVariable.childNodes[0].innerHTML
               
            }
        }

        currentTriade[i] = droppedVariable;

        

    }
    if(eval(term.replaceAll("x", variable).replaceAll("^","**"))== answer){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        removeFromArray(currentTriade[1]);
        removeFromArray(currentTriade[0]);
        removeFromArray(currentTriade[2]);
        console.log("richtig");
        console.log("CURRENT cards alive : " + currentCardsAlive)
        console.log(currentCardsAlive.length);
        if(currentCardsAlive.length == 1 ){
            generateNewTerms(3);
            console.log("generate new term");
        }
    }
}

    /*

    randomGen - FUNKTION
    In dieser Funktion lasse ich zufällig triaden generieren und ziehe mir eine Lösung aus einer variable und einem zufälligem Term.

*/
const getFontSize = (textLength) => {
    const baseSize = 9
    if (textLength >= baseSize) {
      textLength = baseSize - 2
    }
    const fontSize = baseSize - textLength
    return `${fontSize}rem`
  }
var currentCount = 1;
function generateNewTerms(times){

   for(var i = 0; i < times; i++){
    createVariable("term", generateTermRandom(),currentCount);
    currentCount++;

    var value = randomRange(2,5);
    createVariable("value", "x="+value ,currentCount);
    currentCount++;


    currentValues[0] = value;

    var currterm = currentTerms[currentTerms.length-1].replaceAll("x",currentValues[currentValues.length-1]).replace("^","**");
    createVariable("answer", eval(currterm),currentCount);
    currentCount++;
   }
   console.log("CURRENT new cards alive : " + currentCardsAlive)
   if(currentCardsAlive.length >10){
       console.log("CURRENT new cards alive : " + currentCardsAlive)
   }
}

function createVariable(type,value,i){
    const term = document.createElement("div");
    term.id = i;
    term.className = "BR-Math-Variable item-"+type;
    term.name = "BR-Math-Variable";
    term.innerHTML = "<h1 id='drag"+i+"'>"+value+"</h1>";
    term.setAttribute("draggable","true");
    term.setAttribute("ondragstart","drag(event)");
    term.style.fontSize = getFontSize(value);
    document.getElementById("BR-Math-PickZone").appendChild(term);
    currentCardsAlive[i] = term.id;
}

function generateTermRandom(){
    var operator = "";
    var lasOperator = "";
    var canBeX = true;
    var term = "";
    var length = Math.floor(Math.random() * (6 - 2)) + 2;;
      for(var i = 0; i < length; i++){  
          if(randomRange(0,2) < 1 && canBeX){
              term+=term == "" ? "x" : "*x";
              canBeX = false;
          } else{
              canBeX = true;
              if(operator == "^" && lasOperator != null && lasOperator != "^"){
                term +=term==""? randomRange(2,5) : operator == ""? randomRange(2,5): operator +"("+randomRange(2,5) +")";
              }else{
                term +=term==""? randomRange(2,5) : operator == ""? randomRange(2,5): operator +randomRange(2,5);
              }
          }
          lasOperator = operator;
       switch(randomRange(0,4)){
           case 4:
               operator = "/";
               break;
           case 3:
               operator = "*";
               break;
           case 2:
               operator = "-";
               break;
           case 1:
               operator = "+";
               break;
           case 0:
               operator = "^";
               break;
               default:
                   operator = "=";
                   break;
          }
      }
      if(!term.includes("x")){
        term += "+x";
      }
      currentTerms[0] = term;
      return term;
    }
  
