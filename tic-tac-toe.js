document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    
    let currentPlayer = "X";
    let gameBoard = Array(9).fill(null); // Initialize the board state
    
    squares.forEach((square) => {
        square.classList.add("square");
    });

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameBoard[index]) {  // Ensure the square is empty before placing
                gameBoard[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
    
                // Switch to the other player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
    
                // Check for a win after every move
                checkWinner();
            }
        });
    });

});