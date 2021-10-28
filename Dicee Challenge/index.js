var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

var player1Dice = "images/dice" + randomNumber1 + ".png" ;
var player2Dice = "images/dice" + randomNumber2 + ".png" ;

document.querySelector(".container h1").innerHTML = findWinner();
document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

function randomNumber(){
  var n = Math.floor(Math.random() * 6) + 1;

  return n;
}

function findWinner(){
  var result;

  if(randomNumber1 === randomNumber2){
    result = "Draw!"
  }else if (randomNumber1 > randomNumber2) {
    result = "🏴Player 1 Wins!"
  }else if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins!🏳️"
  }

  return result;
}
