import { createGame } from "./game.js";

function runScenario(name, moves) {
  console.log(`\n=== Scenario: ${name} ===`);
  const game = createGame();

  let result;

  for (const move of moves) {
    result = game.makeMove(move);
  }

  console.log(result);
}

/* 
Board positions:
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
*/

// X wins diagonally
runScenario("X wins", [0, 1, 4, 2, 8]);

/*
 X | O | O
---------
  | X |
---------
  |   | X
 */

// O wins on top row
runScenario("O wins", [4, 0, 8, 1, 6, 2]);

/* 
O | O | O
---------
  | X |
---------
X |   | X
 */

// Draw
runScenario("Draw", [0, 1, 2, 4, 3, 5, 7, 6, 8]);

/* 
X | O | X
---------
X | O | O
---------
O | X | X
 */

// Invalid move
//runScenario("Invalid move", [0, 0, 2, 4, 3, 5, 7, 6, 8]);
