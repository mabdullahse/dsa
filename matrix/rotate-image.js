/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let layers = Math.floor(matrix.length / 2);

  for (let layer = 0; layer < layers; layer++) {
    let top = layer;
    let last = matrix.length - 1 - layer;

    for (let i = top; i < last; i++) {
      let;
    }
  }
  return matrix;
};

//   var rotate2 = function (matrix) {
//   let left = 0;
//   let right = matrix.length - 1;
//   let i = 0;
//   while (left < right) {
//     i = left;
//     untill = right - left;
//     while (i < untill) {
//       top = left;
//       bottom = right;
//       let temp = matrix[top][left + i];
//       matrix[top][left + i] = matrix[bottom - i][left];
//       matrix[bottom - i][left] = matrix[bottom][right - i];
//       matrix[bottom][right - i] = matrix[top + i][right];
//       matrix[top + i][right] = temp;
//       i++;
//     }
//     left++;
//     right--;
//   }
//   return matrix;
// };
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(rotate(matrix));
