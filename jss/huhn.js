
var correct = null;
var isReset = false;
var score = 0;
var times = 0;



window.onload = function(){
    document.getElementById('popup2').style.display ='block';
    document.getElementById("score").innerHTML = "";
}
const read = function(id){
    document.getElementById(id).style.display ='none';
    generateTerm();
    generateBirds();
positionBirds();
document.getElementById("score").innerHTML = "Score: " + score;
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const positionBirds = async () => {
    isReset = false;
    for(let reset = 0; reset < Infinity; reset++){
        if(isReset){reset = Infinity;}
        Array.from(document.getElementsByClassName("bird")).forEach(element => {
            if(element.getBoundingClientRect().right <= (window.innerWidth || document.documentElement.clientWidth)){
                element.style.left = 5*reset + "px"; 
               
            }else{
                if(correct === element){
                    resetGame();
                }
                element.remove();
            }
          });
          await sleep(20); 
       }
       return true;
    }

    var hide = function(id) {
        document.getElementById('popup1').style.display ='none';
        location.reload();
      }
    
const removeBirds = async () => {
    Array.from(document.getElementsByClassName("bird")).forEach(element => {
        element.remove();
    });
    isReset = true;
    await sleep(20); 
    positionBirds();
}

    const generateBirds = async () => {
        var stop = randomRange(3,6);
        var generate = randomRange(0, stop+3);
        console.log(generate +":" + stop);
        for(var i  = 1; i <stop; i++){
                if(generate-3 == i){generateTerm();}
            const bird = document.createElement("button");
            bird.id = i;
            bird.className = "bird";
            bird.style.zIndex = i;
            bird.style.float = "left";
            bird.style.top = Math.floor(Math.random() * 300) + "px";
            bird.style.marginRight = "-" + Math.floor(Math.random() * 100) + "px" ;
            //add random results
            bird.innerHTML = Math.floor(Math.random() * Math.floor(Math.random() * 100) + (times * 10))
            
            bird.addEventListener("click", (event) => {
                console.log("asdasd");

                    resetGame();

              });

            document.getElementsByClassName("game")[0].appendChild(bird);
          
    }
    Array.from(document.getElementsByClassName("bird")).forEach(element => {
        if(element != correct){
            if(element.innerHTML === correct.innerHTML)
            element.remove();
        }
    });
    }

    const generateTerm = async () =>{
        var a = Math.floor(Math.random() * 10 + (times * 10));
        var b = Math.floor(Math.random() * 10 + (times * 10));
        var term = null;
        var answer = null;
        switch(randomRange(0,4)){
            case 0:
                answer = a + b;
        
                term = a + " + " + b + " = ";
                break;
            case 1:
                answer = a - b;
                term = a + " - " + b + " = ";
                break;
            case 2:
                answer = a * b;
                term = a + " *" + b + " = ";
                break;
            case 3:
                answer = Math.floor(a / b * 100)/100;
                term = a + " / " + b + " = ";
                break;
            default:
                answer = a+b;
                term = a + " + " + b + " = ";
                break;

        }
        document.getElementById("term").innerHTML = term;
        const bird = document.createElement("button");
            bird.id = 0;
            bird.className = "bird";
            bird.style.zIndex = 0;
            bird.style.float = "left";
            bird.style.top = Math.floor(Math.random() * 150) + "px";
            bird.style.marginRight = "-" + Math.floor(Math.random() * 100) + "px" ;
            bird.innerHTML = answer;
            bird.addEventListener("click", (event) => {
                if(bird == correct){
                    removeBirds();
                    generateTerm();
                    generateBirds();
                    score++;
                    switch(score){
                        case 80:
                        case 40:
                        case 20:
                        case 10:
                            times++;
                            break;
                    }
                    document.getElementById("score").innerHTML = "Score: " + score;
                }
              });
              correct = bird;

            document.getElementsByClassName("game")[0].appendChild(bird);
    }

    const resetGame = () =>{
        document.getElementById('popup1').style.display ='block';
        removeBirds();

    }

    const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;