function sprial(nums) {
  let direction = 0;
  let left = 0;
  let right = nums[0].length - 1;
  let top = 0;
  let bottom = nums[0].length - 1;

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        console.log(nums[top][i]);
      }
      top++;
    } else if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        console.log(nums[i][right]);
      }
      right--;
    } else if (direction === 2) {
      for (let i = right; i >= left; i--) {
        console.log(nums[bottom][i]);
      }
      bottom--;
    } else if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        console.log(nums[i][left]);
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }
}

var nums = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(sprial(nums));
