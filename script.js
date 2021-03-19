const playerNamesList = document.querySelector('#playerNames');
const playerNameButton = document.querySelector("#playerName");


playerNameButton.addEventListener('click', event => {
  //event.preventDefault();
  
  const name = prompt("Name :");
  playerNameButton.innerHTML= name;
});

const rockButton = document.querySelector(".rockChoice");
const paperButton = document.querySelector(".paperChoice");
const scissorsButton = document.querySelector(".scissorsChoice");
let playerChoiceValue;

rockButton.addEventListener('click', event => {
  event.preventDefault();

  const rockImage = document.querySelector(".playerImageChoice");
  rockImage.src = "./src/vide.png";
  rockImage.alt = "Player choice: Rock";
  playerChoiceValue = 1;
});

paperButton.addEventListener('click', event => {
  event.preventDefault();

  const paperImage = document.querySelector(".playerImageChoice");
  paperImage.src = "./src/paper.png";
  paperImage.alt = "Player choice: Paper";
  playerChoiceValue = 2;
});

scissorsButton.addEventListener('click', event => {
  event.preventDefault();

  const scissorsImage = document.querySelector(".playerImageChoice");
  scissorsImage.src = "./src/ciseaux.png";
  scissorsImage.alt = "Player choice: Scissors";
  playerChoiceValue = 3;

  const cpuImage = document.querySelector(".cpuImageChoice");
  let cpuChoiceValue = Math.floor(Math.random() * 3) + 1;

  if (cpuChoiceValue === 1) {
    cpuImage.src = "./src/Pierre";
  }
});


