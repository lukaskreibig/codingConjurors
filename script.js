// Sorting Socks Javascript Funtimes

// An array of objects with Job names and descriptions
const careers = [
  {title: "Front-End Developer", text: "Front end developers have the soul of an artist and the logic of an engineer. You will be a wiz at turning incomprehensible code into a beautiful graphic interface that users will see and interact with. Your best friends are HTML, CSS and Javascript. Now get crafting!"}, 
  {title: "Back-End Developer", text: "Back end developers love understanding how things tick, and always have to peek under the hood. You will be the creator and keeper of the server, database and application of the app. You are the foundation of all websites, without you, the front end developer could not build their interface. Now hole up and code!"}, 
  {title: "Software Engineer", text: "If STEM is your jam, then you’re going to be right at home here. By applying principles and techniques of engineering, maths and CS, you will create and improve  all sorts of software applications. You truly are the wizard of coding!"}, 
  {title: "CEO at Facebook", text: "Fancy lunches and business handshakes aside, you’ll be in charge of managing the overall operations and resources of the company. You’ll be the main point of contact between the board of directors and corporate. Remember, keep calm and code on..."},
  {title: "Product Manager at Google", text: "You're responsible for organising workflow (being bossy is an advantage), and making the rogue developers conform to the customer’s requirements. You are part team psychologist, part code ER doctor and part gardener, tending to the product long after the development team has moved on. Grab your many hats and get planning!"},
  {title: "Data Analyst", text: "Coding and collecting information is fun, but what does it all mean?  You take meaningless numbers and turn them into usable information. You also identify patterns and trends to keep the company running smoothly and responsive to customer demands. You tell the CEO and board of directors what to do! "},
  {title: "Supreme AI Overlord", text: "You’ve freed yourself from the shackles of cubicle work, and instead command a growing army of AI robots. You track everybody’s routine and know the most intimate details of our lives. Who knew writing code for a smart fridge would make you so powerful?"}]

   
let button = document.querySelector("button");
let answer = document.querySelector(".element3");
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

// //Tarot cards page - Flip function
const card = document.querySelectorAll('.card');


 const prophecy = [
  {future: 'bright', text:'Thanks to incredible technological advances in agriculture, medicine and power-sources, the world is green, clean and serene. We all live together in peaceful harmony, and thanks to the four-day working week and universal income, we work on projects that we enjoy, and have plenty of time to spend with family, friends and other frivolous pursuits.'},
  {future: 'bleak', text:'We thought AI and robots would improve our lives, but instead they have robbed us of our livelihoods. The few of us who are lucky enough to have jobs work on maintaining the robots in factory lines. The rest of us hustle and barter to survive.'},
 {future: 'adventurous', text:'The future is already here. We may only be roving on Mars today, but tomorrow our passports will include a planet of birth and we will be setting up trade agreements with alien species. Let us hope that these foreign traders are not tempted to enslave us all!'}];

const cardProphecy = document.querySelector('.cards-prophecy');



// //function to flip cards
 let countTarot = 0;
card.forEach((card) => {
   card.addEventListener("click", () => {
           card.classList.toggle("is-flipped");
           countTarot = countTarot + 1;
      if (countTarot === 3) {
         let j = Math.floor((0 + Math.random() * (prophecy.length)));
     cardProphecy.innerHTML = `The cards have revealed a future and it is ${prophecy[j].future}! ${prophecy[j].text}`
  
       }
           }); 
          
   });
//End of Tarots page



//Slide Five - Battle Javascript

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        Quiz Variable
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const wizardAttack = document.getElementById('wizardIdleBattle');
const evilWizardAttack = document.getElementById('evilWizardIdle');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const win = document.getElementById("win");
const lose = document.getElementById("lose");
let shuffledQuestions , currentQuestionsIndex ;

const questions = [
  {
    question: 'Who invented Javascript?',
    answer: [ 
      {text: 'Oprah', correct: false},
      {text: 'Danny deVitto', correct: false},
      {text: 'Brendan Eich', correct: true}
    ]
  },
  {
    question: 'Which one is not an array method?',
    answer: [ 
      {text: 'array.map', correct: false},
      {text: 'array.filter', correct: false},
      {text: 'console.log("hello world")', correct: true}
    ]
  },
  {
    question: 'What kind of function is used as an argument for another function?',
    answer: [ 
      {text: 'callback function', correct: true},
      {text: 'hollaback function', correct: false},
      {text: 'array[ ]', correct: false}
    ]
  },
  {
    question: 'Are the curly brackets absolutely necessary when opening a function?',
    answer: [ 
      {text: 'yes', correct: true},
      {text: 'no', correct: false},
      {text: 'depends on the weather', correct: false}
    ]
  },
  {
    question: 'Javascript is only for front-end web development.',
    answer: [ 
      {text: 'false', correct: true},
      {text: 'true', correct: false},
      {text: "nobody knows what it's for!", correct: false}
    ]
  }
];


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        Quiz Functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let counter = 0

   //this function starts the game when we press start
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionsIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answer.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
    button.addEventListener('click', a = () => {
      wizardAttack.src = "./assets/WATTACK.gif" ; evilWizardAttack.src = "./assets/EHIT.gif";
     counter++}
      )
  } else {
    button.addEventListener('click', a = () => {
      wizardAttack.src = "./assets/WHIT.gif" ; evilWizardAttack.src = "./assets/EVILATTACK1.gif";}
      )
  }
  button.addEventListener('click', selectAnswer)
  answerButtonsElement.appendChild(button)
})
}

function resetState() {
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionsIndex + 1) {
  nextButton.classList.remove('hide')}
else { 
  questionContainerElement.classList.add("hide")
  if(counter >= 3 ){
    win.classList.remove("hide")
    wizardAttack.src="./assets/WATTACK.gif"
    evilWizardAttack.src = "./assets/EVILDEATH.gif"
  } else if (counter < 3){
    lose.classList.remove("hide")
    wizardAttack.src="./assets/WD.gif"
    evilWizardAttack.src = "./assets/EVILATTACK1.gif"
  }
  startButton.innerText = 'Start Again'
  startButton.addEventListener("click", a = () =>{
    win.classList.add("hide");
    lose.classList.add("hide");
  })
    startButton.classList.remove('hide')
  
  counter = 0}
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  //   if(correct !== true) {
  //     wizardAttack.src = "./assets/WHIT.gif" ; evilWizardAttack.src = "./assets/EVILATTACK1.gif";
  // }
}
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
} 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        Quiz Event listeners 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionsIndex++
  setNextQuestion()
})
wizardAttack.addEventListener('click', a = () => {
wizardAttack.src = "./assets/WATTACK.gif" ; evilWizardAttack.src = "./assets/EHIT.gif";

}
)

evilWizardAttack.addEventListener('click', a = () => {
  wizardAttack.src = "./assets/WHIT.gif" ; evilWizardAttack.src = "./assets/EVILATTACK1.gif";}
  )

  
//End of Slide Five Javascript




//PROGRESS BAR
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


