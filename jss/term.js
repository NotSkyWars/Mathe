var term = "";
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
 var operator = "";
 var canBeX = true;
 
   for(var i = 0; i < randomRange(2,6); i++){  
       if(randomRange(0,2) < 1 && canBeX){
           term+="x";
           canBeX = false;
       } else{
           canBeX = true;
           term += operator == ""? "": "<p>"+ operator+"</p>" +"<p>"+randomRange(2,5) + "</p>";
       }
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

   const termOut = document.createElement("div");
   generateRandomAnswers();
   termOut.innerHTML = (term + "<p>=</p>x").replaceAll("x", "<div class='BR-Math-DropZone' ondrop='drop(event)' ondragover='allowDrop(event)'> </div>");
   document.getElementById('termZone').appendChild(termOut);
   console.log(term + " d");
}

const generateRandomAnswers = function(){
    var random = [Math.floor(Math.random() * Math.floor(Math.random() * 100)),Math.floor(Math.random() * Math.floor(Math.random() * 100)),Math.floor(Math.random() * Math.floor(Math.random() * 100))]
    for(var i = 0 ; i < countInstances(term, "x",true); i ++){
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

const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function countInstances(string, word) {
    console.log((string.match("/"+word+"/g") || []).length);
    return string.split(word).length+2;
 }