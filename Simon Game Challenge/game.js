// alert("Hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern  = [];

function nextSequence() {
  //generate a random int number from 0-3 range
  var randomNumber = Math.floor(Math.random() * 4);
  //will get random color from the buttonColors array
  var randomChosenColor = buttonColors[randomNumber];
  //put the color into gamePattern array
  gamePattern.push(randomChosenColor);
}

function playSound(color) {
  // will play sound corresponding to the color
  switch (color) {
    case "red":
    var red = new Audio('sounds/red.mp3');
    red.play();
      break;
    case "blue":
    var blue = new Audio('sounds/blue.mp3');
    blue.play();
      break;
    case "green":
    var green = new Audio('sounds/green.mp3');
    green.play();
      break;
    case "yellow":
    var yellow = new Audio('sounds/yellow.mp3');
    yellow.play();
      break;
    default:console.log(color);

  }

}

nextSequence();

$("#" + gamePattern[0]).fadeOut(100).fadeIn(100).click(function() {

  playSound(gamePattern[0]);

});
