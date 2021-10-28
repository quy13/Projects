var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;

var player1Dice = "images/dice"+randomNumber1+".png" ;

document.querySelector(".img1").setAttribute("src", player1Dice);
