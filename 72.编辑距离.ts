/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  let dp = Array(word1.length + 1)
    .fill(0)
    .map((_, y) =>
      Array(word2.length + 1)
        .fill(0)
    );

  for(let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for(let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  for(let y = 1; y <= word1.length; y++) {
    for(let x = 1; x <= word2.length; x++) {
      if(word1[y-1] === word2[x-1]) {
        dp[y][x] = dp[y-1][x-1];
      } else {
        dp[y][x] = Math.min(dp[y][x-1], dp[y-1][x], dp[y-1][x-1]) + 1;
      }
    }
    // console.log(dp)
  }
  return dp[word1.length][word2.length];
}
// @lc code=end
