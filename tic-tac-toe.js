document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    
    let currentPlayer = "X";
    let gameBoard = Array(9).fill(null); 
    
    let gameOver = false; 

    squares.forEach((square) => {
        square.classList.add("square");
    });

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameOver && !gameBoard[index]) { 
                gameBoard[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            if (!gameOver && !square.textContent) square.classList.add("hover");
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover");
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]            
        ];

        for (const [a, b, c] of winningCombinations) {
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                statusDiv.textContent = `Congratulations! ${gameBoard[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                gameOver = true;
                return;
            }
        }
    }

    newGameButton.addEventListener("click", () => {
        gameBoard.fill(null); 
        gameOver = false;
        squares.forEach(square => {
            square.textContent = "";     
            square.classList.remove("X", "O"); 
        });
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won"); 
        currentPlayer = "X";                 
    });
});