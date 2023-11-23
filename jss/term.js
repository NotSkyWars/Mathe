var term = "";
var terms ="";
var id = 0;


window.onload = function(){
    var pickzone = document.getElementById("BR-Math-PickZone");
    document.getElementById("popup2").style.display ='block';
    document.getElementById("game").style.display = "none";
    generateRandom();

}

const check = async () => {
    console.log("asdad");
}

const read = function(id){
    document.getElementById(id).style.display ='none';
    document.getElementById("game").style.display = "block";
}

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
                term +=term==""? "<p>"+randomRange(2,5)+"</p>" : operator == ""? "<p>"+randomRange(2,5)+"</p>" : "<sup>"+randomRange(2,5) +"</sup>";
              }else{
                if(operator != "^"){
                    /*  Abfragen, ob der neue Operator keine Potenz ist und danach den Operator mit Zahl hinzufügen.*/
                    term +=term==""? "<p>"+randomRange(2,5)+"</p>"  : operator == ""? "<p>"+randomRange(2,5)+"</p>" : "<p>+</p>"+"<p>"+randomRange(2,5)+"</p>" ;
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

   const termOut = document.createElement("div");
  // generateRandomAnswers();
   termOut.innerHTML = (term + "<p>=</p><p>" + Math.floor(Math.random() * Math.floor(Math.random() * 100)) + "</p>").replaceAll("x", "<input class='BR-Math-DropZone'> </div>");
   document.getElementById('termZone').appendChild(termOut);
   console.log(term + " d");
   console.log(terms);
}
/*
const generateRandomAnswers = function(){
    var canbeAnswer =true;
    var random = [Math.floor(Math.random() * Math.floor(Math.random() * 100)),Math.floor(Math.random() * Math.floor(Math.random() * 100)),Math.floor(Math.random() * Math.floor(Math.random() * 100))]
    for(var i = 0 ; i < countInstances(term, "x",true) + 6; i ++){
        const aOutput = document.createElement("div");
        aOutput.id = id;
        console.log("idsa");
        id++;
        aOutput.className = "BR-Math-Variable";
        aOutput.draggable = "true";
        aOutput.setAttribute ("ondragstart","drag(event)");
       aOutput.innerHTML = '<div class="decor-border"><div class="BR-Math-Variable-decor"></div></div><h1 id="drag1">'+Math.floor(Math.random() * Math.floor(Math.random() * 100))+'</h1>';
        document.getElementById('BR-Math-PickZone').appendChild(aOutput);
    }
}
*/

const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function countInstances(string, word) {
    console.log((string.match("/"+word+"/g") || []).length);
    return string.split(word).length+2;
 }