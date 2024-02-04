var diagonalSum = function (mat) {
  let row = 0;
  let col = 0;
  let rowLastIndex = mat.length - 1;
  let colLastIndex = mat.length - 1;

  let sum = 0;

  while (row <= rowLastIndex && col <= colLastIndex) {
    sum += mat[row][col];
    row++;
    col++;
  }

  row = 0;
  col = mat.length - 1;
  rowLastIndex = mat.length - 1;
  colLastIndex = 0;

  while (row <= rowLastIndex && col >= colLastIndex) {
    if (row === col) {
      row++;
      col--;
      continue;
    }
    sum += mat[row][col];
    row++;
    col--;
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
