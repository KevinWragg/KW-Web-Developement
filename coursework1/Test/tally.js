var scoreOne = 0;
var scoreTwo = 0;
var p1Button = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var reset = document.querySelector("#reset");
p1Button.addEventListener("click", function() {
 scoreOne++;
 console.log(scoreOne);
});
playerTwo.addEventListener("click", function() {
 scoreTwo++;
 console.log(scoreTwo)
});
reset.addEventListener("click", function() {
 scoreOne = 0;
 scoreTwo = 0;
});
