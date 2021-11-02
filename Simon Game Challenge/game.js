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

  // animations
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100)
  // will play sound corresponding to the color
  var audio = new Audio("sounds/"+randomChosenColor+".mp3");
  audio.play();
}

//detect keyboard press
$(document).on("keypress",function() {

  nextSequence();

});
//detect moouse click
$(".btn").on("click",function() {

  // get the color of the button that user click
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);

});

nextSequence();
