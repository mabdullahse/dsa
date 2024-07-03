/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  let jump = 0;
  if (nums.length === 1) return 0;
  if (nums[start] + start > end) {
    return 1;
  }
  while (start < end) {
    let steps = nums[start];
    let max = -Infinity;
    let newStart;
    for (let i = start + 1; i <= nums[start] + start; i++) {
      if (nums[i] + i > max) {
        max = nums[i] + i;
        newStart = i;
      }
    }
    jump++;
    start = newStart;
  }
  return jump;
};

console.log(canJump([3, 2, 1]));
