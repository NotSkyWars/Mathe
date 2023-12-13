


var cards = [];
let answers = new Map();
var selectedItem = null;
var score = 0;
var cardsAlive = 0;
var lastCard = 0;
var newBegin = false;
window.onload = function(){
   this.answers = new Map();
}

window.addEventListener("load", (event) => {
    document.getElementById('popup0').style.display ='block';
    var dropzones = document.getElementsByClassName('BR-Math-DropZone');

    Array.from(dropzones).forEach(element => {
      element.addEventListener('touchstart',function(e){
        if(selectedItem != null){
          if(element.childElementCount < 1 && selectedItem != null && element.id != "BR-Math-PickZone"){
            element.appendChild(selectedItem);
            selectedItem = null;
          }else if(selectedItem && selectedItem.parentNode   !== element){
            document.getElementById('popup1').style.display ='block';
             selectedItem = null;
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
        }
      }else if(e != null && e.hasChildNodes){
        selectedItem = e.firstChild;
      }});
      cards.shift();
      cards.pop();
 });



function check(){
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");
    var frage;
    var antwort;
    for(var i = 0; i < dropzones.length;i++){
        console.log(dropzones[i].childNodes[1].getAttribute("type"));
        if(dropzones[i].childNodes[1].getAttribute("type").includes("Frage")){
            frage = dropzones[i].childNodes[1].id;
        }else{
            if(dropzones[i].childNodes[1] != null){
                antwort = dropzones[i].childNodes[1].id;
            }
        }
    }
    if(answers.get(frage) == antwort){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        this.score+= 1;
        document.getElementById("score").innerHTML = "Score: " +this.score; 
        console.log("richtig " + cardsAlive);
        cardsAlive-= 2;
        if(cardsAlive == 0){
            console.log(lastCard);
            lastCard = lastCard+4;
            console.log("NOT A RESERT + " + lastCard);
          addToGame();
        }
    }else{
        document.getElementById("popup2").style.display = "block";
    }
}

/* 
hide(id)
=> Funktion um Popups zu schließen und am Anfang das Spiel zu starten.
*/

var hide = function(id) {
    document.getElementById(id).style.display ='none';
   if(id == 'popup0'){
    addToGame();
  document.getElementById("score").innerHTML = "Score: " +this.score; 

   }else if(id == "popup2"){
    location.reload();
   }
  }

/* 
createVariable(type,value,i)
=> Funktion für die richtige Formatierung und Erstellung von "Divs" für die Website.
Hierbei wird ein Element : "BR-Math-Variable" erstellt. Dazu werden ihm die Attribute "draggable", ein Name und die Methode für das Event "ondragstart" gegeben.
*/
function createVariable(type,value,id){
    const term = document.createElement("div");
    term.id = id;
    term.className = "BR-Math-Variable item-"+type;
    term.setAttribute("name","BR-Math-Variable");
    term.innerHTML = "<textarea id='drag"+id+"' readonly>"+value+"</textarea>";
    term.setAttribute("draggable","true");
    term.setAttribute("type",type);
    term.setAttribute("ondragstart","drag(event)");
    term.addEventListener('touchstart', function(e) {
        if(selectedItem == null && term.id != "BR-Math-PickZone"){
            selectedItem = term;
        }else{
            selectedItem == null;
        }

      });
      cards[id] = term;
      if(type == "Frage"){
        answers.set(id + "",id+1);
      }
    cards.push(term);
}


function addToGame(){
  for(var i = 0; i< 4; i++){
    var card = cards[i+lastCard];
    if (card != undefined){
      document.getElementById("BR-Math-PickZone").appendChild(card);
  this.cardsAlive++;
  }else{
    newBegin = true;
    lastCard = 0;
    i = 4;
  }
  }
  if(newBegin){
    document.getElementById("BR-Math-PickZone").appendChild(cards[0]);
    document.getElementById("BR-Math-PickZone").appendChild(cards[1]);
    document.getElementById("BR-Math-PickZone").appendChild(cards[2]);
    document.getElementById("BR-Math-PickZone").appendChild(cards[3]);
    this.cardsAlive +=2;
  }
  var elements = document.getElementById("BR-Math-PickZone").children;
  for (var i = elements.length; i >= 0; i--) {
   document.getElementById("BR-Math-PickZone").appendChild(elements[Math.random() * i | 0]);
  }
}
