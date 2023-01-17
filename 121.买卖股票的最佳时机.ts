/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // let ans = Number.MIN_SAFE_INTEGER;
  // let minNum = Number.MAX_SAFE_INTEGER;
  // for(let num of prices) {
  //   minNum = Math.min(minNum, num);
  //   ans = Math.max(ans, num - minNum);
  // }
  // return ans;

  if(prices.length === 1) return 0;
  let minNums: number[] = Array(prices.length);
  let ans = Number.MIN_SAFE_INTEGER;

  minNums[0] = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // minNums目的是保留当前已遍历元素中的最小值，可用 一个变量替换
    minNums[i] = Math.min(minNums[i - 1], prices[i]);
    ans = Math.max(prices[i] - minNums[i], ans);
  }
  return ans;
}
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]));
