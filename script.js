"use strict";

// VARIABLES
// Selects cells as a node list/array
const cells = document.querySelectorAll(".cell");

// Selects button we'll use to reset
const resetButton = document.querySelector("#reset");
const h2 = document.querySelector("h2");

// Sets the initial value of the player input
let currentPlayer = "X";

// Defines the win conditons by cell index
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

// Board/User Input Array
// Leaving blank strings so that the game continues if all conditions aren't met
const userInput = ["", "", "", "", "", "", "", "", ""];

// EVENT LISTENER
// Click event for each cell
cells.forEach((cell, index) =>
  cell.addEventListener("click", function () {
    // If cell is blank it will: update the DOM, pushed into the userInput array and change player
    if (cell.textContent === "") {
      changeCellContent(cell);
      pushInputIntoArr(cell.getAttribute("index"));
      changePlayer();
    }

    // Will check the winner
    checkWinner();
  })
);

// Click event for reset button
resetButton.addEventListener("click", function () {
  // Clears content
  cells.forEach((cell) => clearContent(cell));

  // Clears userInput Array
  clearArray(userInput);
});

// FUNCTIONS
// Alternates between X and O
const changePlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

// Updates content in the DOM
const changeCellContent = (element) => {
  element.textContent = currentPlayer;
  element.style.backgroundColor = "black";
  element.style.color = "white";
};

// Clears content in the DOM
const clearContent = (element) => {
  element.textContent = "";
  element.style.backgroundColor = "rgb(243, 243, 243)";
  element.style.color = "black";
  h2.textContent = "";
};

// loops through winConditons matrice rows
function checkWinner() {
  for (let i = 0; i < winConditions.length; i++) {
    const con0 = winConditions[i][0];
    const con1 = winConditions[i][1];
    const con2 = winConditions[i][2];

    if (
      userInput[con0] === "" ||
      userInput[con1] === "" ||
      userInput[con2] === ""
    ) {
      continue;
    } else if (
      userInput[con0] === "X" &&
      userInput[con1] === "X" &&
      userInput[con2] === "X"
    ) {
      declareWinner("X");
    } else if (
      userInput[con0] === "O" &&
      userInput[con1] === "O" &&
      userInput[con2] === "O"
    ) {
      declareWinner("0");
    }
  }
}

function declareWinner(str) {
  // const p = document.createElement("p");
  h2.textContent = `${str} wins`;
}

// Update board array with plays
function pushInputIntoArr(index) {
  userInput[index] = currentPlayer;
}

function clearArray(arr) {
  for (let j = 0; j < arr.length; j++) {
    arr[j] = "";
  }
}
