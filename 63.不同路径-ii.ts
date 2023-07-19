/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;

  let dp = Array(n).fill(0).map((_) => Array(m).fill(0));
  let flag = false;
  for(let i = 0; i < m; i++) {
    if(obstacleGrid[0][i] === 1) {
      flag = true;
    }
    
    dp[0][i] = flag ? 0 : 1;
  }

  flag = false;
  for(let i = 0; i < n; i++) {
    if(obstacleGrid[i][0] === 1) {
      flag = true;
    }
    dp[i][0] = flag ? 0 : 1;
  }

  for(let y = 1; y < n; y++) {
    for(let x = 1; x < m; x++) {
      if(obstacleGrid[y][x] === 1) {
        dp[y][x] = 0;
      } else {
        dp[y][x] = dp[y-1][x] + dp[y][x-1];
      }
    }
  }
  return dp[n-1][m-1];
};
// @lc code=end

