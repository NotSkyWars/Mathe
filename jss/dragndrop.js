

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

  var hide = function(id) {
    document.getElementById('popup1').style.display ='none';
  }



  window.onload = function() {
    var isDropping = null

    var dropzones = document.getElementsByClassName('BR-Math-DropZone');

    Array.from(dropzones).forEach(element => {
      element.addEventListener('touchstart',function(e){
        if(isDropping != null){
          if(element.childElementCount < 1 && isDropping != null){
            element.appendChild(isDropping);
            isDropping = null;
            console.log(isDropping);
          }else if(isDropping && isDropping.parentNode   !== element){
            document.getElementById('popup1').style.display ='block';
            console.log(isDropping + " DROP ZONE");
          }
        }else if(element.hasChildNodes){
          isDropping = element.firstChild;
          console.log(isDropping + " CHILD");
        }
    });
    
    });

    document.getElementById('BR-Math-PickZone').addEventListener('touchstart',function(e){
      if(isDropping != null){
        if( isDropping != null){
          document.getElementById('BR-Math-PickZone').appendChild(isDropping);
        }else{
          document.getElementById('popup1').style.display ='block';
          isDropping = null;
          console.log(isDropping);
        }
      }else if(e != null && element.hasChildNodes){
        isDropping = element.firstChild;
        console.log(isDropping + " CHILD");
      }
  });



    var variables = document.getElementsByName('BR-Math-Variable');
    console.log(variables + " sdasda");
    Array.from(variables).forEach(element => {
      element.addEventListener('touchstart', function(e) {
        if(isDropping == null){
        isDropping = element;
        }else{
          isDropping == null;
        }

        console.log(isDropping);
      });
      console.log(element);
    });
    console.log("Loading");
  }

  
  
  
  