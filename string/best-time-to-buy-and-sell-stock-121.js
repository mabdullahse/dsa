/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let currentProfit = prices[right] - prices[left];
      maxProfit = Math.max(currentProfit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

var maxProfit1 = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      let currentProfit = prices[i] - buy;

      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }

  return profit;
};

var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let currentProfit = prices[right] - prices[left];
      maxProfit = currentProfit + maxProfit;
      left = right;
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
