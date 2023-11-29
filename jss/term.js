var term = "";
var terms ="";
var answer = 0;
var id = 0;
var score = 0;


window.onload = function(){
    var pickzone = document.getElementById("BR-Math-PickZone");
    document.getElementById("popup2").style.display ='block';
    document.getElementById("game").style.display = "none";
    generateRandom();

}

const check = async () => {
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");
    var variables = [];

    var currentTriade = [];
    for(var i = 0; i < dropzones.length;i++){
        var droppedVariable = dropzones[i];
        if(droppedVariable != undefined){
        
            variables[i] = droppedVariable.value;
            console.log(droppedVariable.value);
        
        }
    }
    if(variables != undefined){
        var termeval = formatTerm(term);
        for(var i = 0;i < variables.length;i++){
            termeval = termeval.replace("x",variables[i]);
        }
    if(eval(termeval)== this.answer){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].remove;
        }
        
       this.score+= 1;
        document.getElementById("score").innerHTML = "Score: " +this.score; 
        document.getElementById("termZone").innerHTML ="";
            generateRandom();   

    }else{
        resetGame();
    }
}
}

const read = function(id){
    document.getElementById(id).style.display ='none';
    document.getElementById("game").style.display = "block";
}
const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generateRandom = function(){
    /* Der neue Operator */
    var operator = "";
    /* Der letzte Operator */
    var lasOperator = "";
    /* Variable, ob der nächste Wert ein X sein kann oder nicht. */
    var canBeX = true;
    /* Der neu generierte Term */
    var term = "";
    /* Länge des Terms */
    var length = Math.floor(Math.random() * (5 - 2)) + 2;;
      for(var i = 0; i < length; i++){  
          if(randomRange(0,2) < 1 && canBeX){
            /*  Schauen, ob der Term null ist, wenn es zutrifft ist es nur x, falls nicht ist es mal x. */  
            term+=term == "" ? "x" : "<p>•</p>x";
            /*  Der nächste Wert kann nicht X sein. */
            canBeX = false;
          } else{
            /*  Der nächste Wert kann wieder ein X sein. */
              canBeX = true;
              /*    Checken, ob der neue Operator eine Potenz ist und ob der letzte Operator eine Potenz war. */
              if(operator == "^" && lasOperator != null && lasOperator != "^"){
                /*  Wenn term ist gleich null, dann wenn operator ist gleich null dann eine Zufällige Zahl. Falls Operator ist gleich null dann die Zahl als Potenz */
                term +=term==""? "<p>"+randomRange(1,10)+"</p>" : operator == ""? "<p>"+randomRange(1,10)+"</p>" : "<sup>"+2 +"</sup>";
              }else{
                if(operator != "^"){
                    /*  Abfragen, ob der neue Operator keine Potenz ist und danach den Operator mit Zahl hinzufügen.*/
                    term +=term==""? "<p>"+randomRange(1,10)+"</p>"  : operator == ""? "<p>"+randomRange(1,10)+"</p>" : "<p>+</p>"+"<p>"+randomRange(1,10)+"</p>" ;
                }
              }
          }
          lasOperator = operator;
       switch(randomRange(0,4)){
           case 4:
               operator = "/";
               break;
           case 3:
               operator = "•";
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
        term += "<p>+</p>x";
      }
      this.term = term;

   const termOut = document.createElement("div");
   console.log(formatTerm(term.replaceAll("x",randomRange(2,5))));  
   this.answer = eval(formatTerm(term.replaceAll("x",randomRange(2,5))));
   termOut.innerHTML = (term + "<p>=</p><p>" + this.answer + "</p>").replaceAll("x", "<input class='BR-Math-DropZone'> </div>");
   document.getElementById('termZone').appendChild(termOut);
}

function formatTerm(term){
    return term.replaceAll("•","*").replaceAll("<sup>","**").replaceAll("</sup>","").replaceAll("<p>","").replaceAll("</p>","");
}
function countInstances(string, word) {
    console.log((string.match("/"+word+"/g") || []).length);
    return string.split(word).length+2;
 }