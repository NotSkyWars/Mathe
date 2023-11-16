

const answers = new Map();
answers["0"] = "1";
window.onload = function(){
   this.answers = new Map();
}



function check(){

    console.log("asdasd");
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
    console.log(answers);
    if(answers[frage].equals(antwort)){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        console.log("richtig");
    }else{
        console.log("Falsch");
    }
}