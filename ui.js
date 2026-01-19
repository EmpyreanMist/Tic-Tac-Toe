import { createGame } from "./game.js";

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const restartButton = document.getElementById("restart");

let game;
let cells = [];

init();

function init() {
  game = createGame();
  boardElement.innerHTML = "";
  cells = [];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => handleMove(i, cell));
    boardElement.appendChild(cell);
    cells.push(cell);
  }

  updateStatus({ status: "ONGOING" });
}

function handleMove(position, cellElement) {
  if (cellElement.classList.contains("filled")) return;

  try {
    const player = game.getCurrentPlayer();
    const result = game.makeMove(position);

    cellElement.textContent = player.symbol;
    cellElement.classList.add("filled");

    updateStatus(result);
  } catch {
    // ignore invalid moves
  }
}

function updateStatus(result) {
  if (result.status === "WIN") {
    statusElement.textContent = `Winner: ${result.winner}`;
    disableBoard();
  } else if (result.status === "DRAW") {
    statusElement.textContent = "Draw";
    disableBoard();
  } else {
    statusElement.textContent = `Turn: ${game.getCurrentPlayer().symbol}`;
  }
}

function disableBoard() {
  cells.forEach((cell) => cell.classList.add("filled"));
}

restartButton.addEventListener("click", init);
