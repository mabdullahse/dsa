var maximumWealth = function (accounts) {
  let wealth = -Infinity;

  for (let row = 0; row < accounts.length; row++) {
    let sum = 0;
    // console.log(accounts[row][bank], accounts.length);

    for (let col = 0; col < accounts[row].length; col++) {
      sum += accounts[row][col];
    }

    wealth = Math.max(wealth, sum);
  }
  return wealth;
};
var accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
