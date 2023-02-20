let currentPlayer = "X";
let gameStatus = "";
let board = ["", "", "", "", "", "", "", "", ""];

const playTurn = (index) => {
  if (board[index] === "") {
    board[index] = currentPlayer;
    gameStatus = checkGameStatus();
    if (gameStatus === "") {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
  renderBoard();
};

const checkGameStatus = () => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
      return `${currentPlayer} wins!`;
    }
  }

  if (!board.includes("")) {
    return "Tie game!";
  }

  return "";
};

const resetGame = () => {
  currentPlayer = "X";
  gameStatus = "";
  board = ["", "", "", "", "", "", "", "", ""];
  renderBoard();
};

const renderBoard = () => {
  const boardEl = document.getElementById("board");
  boardEl.innerHTML = "";

  board.forEach((cell, index) => {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");
    cellEl.innerHTML = cell;
    cellEl.addEventListener("click", () => {
      if (gameStatus === "") {
        playTurn(index);
      }
    });
    boardEl.appendChild(cellEl);
  });

  const gameStatusEl = document.getElementById("game-status");
  gameStatusEl.innerHTML = gameStatus;

  const resetBtnEl = document.getElementById("reset-btn");
  resetBtnEl.addEventListener("click", resetGame);
};

renderBoard();
