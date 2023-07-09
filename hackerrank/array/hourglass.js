function sum(hourGlassArray, startRow, endRow, startColumn, endColumn) {
  let medianRow = (startRow + endRow) / 2;
  let sum = 0;
  for (let i = startRow; i <= endRow; i++) {
    if (i === medianRow) {
      let medianCol = (startColumn + endColumn) / 2;
      sum += hourGlassArray[medianRow][medianCol];
      continue;
    }
    for (let j = startColumn; j <= endColumn; j++) {
      sum += hourGlassArray[i][j];
    }
  }
  return sum;
}

function hourglass(array) {
  let maxsum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i + 2] === undefined || array[j + 2] === undefined) {
        continue;
      }
      let localsum = sum(array, i, i + 2, j, j + 2);
      if (localsum > maxsum) {
        maxsum = localsum;
      }
    }
  }
  return maxsum;
}

function hourGlass2(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  maxX = 3; // + (arr[0].length % 3)
  maxY = 3; // + (arr.length % 3)
  total = -Infinity; // has to be -64, but

  // begin at y == 0
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      // sum the top of hourglass
      let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

      // get the middle of hourglass
      sum += arr[y + 1][x + 1];

      // sum the bottom of hourglass
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }

  return total;
}

let data = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
console.log(hourglass(data));
console.log(hourGlass2(data));
