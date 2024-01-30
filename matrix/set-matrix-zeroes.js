/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// https://www.youtube.com/watch?v=dSxt3ZCbIqA&ab_channel=NikhilLohia
function setZeroes(matrix) {
  let firstRow;
  let firstCol;
  // set mark in first row and first column  to ZERO
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        if (row === 0) firstRow = 1;
        if (col === 0) firstCol = 1;
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // set the nested matrix as zero if its top row or left col is zero
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  if (firstRow) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstCol) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
}

/** solution first */

function updateRowsCol(matrix, i, j) {
  // row forward
  for (let k = j; k < matrix[i].length; k++) {
    matrix[i][k] = 0;
  }

  // row backward
  for (let k = j; k >= 0; k--) {
    matrix[i][k] = 0;
  }

  // col => down
  for (let k = i; k < matrix.length; k++) {
    matrix[k][j] = 0;
  }

  // col up
  for (let k = i; k >= 0; k--) {
    matrix[k][j] = 0;
  }
}

var setZeroes1 = function (matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //   console.log(matrix[i][j]);
      if (matrix[i][j] === 0) {
        result.push({ i, j });
      }
    }
  }

  result.forEach((obj) => {
    updateRowsCol(matrix, obj.i, obj.j);
  });
};

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(setZeroes(matrix));
