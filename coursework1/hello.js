var numberOfsquare = 6;
var color = [];
var pickColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButton = document.querySelectorAll(".modeButton");

init();

function init(){
setupModeButton();
chekState();
reset();
}

function setupModeButton(){
//mode event listener
for(i = 0 ; i < modeButton.length ; i++){
modeButton[i].addEventListener("click",function(){
modeButton[0].classList.remove("blue");
modeButton[1].classList.remove("blue");
this.classList.add("blue")
this.textContent === "Easy" ? numberOfsquare = 3 : numberOfsquare = 6;
reset();
});
  }
}


function chekState() {

for(var i = 0; i < square.length; i++){
square[i].addEventListener("click", function(){
var clickColor = this.style.backgroundColor;
pickColor = color[Math.floor(Math.random() * color.length)];
if(clickColor === pickColor){
message.textContent = "Correct";
resetButton.textContent = "Play Again?"
header.style.backgroundColor = clickColor;
for(i = 0 ; i < square.length ; i++){
square[i].style.backgroundColor = pickColor;
}
} else {
this.style.backgroundColor = "#232323";
message.textContent = "Try Again"
}
});
}
}

function reset(){
color = generateColor(numberOfsquare);
pickColor = color[Math.floor(Math.random() * color.length)];
colorDisplay.textContent = pickColor;
header.style.backgroundColor = "steelblue";
message.textContent = "";
resetButton.textContent = "NEW COLORS";
for(var i = 0; i < square.length; i++){
if(color[i]){
square[i].style.display = "block"
square[i].style.backgroundColor = color[i];
} else {
square[i].style.display = "none";
}
}

}

  // reset button
resetButton.addEventListener("click",function(){
reset();
});

function colorRandom() {
var x = Math.floor(Math.random() * 255);
var y = Math.floor(Math.random() * 255);
var z = Math.floor(Math.random() * 255);
return "rgb("+ x + ", " + y + ", " + z + ")";
}

function generateColor(num) {
var arr = [];
for(var i = 0 ; i < num ; i++) {
arr.push(colorRandom());
}
return arr;
}
