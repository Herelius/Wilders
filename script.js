const playerNamesList = document.querySelector('#playerNames');
const playerNameButton = document.querySelector('#playerName');


  playerNameButton.innerHTML = prompt('Name :');


const allButtons = document.querySelector('#threeChoice')
const rockButton = document.querySelector('.rockChoice');
const paperButton = document.querySelector('.paperChoice');
const scissorsButton = document.querySelector('.scissorsChoice');

let playerChoiceValue;
const cpuChoiceValue = require('./cpu.js');

const winner = () => {
    if (playerScore > cpuScore) {
      return `The winner is ${playerNameButton.innerHTML} with a score of ${playerScore}-${cpuScore}`;
    }
    if (playerScore < cpuScore) {
      return `The winner is CPU with a score of ${cpuScore}-${playerScore}`;
    }
  }

// Condition de victoire



let round = 0;
let playerScore = 0;
let cpuScore = 0;
const score = document.querySelector('#results');


allButtons.addEventListener('click', (event) => {
  event.preventDefault();
  
  
  if (round <= 5) {

    round += 1;
    score.innerHTML = `Score : CPU ${cpuScore}pts ${playerNameButton.innerHTML} ${playerScore}pts`

    rockButton.addEventListener('click', (event) => {
      event.preventDefault();
      const rockImage = document.querySelector('.playerImageChoice');
      rockImage.src = './src/vide.png';
      rockImage.alt = 'Player choice: Rock';
      playerChoiceValue = 'rock';
    });
    
    paperButton.addEventListener('click', (event) => {
      event.preventDefault();
      const paperImage = document.querySelector('.playerImageChoice');
      paperImage.src = './src/paper.png';
      paperImage.alt = 'Player choice: Paper';
      playerChoiceValue = 'paper';
    });

    scissorsButton.addEventListener('click', (event) => {
      event.preventDefault();
      const scissorsImage = document.querySelector('.playerImageChoice');
      scissorsImage.src = './src/ciseaux.png';
      scissorsImage.alt = 'Player choice: Scissors';
      playerChoiceValue = 'scissors';
    });

    cpuChoiceValue();

      if (cpuChoiceValue() === 'rock' && playerChoiceValue === 'scissors') {
        cpuScore += 1;
        console.log(`CPU : ${cpuScore} point(s)`);
        console.log(`${playerNameButton.innerHTML}: ${playerScore} point(s)`);
      }
      else if (cpuChoiceValue() === 'paper' && playerChoiceValue === 'rock') {
        cpuScore += 1;
        console.log(`CPU : ${cpuScore} point(s)`);
        console.log(`${playerNameButton.innerHTML}: ${playerScore} point(s)`);
      }
      else if (cpuChoiceValue() === 'scissors' && playerChoiceValue === 'paper') {
        cpuScore += 1;
        console.log(`CPU : ${cpuScore} point(s)`);
        console.log(`${playerNameButton.innerHTML}: ${playerScore} point(s)`);
      } 
      else if (cpuChoiceValue() === playerChoiceValue) {
        console.log("It's a draw, try again !");
        round -= 1;
      } 
      else {
        playerScore += 1;
        console.log(`${playerNameButton.innerHTML}: ${playerScore} point(s)`);
        console.log(`CPU : ${cpuScore} point(s)`);
      };

    
    
  } else{
      console.log(winner())   
  };
})