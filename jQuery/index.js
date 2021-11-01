$("h1").addClass("big-title margin-50");
$("a").attr("href", "https://www.yahoo.com");
// var x = 0;
// var colors;
// $("button").click(function() {
//   if (x % 2 === 0) {
//     colors = "purple";
//   } else {
//     colors = "yellow";
//   }
//   x++;
//   console.log(x);
//   $("h1").css("color", colors);
//
// });

$(document).keypress(function(event) {
  // console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "green");
});

$("button").on("click", function() {
  $("h1").fadeToggle();
});
