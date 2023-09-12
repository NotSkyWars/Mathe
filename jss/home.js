

window.onload = function() {
    giveCredit();
    window.setTimeout(function(){
      localStorage.setItem('username','password');
        window.location.href = "login.php";

    }, 10000);
  }
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const giveCredit = async () => {
    var list = ['Developed by Christian Ewert','Designed by Hannes Karaschinski', "Programmed for the 'Freies Rahn Gymnasium im Stift Neuzelle'"]
    for (const item of list) {
      document.getElementById("creator").innerHTML =item;
      await sleep(2000)  
      console.log(item); 
    }
  }
