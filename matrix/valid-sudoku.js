var isValidSudoku_2 = function (board) {
  for (let row = 0; row < board.length; row++) {
    let objCheck = {};
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] > 9 ||
        board[row][col] < 0 ||
        objCheck[board[row][col]]
      ) {
        return false;
      }
      if (board[row][col] !== ".") {
        objCheck[board[row][col]] = true;
      }
    }
  }

  for (let col = 0; col < board.length; col++) {
    let objCheck = {};
    for (let row = 0; row < board[col].length; row++) {
      if (
        board[row][col] > 9 ||
        board[row][col] < 0 ||
        objCheck[board[row][col]]
      ) {
        return false;
      }
      if (board[row][col] !== ".") {
        objCheck[board[row][col]] = true;
      }
    }
  }

  return true;
};

var isValidSudoku = function (board) {
  const rows = [];
  const cols = [];
  const boxes = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    boxes[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];

      //   console.log(boxes);

      if (val !== ".") {
        console.log(
          i,
          j,
          "==",
          Math.floor(i / 3) * 3 + Math.floor(j / 3),
          //   boxes,
          val
        );
        if (
          rows[i].has(val) ||
          cols[j].has(val) ||
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(val)
        ) {
          return false;
        } else {
          rows[i].add(val);
          cols[j].add(val);
          boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(val);
        }
      }
    }
  }

  return true;
};
var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
