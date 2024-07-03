/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let placer = m + n - 1;
  let firstIndex = m - 1;
  let secondIndex = n - 1;

  while (firstIndex + 1 > 0 && secondIndex + 1 > 0) {
    if (nums1[firstIndex] >= nums2[secondIndex]) {
      nums1[placer] = nums1[firstIndex];
      placer--;
      firstIndex--;
    } else if (nums1[firstIndex] < nums2[secondIndex]) {
      nums1[placer] = nums2[secondIndex];
      placer--;
      secondIndex--;
    }
  }

  while (secondIndex + 1 > 0) {
    nums1[placer] = nums2[secondIndex];
    placer--;
    secondIndex--;
  }

  console.log(nums1);
};
var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
