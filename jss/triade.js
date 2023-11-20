

const currentTerms = [];
const currentCardsAlive = [0];
var currentCount = 1;
var score = 0;
var selectedItem = null;

/* 
Beim Laden des Fensters das Tutorial Popup sichtbar machen und eine Rückmeldung an den Server senden.
*/
  
  window.addEventListener("load", (event) => {
    document.getElementById('popup0').style.display ='block';
    console.log("page is fully loaded");
    var dropzones = document.getElementsByClassName('BR-Math-DropZone');

    Array.from(dropzones).forEach(element => {
      element.addEventListener('touchstart',function(e){
        if(selectedItem != null){
          if(element.childElementCount < 1 && selectedItem != null && element.id != "BR-Math-PickZone"){
            element.appendChild(selectedItem);
            selectedItem = null;
          }else if(selectedItem && selectedItem.parentNode   !== element){
            document.getElementById('popup1').style.display ='block';
          }
        }else if(element.hasChildNodes){
            selectedItem = element.firstChild;
        }
    }); });

    document.getElementById('BR-Math-PickZone').addEventListener('touchstart',function(e){
      if(selectedItem != null){
        if( selectedItem != null){
          document.getElementById('BR-Math-PickZone').appendChild(selectedItem);
        }else{
          document.getElementById('popup1').style.display ='block';
          selectedItem = null;
          console.log(selectedItem);
        }
      }else if(e != null && e.hasChildNodes){
        selectedItem = e.firstChild;
        console.log(selectedItem + " CHILD");
      }});
 });

/* 
hide(id)
=> Funktion um Popups zu schließen und am Anfang das Spiel zu starten.
*/

  var hide = function(id) {
    document.getElementById(id).style.display ='none';
   if(id == 'popup0'){
  generateNewTerms(3);
  console.log(currentCardsAlive[0]);
  document.getElementById("score").innerHTML = "Score: " +this.score; 
   }else if(id == "popup2"){
    location.reload();
   }
  }


/* 
randomRange(min, max)
=> Konstante, welche einen Zufallswert zwischen einem Maxima und einem Minima wiedergibt. 
*/
const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/* 
removeFromArray(value)
=> Funktion um ein Element aus einem Array zu entfernen, weil keine native Funktion dies übernimmt.
*/
function removeFromArray(value) {
 
    for(var i = 0; i < currentCardsAlive.length;i++){
        if(currentCardsAlive[i] != undefined && currentCardsAlive[i] == value.id){
            currentCardsAlive.splice(i,i);
        }else if(currentCardsAlive[i] == undefined){
            currentCardsAlive.splice(i,i);
        }
    }

 
}

