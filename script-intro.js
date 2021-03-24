let i = 0;
let intro = '....the statue starts to speak as you approach the old ruins....';
let speed = 50;

function typeWriter(text) {
  if (i < text.length) {
    document.getElementById("riddlebox").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(intro)