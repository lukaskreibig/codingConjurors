let i = 0;
let spoken = 0
let buttonswitch = 0
let speed = 15;
let statue1 = '....the statue starts to speak as you approach the old ruins....';
let statue2 = 'BEHOLD! YOU DARE to enter the forgotten magical world of coding? Are YOU worthy to do so? Answer my question, and we\'ll see if you are as clever as you think. Who was the great inventor of the magical coding spell language, also known as JAVASCRIPT, which brought magic upon the Internet? Choose wisely...'

const typeWriter = () => {
  if (i < statue2.length) {
    document.getElementById("riddlebox2").innerHTML += statue2.charAt(i)
    i++;
    setTimeout(typeWriter, speed)
    return spoken = 1

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
        }
        else{null}
  }); 

  document.getElementById("b3").addEventListener("click", function() {
    document.getElementById("riddlebox2").innerHTML = "";
    document.getElementById("riddlebox2").innerHTML = "Gandalf? Are you serious? He's not real! I'm here for thousands of years and have to listen to some Netflix Millenial? Please waste someone elses time or try again... if you dare.";
  }); 

