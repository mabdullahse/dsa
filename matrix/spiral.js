function sprial(nums) {
  let direction = 0;
  let left = 0;
  let right = nums[0].length - 1;
  let top = 0;
  let bottom = nums.length - 1;

  let result = [];

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result.push(nums[top][i]);
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result.push(nums[i][right]);
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result.push(nums[bottom][i]);
      }
      bottom--;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result.push(nums[i][left]);
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }
  return result;
}

// var nums = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
// ];
var nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(sprial(nums));
