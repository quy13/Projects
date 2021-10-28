var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var message;

var player1Dice = "images/dice" + randomNumber1 + ".png" ;
var player2Dice = "images/dice" + randomNumber2 + ".png" ;

document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

if(randomNumber1 === randomNumber2){
  message = "Draw!"
}else if (randomNumber1 >= randomNumber2) {
  message = "Player 1 Wins!"
}else if (randomNumber1 <= randomNumber2) {
  message = "Player 2 Wins!"
}

document.querySelector(".container h1").innerHTML = message;
