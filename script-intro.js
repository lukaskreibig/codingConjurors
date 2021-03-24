let i = 0;
let buttonswitch = 0
let speed = 15;
let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let statue1 = '....the statue starts to speak as you approach the old ruins....';
let statue2 = "BEHOLD! YOU DARE to enter the forgotten magical world of coding? Are YOU worthy to do so? Answer my question, and we\'ll see if you are as clever as you think. Who was the great inventor of the magical coding spell language, also known as JAVASCRIPT, which brought magic upon the Internet? Choose wisely..."

// const statueSpeak = () => {
//     if (i < statue1.length) {
//       document.getElementById("riddlebox").innerHTML += statue1.charAt(i)
//       i++;
//       setTimeout(typeWriter, speed)
      
//     }
//   }

const typeWriter = () => {
  if (i < statue2.length) {
    document.getElementById("riddlebox2").innerHTML += statue2.charAt(i)
    i++;
    setTimeout(typeWriter, speed)

  }
}

typeWriter()

document.getElementById("b1").addEventListener("click", function() {

    document.getElementById("riddlebox2").innerHTML = "";
    document.getElementById("riddlebox2").innerHTML = "WRONG WRONG WRONG!" + "<p>" + "Merlin was a legend. But a legend is just ... a legend. And he did NOT reinvent the Internet Magic. Merlin is as old as I am, so how could he invent Internet Magic? Think before you talk - now try again!" +"</p>";

  }); 

  document.getElementById("b2").addEventListener("click", function() {
    
        document.getElementById("riddlebox2").innerHTML = "";
        document.getElementById("riddlebox2").innerHTML = "You SOLVED the riddle! ENTER THE MAGIC CODING KINGDOM by clicking the magic passphrase..." + "<p>";

        if(buttonswitch !== 1){
            let button = document.createElement("button");
            button.innerHTML = "<a href=index.html>CODING IS MAGIC</a></span>"
            button.classList.add("entry");
            document.getElementById("riddlebox").appendChild(button);
            buttonswitch = 1 
            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";
            
            

dot2.style.display = "block";
dot3.style.display = "none";

        }
        else{null}
  }); 

  document.getElementById("b3").addEventListener("click", function() {
    document.getElementById("riddlebox2").innerHTML = "";
    document.getElementById("riddlebox2").innerHTML = "Gandalf? <br> Are you joking? He's not real! <br> I'm here since thousands of years and have to listen to some Netflix Millenial? In what kind of magical dream world are you living? Please waste someone elses time or try again... if you dare.";
  }); 

