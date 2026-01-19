import { createBoard } from "./board.js";
import { checkWinner, isDraw } from "./rules.js";
import { createPlayer } from "./player.js";

const STATUS = {
  ONGOING: "ONGOING",
  WIN: "WIN",
  DRAW: "DRAW",
};

export function createGame() {
  const board = createBoard();
  const players = [createPlayer("X"), createPlayer("O")];
  let currentPlayerIndex = 0;
  let status = STATUS.ONGOING;

  function getCurrentPlayer() {
    return players[currentPlayerIndex];
  }

  function isValidMove(position) {
    return status === STATUS.ONGOING && board.isCellEmpty(position);
  }

  function makeMove(position) {
    if (!isValidMove(position)) {
      throw new Error("Invalid move");
    }

    const player = getCurrentPlayer();
    board.setCell(position, player.symbol);

    const cells = board.getCells();
    const winner = checkWinner(cells);

    if (winner) {
      status = STATUS.WIN;
      return { status, winner };
    }

    if (isDraw(cells)) {
      status = STATUS.DRAW;
      return { status };
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;

    return { status };
  }

  function getStatus() {
    return status;
  }

  return {
    makeMove,
    isValidMove,
    getCurrentPlayer,
    getStatus,
  };
}
