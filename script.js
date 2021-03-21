// Sorting Socks Javascript Funtimes

// An array of objects with Job names and descriptions
const careers = [
    {title: "Front-End Developer", text: "Front-End Description"}, 
    {title: "Back-End Developer", text: "Back-End Description"}, 
    {title: "Software Engineer", text: "Software Engineer Description"}, {title: "CEO at Facebook", text: "CEO Description"},
    {title: "Product Manager at Google", text: "PM Description"},
    {title: "Data Analyst", text: "Data Analyst Description"},
    {title: "Supreme AI Overlord", text: "AI Overlord Description"}]

   
let button = document.querySelector("button");
let answer = document.querySelector("h1");
let speech = document.getElementsByClassName("sortingSocks");
let speechBubble = document.getElementById("speech");

//When the first click on the page is made(i.e. the button is clicked), the wizard's speech will change
speech[0].addEventListener('click', () => {
    speechBubble.innerHTML = "...unless you click again!";
})

//Random answer given when button is clicked
button.onclick = function(){
 
    let i = Math.floor(0 + Math.random()*(careers.length + 1 - 0))
	answer.innerHTML = `Your destiny is to become a ${careers[i].title}! ${careers[i].text}`;
    
}
// End of Slide Two - Sorting Socks - Javascript


//Progress Bar Javascript
// get the wrapper for onscroll and calculation of the progres bar width
let innerWrapper = document.querySelector('.inner-wrapper');
let outerWrapper = document.querySelector('.outer-wrapper')


        // get all the CSS for the dots
        let dot2 = document.getElementById("dot2")
        let dot3 = document.getElementById("dot3")
        let dot4 = document.getElementById("dot4")
        let dot5 = document.getElementById("dot5")

        // get all the CSS for the text
        let text2 = document.getElementById("progress-text2")
        let text3 = document.getElementById("progress-text3")
        let text4 = document.getElementById("progress-text4")
        let text5 = document.getElementById("progress-text5")

        // get the css for the monster animation
        let monster = document.getElementById("monsteranimation")

        // important for animation of the monster
        let monsterPlace = 1;
        let monsterBack = -1;

//onscroll start two functions
outerWrapper.onscroll = () => { progressBar(); progressStep()};

      //  calculation based on scrolling for the progress bar
      progressBar = () => {

        // position of Users scrolling
        let winScroll = outerWrapper.scrollTop;
        // complete scroll width of inner Wrapper - clientHeight from outer Wrapper = scrolled to 100%
        let width = innerWrapper.scrollWidth - outerWrapper.clientHeight;
        // position of user / width * 100 = percentage where user is
        let scrolled = (winScroll / width) * 100;
        // width of progress bar equals width of percentage where user is
        document.getElementById("progress-bar").style.width = scrolled + "%";
      }


      // this function handles the appearance of the progress dots
      progressStep = () => {

        // turn the scroll percentage from string to number
        let progressDiv = (document.getElementById("progress-bar"))
        let progressString = progressDiv.style.width
        let progress = Number.parseInt(progressString)

        //Monster Animation function declaration forwards
        //Interval is doing everyting in steps, if its fast enough
        // it looks like an animation
        let id = null;
        function monsterani(start, stop, operator) {   
          let pos = start;
          clearInterval(id);
          id = setInterval(frame, 18);
          function frame() {
            if (pos == stop) {
              clearInterval(id);
            } else {
              pos = pos + operator;
              monster.style.left = pos + '%';
            }
          }
        } 

                  // regulates when  things appears in STAGE 1
                
                  if(progress > -1 && progress <= 11) 
                  {
                     //makes text and dots disappear
                      dot2.style.display = "none";
                      text2.style.display = "none";

                      //regulates flying with a switch + calls flying function
                      if(monsterBack == 1){
                        monsterani(22, 1, -1)
                        monsterPlace = 1
                        monsterBack = 0
                        return monsterPlace, monsterBack;
                        }   
                  }
                  // STAGE 2 starts here
                  else if(progress > 11 && progress < 35)
                  {
                      //makes text and dots appear / disappear
                      dot2.style.display = "block";
                      dot3.style.display = "none";

                      text2.style.display = "block";
                      text3.style.display = "none";

                      // monster forward to STAGE 2 + change SWITCHES
                      if(progress == 12,13,14 && monsterPlace == 1){
                        monsterani(1, 22, +1);
                        monsterPlace = 2;
                        monsterBack = 1;
                      }
                      // monster backwards to STAGE 2 + change SWITCHES
                      if(progress == 34,33,32 && monsterBack == 2){
                        monsterani(48, 22, -1)
                        monsterPlace = 2;
                        monsterBack = 1;
                      }
                        return monsterPlace, monsterBack;
                  }
                  // STAGE 3 starts here
                  else if(progress > 35 && progress < 61)
                  {
                      //makes text and dots appear / disappear
                      dot3.style.display = "block";
                      dot4.style.display = "none";

                      text3.style.display = "block";
                      text4.style.display = "none";

                      // monster flies to STAGE 3 + change SWITCHES
                     if(progress == 36,37,38 && monsterPlace == 2){
                      monsterani(22, 48, +1)
                      monsterPlace = 3;
                      monsterBack = 2;
                     }
                     // monster flies backwards to STAGE 3 + change SWITCHES
                     if(progress == 60,59,58 && monsterBack == 1){
                        monsterani(73, 48, -1)
                      monsterPlace = 3;
                      monsterBack = 2;
                      }
                      return monsterPlace, monsterBack;

                  // STAGE 4 starts here
                  }
                  else if (progress > 61 && progress <= 87)
                  {
                      //makes text and dots appear / disappear
                      dot4.style.display = "block";
                      dot5.style.display = "none";

                      text4.style.display = "block";
                      text5.style.display = "none";

                      // monster flies forwards to STAGE 4 + change SWITCHES
                      if(progress == 66,67,68 && monsterPlace == 3 ){
                        monsterani(48, 73, +1)
                        monsterPlace = 4;
                        monsterBack = 1;
                        }
                      //monster flies backwards to STAGE 4 + change SWITCHES
                      if(progress == 85,86,87 && monsterBack == 0){
                        monsterani(97, 73, -1)
                        monsterPlace = 4;
                        monsterBack = 1;
                      }
                        return monsterPlace, monsterBack;
                      
                        // FINAL STAGE starts here
                      }
                      else if (progress > 88)
                      {
                      //makes text and dots appear
                      dot5.style.display = "block";
                      text5.style.display = "block";

                      //monster flies forwards t STAGE 5 + change SWITCHES
                      if(monsterPlace == 4){
                      monsterani(73, 97, +1)
                      monsterPlace = 5
                      monsterBack = 0
                      return monsterPlace, monsterBack;
                      }
              }                 
        }


// End of Progress Bar Javascript      

