// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Difficulty: easy

// Input: prices = [7,1,5,3,6,4]
Output: 5;

// Input: prices = [7,6,4,3,1]
Output: -0;
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; i < prices.length; j++) {
      const currProfit = Math.max(globalProfit, prices[j] - prices[i]);
      if (currProfit > globalProfit) {
        globalProfit = currProfit;
      }
    }
  }
  return globalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (Buy at 1, Sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0 (No profit possible)
