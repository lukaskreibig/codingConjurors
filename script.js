//Tarot cards
const card = document.querySelector('.card');
const tarotContainer = document.querySelector('.tarot-container');

for (let i=0; i<=3; i++) {
    card[i].addEventListener( 'click', function() => {
           card[i].classList.toggle('is-flipped')
      });
}

//end tarot cards
