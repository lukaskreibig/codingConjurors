let i = 0;
let speed = 50;
let intro = '....the statue starts to speak as you approach the old ruins....';

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("riddlebox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()