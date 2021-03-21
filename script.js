/*//Tarot cards
const card = document.getElementsByClassName('.card');
//const tarotContainer = document.getElementsByClassName('.tarot-container');


    card.addEventListener( 'click', function() => {
           card.classList.toggle('is-flipped')
      });


//end tarot cards*/

const card = document.querySelectorAll('.card');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});
