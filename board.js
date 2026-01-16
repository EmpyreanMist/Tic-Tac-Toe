export function createBoard() {
  const cells = Array(9).fill(null);

  function isCellEmpty(position) {
    return cells[position] === null;
  }

  function setCell(position, symbol) {
    if (!isCellEmpty(position)) {
      throw new Error("Cell is already occupied");
    }
    cells[position] = symbol;
  }

  function getCells() {
    return [...cells];
  }

  return {
    isCellEmpty,
    setCell,
    getCells,
  };
}
