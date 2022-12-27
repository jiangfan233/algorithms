/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // if (prices.length <= 1) return 0;
  // let l = 0,
  //   r = 1,
  //   ans = 0;
  // while (l < prices.length - 1) {
  //   if (prices[r] <= prices[l] || r >= prices.length) {
  //     l = r;
  //     r = l + 1;
  //     continue;
  //   }
  //   ans = Math.max(prices[r] - prices[l], ans);
  //   r++;
  // }
  // return ans;

  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for(let i=0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};
// @lc code=end

console.log(maxProfit([7, 6, 5]));
