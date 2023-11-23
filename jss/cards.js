


var cards = [];
let answers = new Map();
var selectedItem = null;
window.onload = function(){
   this.answers = new Map();
}

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



function check(){
    console.log("Vars");
    console.log(cards);
    console.log(answers);
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");
    var frage;
    var antwort;
    for(var i = 0; i < dropzones.length;i++){
        console.log(dropzones[i].childNodes[1].getAttribute("type"));
        if(dropzones[i].childNodes[1].getAttribute("type").includes("Frage")){
            frage = dropzones[i].childNodes[1].id;
            console.log("Frage: " + frage);
        }else{
            if(dropzones[i].childNodes[1] != null){
                antwort = dropzones[i].childNodes[1].id;
                console.log("answer: " + antwort);
            }
        }
    }
    console.log(frage);
    console.log(antwort);
    console.log(answers);
    console.log(answers.get(frage + ""));
    if(answers.get(frage) == antwort){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        console.log("richtig");
    }else{
        console.log("Falsch");
    }
}

/* 
hide(id)
=> Funktion um Popups zu schließen und am Anfang das Spiel zu starten.
*/

var hide = function(id) {
    document.getElementById(id).style.display ='none';
   if(id == 'popup0'){
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

        console.log(term);
        console.log("is touched");
      });
      cards[id] = term;
      if(type == "Frage"){
        answers.set(id + "",id+1);
      }
    document.getElementById("BR-Math-PickZone").appendChild(term);
}