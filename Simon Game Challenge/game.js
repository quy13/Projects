// alert("Hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

function nextSequence() {
  //generate a random int number from 0-3 range
  var randomNumber = Math.floor(Math.random() * 4);
  //will get random color from the buttonColors array
  var randomChosenColor = buttonColors[randomNumber];
  //put the color into gamePattern array
  gamePattern.push(randomChosenColor);
  // animations
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100)

  playSound(randomChosenColor);

  // increase the level by 1 every time nextSequence() is called.
  level++;
  // update the h1 with change in the value of level.
  $("#level-title").text("Level "+level);

}

//sounds
function playSound(name){
  // will play sound corresponding to the color
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

//click animation
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

//detect keyboard press - begin the games
$(document).on("keypress",function(event) {

  // only activate onces
 if(!started){
   nextSequence();
   started = true;
 }

});

//detect mouse click
$(".btn").on("click",function() {

  // get the color of the button that user click
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor)
  console.log(userClickedPattern);

});
