// 421
//https://www.youtube.com/watch?v=jCuZCbXnpLo&ab_channel=Techdose
// #Max length of bits from a number

// take LOG2(number) + 1
// ```function log2PlusOne(number) {
//     return Math.log2(number) + 1;
// }```

// continue....
var maximumStrongPairXor = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      ans = Math.max(ans, nums[i] ^ nums[j]);
    }
  }

  return ans;
};

console.log(maximumStrongPairXor([3, 10, 5, 25, 2, 8]));
