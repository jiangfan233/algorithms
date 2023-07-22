/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
const mul = (i: number): number => i <= 1 ? 1 : i * mul(i - 1);

function numTrees(n: number): number {

  let dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for(let i = 1; i <= n; i++) {
    for(let j=1; j<= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}
// @lc code=end

console.log(numTrees(4));
