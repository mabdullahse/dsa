/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let store = {};
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] === undefined) {
      nums[pointer] = nums[i];
      pointer++;
      store[nums[i]] = true;
    } else {
    }
  }
  return pointer;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 2, 4]));
