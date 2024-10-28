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

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (!square.textContent) square.classList.add("hover");
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
    });


    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];
    
        for (const [a, b, c] of winningCombinations) {
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                statusDiv.textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return;
            }
        }
    }

});