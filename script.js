"use strict";

// VARIABLES
// Selects cells as a node list/array
const cells = document.querySelectorAll(".cell");

// Selects button as a reset
const resetButton = document.querySelector("#reset");

// Sets the initial value of the player input
let currentPlayer = "X";

// EVENT LISTENER
cells.forEach((cell, index) =>
  cell.addEventListener("click", function () {
    changePlayer();
    changeCellContent(cell);
    updateBoardArray(cell, index)
  })
);

resetButton.addEventListener("click", function () {
  cells.forEach((cell) => clearCellContent(cell));
});

// FUNCTIONS
// Alternates between X and O
const changePlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const changeCellContent = (element) => {
  element.textContent = currentPlayer;
  element.style.backgroundColor = "black";
  element.style.color = "white";
};

const clearCellContent = (element) => {
  element.textContent = "";
  element.style.backgroundColor = "rgb(243, 243, 243)";
  element.style.color = "black";
};

// CHECK WINNER
// Define win conditons
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// Board Array
let boardArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

// Update board array with plays
function updateBoardArray(cell, index)  {
  boardArray[index] = currentPlayer;
  console.log(boardArray);
}