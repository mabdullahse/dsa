/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let counter = 1;
  let majortity = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majortity) {
      counter++;
    } else {
      counter--;

      if (counter === 0) {
        majortity = nums[i];
      }
    }
  }

  return majortity;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