/*
    CHECK - FUNKTION
    In dieser Funktion schaue ich, ob die gegebene Triade richtig ist und erhöhre den Score um einen falls dieser richtig ist.

*/
function check(){
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");

    var variable;
    var answer;
    var term;

    var currentTriade = [];
    for(var i = 0; i < dropzones.length;i++){
        var droppedVariable = dropzones[i].childNodes[1];
        if(droppedVariable != undefined){
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
        

    }
    if(term != undefined && variable != undefined && answer != undefined ){
    if(eval(formateTerm(term,variable))== answer){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        /* Die Karten aus der Liste der am lebendigen Karten entfernen (Welche gerade im Spiel sind)*/
        removeFromArray(currentTriade[1]);
        removeFromArray(currentTriade[0]);
        removeFromArray(currentTriade[2]);
        this.score+= 1;
        document.getElementById("score").innerHTML = "Score: " +this.score; 
        if(currentCardsAlive.length == 1 ){
            generateNewTerms(3);
        }
    }else{
        resetGame();
    }
    }else{
        resetGame();
    }
}

function resetGame(){
    document.getElementById('popup2').style.display ='block';
    this.score = 0;
}


/*
formateTerm(term,variable)
 => Funktion für die richtige Formatierung und Ersetzung bestimmter Elemente in einem Term
*/

function formateTerm(term,variable) {
    return term.replaceAll("x", variable).replaceAll("<sup>","**").replaceAll("</sup>","").replaceAll("•","*").replaceAll("<i>","").replaceAll("</i>","");
}

/*
generateNewTerms(times)
 => Funktion für die neue Generierung von neuen Termen.

*/

function generateNewTerms(times){
    /* Terme mal times erstellen */
   for(var i = 0; i < times; i++){

    createVariable("term", generateTermRandom(),currentCount);
    currentCount++;

    var value = randomRange(2,5);
    createVariable("value", "x="+value ,currentCount);
    currentCount++;

    createVariable("answer",eval( formateTerm(currentTerms[currentTerms.length-1].replaceAll("x",value).replace("^","**"),value)),currentCount);
    currentCount++;
   }

   var elements = document.getElementById("BR-Math-PickZone").children;
   for (var i = elements.length; i >= 0; i--) {
    document.getElementById("BR-Math-PickZone").appendChild(elements[Math.random() * i | 0]);
   }
}
/* 
createVariable(type,value,i)
=> Funktion für die richtige Formatierung und Erstellung von "Divs" für die Website.
Hierbei wird ein Element : "BR-Math-Variable" erstellt. Dazu werden ihm die Attribute "draggable", ein Name und die Methode für das Event "ondragstart" gegeben.
*/
function createVariable(type,value,i){
    const term = document.createElement("div");
    term.id = i;
    term.className = "BR-Math-Variable item-"+type;
    term.setAttribute("name","BR-Math-Variable");
    term.innerHTML = "<h1 id='drag"+i+"'>"+value+"</h1>";
    term.setAttribute("draggable","true");
    term.setAttribute("ondragstart","drag(event)");
    term.addEventListener('touchstart', function(e) {
        if(selectedItem == null && term.id != "BR-Math-PickZone"){
            selectedItem = term;
        }else{
            selectedItem == null;
        }

        console.log(term);
        console.log("is touched");
      });
    document.getElementById("BR-Math-PickZone").appendChild(term);
    currentCardsAlive[i] = term.id;
}


/* 
generateTermRandom()
=> Funktion für die Generierung von Zufälligen Termen.
Hierbei werden zufällige Operatoren, Zahlen und Variablen für ein Term erstellt.
*/

function generateTermRandom(){
    /* Der neue Operator */
    var operator = "";
    /* Der letzte Operator */
    var lasOperator = "";
    /* Variable, ob der nächste Wert ein X sein kann oder nicht. */
    var canBeX = true;
    /* Der neu generierte Term */
    var term = "";
    /* Länge des Terms */
    var length = Math.floor(Math.random() * (6 - 2)) + 2;;
      for(var i = 0; i < length; i++){  
          if(randomRange(0,2) < 1 && canBeX){
            /*  Schauen, ob der Term null ist, wenn es zutrifft ist es nur x, falls nicht ist es mal x. */  
            term+=term == "" ? "x" : "•x";
            /*  Der nächste Wert kann nicht X sein. */
            canBeX = false;
          } else{
            /*  Der nächste Wert kann wieder ein X sein. */
              canBeX = true;
              /*    Checken, ob der neue Operator eine Potenz ist und ob der letzte Operator eine Potenz war. */
              if(operator == "^" && lasOperator != null && lasOperator != "^"){
                /*  Wenn term ist gleich null, dann wenn operator ist gleich null dann eine Zufällige Zahl. Falls Operator ist gleich null dann die Zahl als Potenz */
                term +=term==""? randomRange(2,5) : operator == ""? randomRange(2,5): "<sup>"+randomRange(2,5) +"</sup>";
              }else{
                if(operator != "^"){
                    /*  Abfragen, ob der neue Operator keine Potenz ist und danach den Operator mit Zahl hinzufügen.*/
                    term +=term==""? randomRange(2,5) : operator == ""? randomRange(2,5): "+"+randomRange(2,5);
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
        term += "+x";
      }
      /* Den Term als letzten Term global setzen. */
      currentTerms[0] = term;
      return "<i>"+term+"</i>";
    }
  
