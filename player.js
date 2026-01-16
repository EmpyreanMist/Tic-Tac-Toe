export function createPlayer(symbol) {
  if (symbol !== "X" && symbol != "O") {
    throw new Error("Player symbol must be 'X' or 'O'");
  }

  return {
    symbol,
  };
}
