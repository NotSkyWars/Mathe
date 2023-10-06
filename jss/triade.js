window.onload = function(){
    var pickzone = document.getElementById("BR-Math-PickZone");

}

const check = async () => {
    var dropzones = document.getElementsByClassName("BR-Math-DropZone");

    var variable;
    var answer;
    var term;
    for(var i = 0; i < dropzones.length;i++){
        console.log(dropzones[i].childNodes);
        if(dropzones[i].childNodes[1].innerHTML.includes("x=")){
            variable = dropzones[i].childNodes[1].childNodes[2].innerHTML.replace("x=","")
            console.log("variable: " + variable);
        }else if(dropzones[i].childNodes[1].innerHTML.includes("x")){
            term = dropzones[i].childNodes[1].childNodes[2].innerHTML
            console.log("term: " + term);

        }else{
            if(dropzones[i].childNodes[1] != null){
                answer = dropzones[i].childNodes[1].childNodes[2].innerHTML
                console.log("answer: " + answer);
            }
        }

        

    }
    if(eval(term.replace("x", variable).replace("^","**"))== answer){
        for(var i = 0; i < dropzones.length;i++){
        dropzones[i].removeChild(dropzones[i].childNodes[1]);
        }
        console.log("richtig");
    }else{
        console.log(eval(term.replace("x", variable).replace("^","**")));
        console.log(term.replace("x", variable).replace("^"," ** ") + ": ss" , term.replace("x",variable).replace("^"," ** "));
    }

}