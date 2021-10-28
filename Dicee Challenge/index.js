var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var player1Dice = "images/dice" + randomNumber1 + ".png" ;
var player2Dice = "images/dice" + randomNumber2 + ".png" ;

document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);
