/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  
  let dp = Array(n).fill(0).map((_) => Array(m).fill(0));
  for(let i = 0; i < m; i++) {
    dp[0][i] = 1;
  }

  for(let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  for(let y = 1; y < n; y++) {
    for(let x = 1; x < m; x++) {
      dp[y][x] = dp[y-1][x] + dp[y][x-1];
    }
  }
  return dp[n-1][m-1];
};
// @lc code=end

