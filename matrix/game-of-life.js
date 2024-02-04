/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let rowIndexes = [-1, 0, +1, -1, 1, 1, 0, -1];
  let colIndexes = [-1, -1, -1, 0, 0, +1, +1, +1];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let countOfNeighbours = 0;
      if (row === 2 && col === 2) {
        // console.log(countOfNeighbours);
      }

      for (let i = 0; i < 8; i++) {
        if (
          board[row + rowIndexes[i]] &&
          board[row + rowIndexes[i]][col + colIndexes[i]] &&
          Math.abs(board[row + rowIndexes[i]][col + colIndexes[i]]) === 1
        ) {
          countOfNeighbours++;
        }
      }

      if (
        board[row][col] === 1 &&
        (countOfNeighbours < 2 || countOfNeighbours > 3)
      ) {
        board[row][col] = -1;
      } else if (board[row][col] === 0 && countOfNeighbours === 3) {
        board[row][col] = 2;
      }

      console.log(board, "<===> ", countOfNeighbours, "---", row, col);
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] >= 1) {
        board[row][col] = 1;
      } else if (board[row][col] < 1) {
        board[row][col] = 0;
      }
    }
  }
};

var board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

console.log(gameOfLife(board));
