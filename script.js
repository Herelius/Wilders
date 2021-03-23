const playerNamesList = document.querySelector('#playerNames');
const playerNameButton = document.querySelector("#playerName");
const cpuImage = document.querySelector(".cpuImageChoice");
const nameInput = document.querySelector('#pname');

const rockButton = document.querySelector(".rockChoice");
const paperButton = document.querySelector(".paperChoice");
const scissorsButton = document.querySelector(".scissorsChoice");
let playerChoiceValue;
let cpuChoiceValue;

rockButton.addEventListener('click', event => {
  event.preventDefault();

  const rockImage = document.querySelector(".playerImageChoice");
  rockImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png";
  rockImage.alt = "Player choice: Rock";
  playerChoiceValue = 1;
  cpuChoiceValue = Math.floor(Math.random() * 3) + 1;
  if (cpuChoiceValue === 1) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png";
  } else if (cpuChoiceValue === 2) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png";
  } else if (cpuChoiceValue === 3) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png";
  };
});



paperButton.addEventListener('click', event => {
  event.preventDefault();

  const paperImage = document.querySelector(".playerImageChoice");
  paperImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png";
  paperImage.alt = "Player choice: Paper";
  playerChoiceValue = 2;
  cpuChoiceValue = Math.floor(Math.random() * 3) + 1;
  if (cpuChoiceValue === 1) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png";
  } else if (cpuChoiceValue === 2) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png";
  } else if (cpuChoiceValue === 3) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png";
  };

});


scissorsButton.addEventListener('click', event => {
  event.preventDefault();

  const scissorsImage = document.querySelector(".playerImageChoice");
  scissorsImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png";
  scissorsImage.alt = "Player choice: Scissors";
  playerChoiceValue = 3;
  cpuChoiceValue = Math.floor(Math.random() * 3) + 1;

  if (cpuChoiceValue === 1) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png";
  } else if (cpuChoiceValue === 2) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png";
  } else if (cpuChoiceValue === 3) {
    cpuImage.src = "https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png";
  }
});




