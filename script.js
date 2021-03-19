const playerNamesList = document.querySelector('#playerNames');
const playerNameBtn = document.querySelector("#playerName");

playerNameBtn.addEventListener('click', event => {
  //event.preventDefault();
  
  const name = prompt("Name :");
  playerNameBtn.innerHTML= name;
});
console.log(toto);


  

