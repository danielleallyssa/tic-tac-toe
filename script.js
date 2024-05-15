"use strict";

// VARIABLES
// Selects cells as a node list/array
const cells = document.querySelectorAll(".cell");

// Selects button as a reset
const resetButton = document.querySelector("#reset");

// Sets the initial value of the player input
let currentPlayer = "X";

// Winning conditions
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < winConditions.length; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(winConditions[i][j]);
    // if(winConditions[i][j] === document.querySelector(`[index="${j}"]`))
  }
}

// EVENT LISTENER
cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    if (cell.textContent === "") {
      changePlayer();
      changeCellContent(cell);
    }
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
