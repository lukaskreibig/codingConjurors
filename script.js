//Tarot cards
const card = document.querySelectorAll('.card');

card.forEach((card) => {
     card.addEventListener("click", () => {
          card.classList.toggle("is-flipped");
     });
});

//end tarot cards
