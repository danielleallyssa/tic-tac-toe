"use strict";

// VARIABLES
// Selects cells as a node list/array
const cells = document.querySelectorAll(".cell");

// Selects button as a reset
const resetButton = document.querySelector("#reset");

// Sets the initial value of the player input
let currentPlayer = "X";

// EVENT LISTENER
cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    changePlayer();
    changeCellContent(cell);
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
