// alert("Hello");

var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

function nextSequence() {

  //make a new userClickedPattern array every time nextSequence run
  userClickedPattern = [];

  //generate a random int number from 0-3 range
  var randomNumber = Math.floor(Math.random() * 4);
  //will get random color from the buttonColors array
  var randomChosenColor = buttonColors[randomNumber];
  //put the color into gamePattern array
  gamePattern.push(randomChosenColor);
  // animations
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

  playSound(randomChosenColor);

  // increase the level by 1 every time nextSequence() is called.
  level++;
  // update the h1 with change in the value of level.
  $("#level-title").text("Level " + level);

}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(lastColor) {

  // logging user & game array
  console.log(`userTotal [${userClickedPattern.length - 1}] ${userClickedPattern}`);
  console.log(`gameTotal [${gamePattern.length - 1}] ${gamePattern}`);

  // check user answer with the game
  if (userClickedPattern[lastColor] === gamePattern[lastColor]) {

    // check if the user finish their answer sequence
    if (userClickedPattern.length === gamePattern.length) {
      console.log("Correct!");

      //will call nextSequence after 1 second : 1000 millisecond delay
      setTimeout(function() {
        nextSequence();
      }, 1000)
    }

  } else {

    console.log("Incorrect!");
    // reset userClickedPattern array if wrong
    userClickedPattern = [];

    playSound("wrong");

    $("body").addClass("game-over")
    setTimeout(function () { $("body").removeClass("game-over"); },100);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }

}

//sounds
function playSound(name) {
  // will play sound corresponding to the color
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//click animation
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//keyboard press - begin the games
$(document).on("keypress", function() {

  // only activate once the game start
  if (!started) {

    // The h1 title starts out saying "Press A Key to Start",
    // when the game has started, change this to say "Level 0"
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

//mouse click
$(".btn").on("click", function() {

  // get the color of the button that user click
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor)
  // console.log(userClickedPattern);

  // Call checkAnswer() after a user has clicked and chosen their answer,
  // passing in the index of the last answer in the user's sequence.
  // make the length begin at 0(start of array)
  checkAnswer(userClickedPattern.length - 1);


});
