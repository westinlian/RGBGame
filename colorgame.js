var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetColors = document.querySelector("#resetColors");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    initModeButtons();
    initSquares();
    initResetButton();
    reset();
}

function initResetButton() {
    resetColors.addEventListener("click", function() {
        reset();
    })
}

function initSquares() {
    for(var i = 0; i < squares.length; ++i) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeAllColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetColors.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function initModeButtons() {
    for(var i = 0; i < modeButtons.length; ++i) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function reset() {
    resetColors.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; ++i) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

function changeAllColors(color) {
    for(var i = 0; i < squares.length; ++i) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColors(numColors) {
    var colorArray = [];
    for(var i = 0; i < numColors; ++i) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}


// easyButton.addEventListener("click", function() {
//     this.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; ++i) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })
//
// hardButton.addEventListener("click", function() {
//     this.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     rgbDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; ++i) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })
