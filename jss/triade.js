window.onload = function(){
    var pickzone = document.getElementById("BR-Math-PickZone");

}
/*
    CHECK - FUNKTION
    In dieser Funktion schaue ich, ob die gegebene Triade richtig ist und erhöhre den Score um einen falls dieser richtig ist.

*/

const currentTerms = [];
const currentValues = [];

const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
function check(){
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");

    var variable;
    var answer;
    var term;
    for(var i = 0; i < dropzones.length;i++){
        var droppedVariable = dropzones[i].childNodes[1];
        console.log(dropzones[i].childNodes[1]);
        console.log(dropzones[i].childNodes[1].cloneNode[1]);
        console.log(i);
        if(droppedVariable.childNodes[0].innerHTML.includes("x=")){
            variable = droppedVariable.childNodes[0].innerHTML.replace("x=","")
            console.log("variable: " + variable);
        }else if(droppedVariable.childNodes[0].innerHTML.includes("x")){
            term = droppedVariable.childNodes[0].innerHTML;
            console.log("term: " + term);

        }else{
            if(dropzones[i].childNodes[1] != null){
                answer =droppedVariable.childNodes[0].innerHTML
                console.log("answer: " + answer);
            }
        }

        

    }
    if(eval(term.replaceAll("x", variable).replaceAll("^","**"))== answer){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        console.log("richtig");
        generateNewTerms();
    }else{
        console.log(eval(term.replace("x", variable).replace("^","**")));
        console.log(term.replace("x", variable).replace("^"," ** ") + ": ss" , term.replace("x",variable).replace("^"," ** "));
    }

    /*

    randomGen - FUNKTION
    In dieser Funktion lasse ich zufällig triaden generieren und ziehe mir eine Lösung aus einer variable und einem zufälligem Term.

*/

function generateNewTerms(){
 
    createVariable("term", generateTermRandom(),1);
    var value = randomRange(2,5);
    createVariable("value", "x="+value ,2);
    currentValues[0] = value;
    console.log(currentTerms[currentTerms.length-1]);
    console.log(currentValues[currentValues.length-1]);

    var currterm = currentTerms[currentTerms.length-1].replaceAll("x",currentValues[currentValues.length-1]).replace("^","**");
    console.log(currterm);
    createVariable("answer", eval(currterm),3);
}

function createVariable(type,value,i){
    const term = document.createElement("div");
    term.id = i;
    term.className = "BR-Math-Variable item-"+type;
    term.name = "BR-Math-Variable";
    term.innerHTML = "<h1 id='drag"+i+"'>"+value+"</h1>";
    term.setAttribute("draggable","true");
    term.setAttribute("ondragstart","drag(event)");
    document.getElementById("BR-Math-PickZone").appendChild(term);
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
  
}