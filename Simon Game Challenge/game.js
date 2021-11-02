// alert("Hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];


function nextSequence() {
  //generate a random int number from 0-3 range
  var randomNumber = Math.floor(Math.random() * 4);
  //will get random color from the buttonColors array
  var randomChosenColor = buttonColors[randomNumber];
  //put the color into gamePattern array
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

 return randomChosenColor;
}

//sounds
function playSound(name){
  // animations
  $("#"+name).fadeOut(100).fadeIn(100)
  // will play sound corresponding to the color
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

//detect keyboard press
$(document).on("keypress",function(event) {

  nextSequence();
  
});

//detect moouse click
$(".btn").on("click",function() {

  // get the color of the button that user click
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  console.log(userClickedPattern);
});

nextSequence();
