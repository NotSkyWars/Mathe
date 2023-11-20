

function allowDrop(ev) {
   
      ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.children.length = 1 && ev.target.classList.contains('BR-Math-DropZone')){
    ev.target.appendChild(document.getElementById(data));
    }else if(ev.target.classList.contains('BR-Math-PickZone')){
      ev.target.appendChild(document.getElementById(data));
    }else{
      document.getElementById('popup1').style.display ='block';
    }
  }

  window.addEventListener("load", (event) => {
    console.log("Innitialising Drag and Drop Lib");

  });

  
  
  
  