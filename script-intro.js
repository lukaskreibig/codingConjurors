let i = 0;
let speed = 50;
let statue1 = '....the statue starts to speak as you approach the old ruins....';
let statue2 = 'BEHOLD! YOU DARE to enter the forgotten magical world of coding? Are YOU worthy to do so? Answer my question, and we\'ll see if you are as clever as you think. Who was the great inventor of the magical coding spell language, also known as JAVASCRIPT, which brought magic upon the Internet?'

const typeWriter = () => {
    console.log(statue1.length)
  if (i < statue1.length) {
    document.getElementById("riddlebox2").innerHTML += statue1.charAt(i)
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()