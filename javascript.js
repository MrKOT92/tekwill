let currentPlayer = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(cell) {
  const rowIndex = cell.parentNode.rowIndex;
  const cellIndex = cell.cellIndex;

  if (gameBoard[rowIndex][cellIndex] === "") {
    cell.innerHTML = currentPlayer;
    gameBoard[rowIndex][cellIndex] = currentPlayer;

    if (checkWinner()) {
      alert(`Jucătorul ${currentPlayer} a câștigat!`);
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  } else {
    alert("Celula este deja ocupată. Alegeți altă celulă.");
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      (gameBoard[i][0] !== "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) ||
      (gameBoard[0][i] !== "" && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i])
    ) {
      return true;
    }
  }

  if (
    (gameBoard[0][0] !== "" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) ||
    (gameBoard[0][2] !== "" && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])
  ) {
    return true;
  }

  return false;
}

function resetGame() {
  currentPlayer = "X";
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  const cells = document.getElementsByTagName("td");
  for (let cell of cells) {
    cell.innerHTML = "";
  }
}
