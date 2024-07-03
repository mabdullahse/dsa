/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
}
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

console.log(rotate(nums, k));
