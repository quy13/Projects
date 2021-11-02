// alert("Hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern  = [];

function nextSequence(){
  //generate a random int number from 0-3 range
   var randomNumber = Math.floor(Math.random() * 4);
   //will get random color from the buttonColors array
   var randomChosenColor = buttonColors[randomNumber];
   // put the color into gamePattern array
   gamePattern.push(randomChosenColor);
}
