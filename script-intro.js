let i = 0;
let buttonswitch = 0
let speed = 15;
let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let wizard = document.getElementById("speech-grid")
let statue1 = '....the statue starts to speak as you approach the old ruins....';
let statue2 = "BEHOLD! WHO DARES enter this forgotten boneyard ? You think yourself worthy? Let’s put you to the test. Answer me correctly to gain entrance to the most secret of lands. Who invented the magical coding spell language JAVASCRIPT, which brought magic upon the Internet? Choose wisely or …you’ll have to choose again…"

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
    document.getElementById("riddlebox2").innerHTML = "WRONG WRONG WRONG! <br> Merlin was a legend. But a legend is just ... a legend. And he did NOT invent the Internet Magic. Merlin is as old as I am, so how could he have invented Internet Magic? Think before you talk - now try again!";
    wizard.innerHTML = "Wow, she seems pretty grumpy! <br> I would be too if I was a statue."

  }); 

  document.getElementById("b2").addEventListener("click", function() {
    
        document.getElementById("riddlebox2").innerHTML = "";
        document.getElementById("riddlebox2").innerHTML = "You SOLVED the riddle! ENTER THE MAGIC CODING KINGDOM by clicking the magic passphrase..." + "<p>";
        wizard.innerHTML = "Cool, you made it! <br> Let's go."
        

        if(buttonswitch !== 1){
            let button = document.createElement("button");
            button.innerHTML = "<a href=intro.html>CODING IS MAGIC</a></span>"
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
    document.getElementById("riddlebox2").innerHTML = "Gandalf? Are you joking? He's not real! <br> I've been here for thousands of years and have to listen to some Netflix Millenial? In what kind of magical dream world are you living? Please waste someone elses time or try again... if you dare.";
    wizard.innerHTML = "Netflix Millenial? Ok Boomer.<br>We'll riddle it out."
  }); 

