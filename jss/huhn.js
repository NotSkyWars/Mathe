
var correct = null;
var isReset = false;

window.onload = function() {
    generateBirds();
positionBirds();
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
                    document.getElementById('popup1').style.display ='block';
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
        
        var stop = randomRange(0,3);
        var generate = randomRange(0, stop+3);
        console.log(generate +":" + stop);
        for(var i  = -3; i <stop; i++){
                if(generate-3 == i){generateTerm();}
            const bird = document.createElement("button");
            bird.id = i;
            bird.className = "bird";
            bird.style.zIndex = i;
            bird.style.float = "left";
            bird.style.top = Math.floor(Math.random() * 300) + "px";
            bird.style.marginRight = "-" + Math.floor(Math.random() * 100) + "px" ;
            bird.innerHTML = Math.floor(Math.random() * Math.floor(Math.random() * 100))
            
            bird.addEventListener("click", (event) => {
                if(bird == correct){
                    removeBirds();
                    generateBirds();
                    
                }else{
                    bird.style.color = "red";
                }
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
        var a = Math.floor(Math.random() * 10);
        var b = Math.floor(Math.random() * 10);
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
            bird.style.top = Math.floor(Math.random() * 300) + "px";
            bird.style.marginRight = "-" + Math.floor(Math.random() * 100) + "px" ;
            bird.innerHTML = answer;
            bird.addEventListener("click", (event) => {
                if(bird == correct){
                    removeBirds();
                    generateBirds();
                }
              });
              correct = bird;

            document.getElementsByClassName("game")[0].appendChild(bird);
    }

    const randomRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;