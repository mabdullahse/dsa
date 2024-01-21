//2932

var maximumStrongPairXor = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let calcul = Math.abs(nums[i] - nums[j]);
      if (calcul <= Math.min(nums[i], nums[j])) {
        ans = Math.max(ans, nums[i] ^ nums[j]);
      }
    }
  }

  return ans;
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));
