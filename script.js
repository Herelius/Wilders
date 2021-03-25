// 1.Éléments à utiliser//

// 1.1.Joueurs//
const cpuImage = document.querySelector('.cpuImageChoice');
const newPlayer = document.querySelector('#playerName');

// 1.2.Bouttons//
const allButtons = document.querySelector('#threeChoice');
const rockButton = document.querySelector('.rockChoice');
const paperButton = document.querySelector('.paperChoice');
const scissorsButton = document.querySelector('.scissorsChoice');

// 1.3.Jeu//
const cpuChoiceValue = require('./cpu.js');
let playerChoiceValue;
let roundNumber = 0;
let playerScore = 0;
let cpuScore = 0;
const score = document.querySelector('#results');
const roundInGame = document.querySelector('#round');

// 1.3.a.Fonctions du jeu//
const winner = () => {
  if (playerScore > cpuScore) {
    return `The winner is ${newPlayer.innerHTML} with a score of ${playerScore}-${cpuScore}`;
  }
  if (playerScore < cpuScore) {
    return `The winner is CPU with a score of ${cpuScore}-${playerScore}`;
  }
};

const cpuChoiceValueImg = () => {
  if (cpuChoiceValue() === 'rock') {
    return (cpuImage.src =
      'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png');
  }
  if (cpuChoiceValue() === 'paper') {
    return (cpuImage.src =
      'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png');
  }
  if (cpuChoiceValue() === 'scissors') {
    return (cpuImage.src =
      'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png');
  }
};

// 2.Mise en place//
allButtons.addEventListener('click', (event) => {
  event.preventDefault();

  if (roundNumber < 5) {
    roundNumber += 1;
    roundInGame.innerHTML = `Round n°${roundNumber}`;
    score.innerHTML = `Score : CPU ${cpuScore}pt(s) - ${newPlayer.innerHTML} ${playerScore}pt(s)`;

    rockButton.addEventListener('click', (event) => {
      event.preventDefault();

      const rockImage = document.querySelector('.playerImageChoice');
      rockImage.src =
        'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/pierre-300x300.png';
      rockImage.alt = 'Player choice: Rock';
      playerChoiceValue = 'rock';
      cpuChoiceValue();
      cpuChoiceValueImg();
    });

    paperButton.addEventListener('click', (event) => {
      event.preventDefault();

      const paperImage = document.querySelector('.playerImageChoice');
      paperImage.src =
        'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/feuille-300x300.png';
      paperImage.alt = 'Player choice: Paper';
      playerChoiceValue = 'paper';
      cpuChoiceValue();
      cpuChoiceValueImg();
    });

    scissorsButton.addEventListener('click', (event) => {
      event.preventDefault();

      const scissorsImage = document.querySelector('.playerImageChoice');
      scissorsImage.src =
        'https://www.pierrefeuilleciseaux.fr/wp-content/uploads/sites/5/2013/10/ciseaux-300x300.png';
      scissorsImage.alt = 'Player choice: Scissors';
      playerChoiceValue = 'scissors';
      cpuChoiceValue();
      cpuChoiceValueImg();
    });

    // 2.1.Fonctionnement du jeu//
    if (cpuChoiceValue() === 'rock' && playerChoiceValue === 'scissors') {
      cpuScore += 1;
      console.log(`CPU : ${cpuScore} point(s)`);
      console.log(`${newPlayer.innerHTML}: ${playerScore} point(s)`);
    } else if (cpuChoiceValue() === 'paper' && playerChoiceValue === 'rock') {
      cpuScore += 1;
      console.log(`CPU : ${cpuScore} point(s)`);
      console.log(`${newPlayer.innerHTML}: ${playerScore} point(s)`);
    } else if (cpuChoiceValue() === 'scissors' && playerChoiceValue === 'paper') {
      cpuScore += 1;
      console.log(`CPU : ${cpuScore} point(s)`);
      console.log(`${newPlayer.innerHTML}: ${playerScore} point(s)`);
    } else if (cpuChoiceValue() === playerChoiceValue) {
      console.log(`It's a draw, try again !`);
      roundNumber -= 1;
    } else {
      playerScore += 1;
      console.log(`${newPlayer.innerHTML}: ${playerScore} point(s)`);
      console.log(`CPU : ${cpuScore} point(s)`);
    }
  } else {
    alert(`${winner()}`);
  }
});
