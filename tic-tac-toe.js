document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    
    let currentPlayer = "X";
    let gameBoard = Array(9).fill(null); // Initialize the board state
    
    squares.forEach((square) => {
        square.classList.add("square");
    });

});