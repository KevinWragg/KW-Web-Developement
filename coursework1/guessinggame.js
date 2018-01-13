var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

  setUpModeButtons();
  setUpSquares();
  reset();

}

function setUpSquares(){
  for(i = 0; i < squares.length; i++){

    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;

      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again";
      }else {
         this.style.backgroundColor = "#232323";
         messageDisplay.textContent = "Wrong";
      }
    });
  }
}
function setUpModeButtons(){

  for(i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
      });
  }
}


function reset(){
    colors = generateRandomColors(numSquares);
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      h1.style.backgroundColor = "steelblue";
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      }
      else{
        squares[i].style.display = "none";
      }
  }
}

colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click", function() {
 reset();
});


function changeColors(color){
  for(i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];

  for(i = 0; i < num; i++){
    arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
