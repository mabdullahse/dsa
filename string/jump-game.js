/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = goal - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  if (goal === 0) return true;
  return false;
};

console.log(canJump([2, 3, 2, 0, 2]));
