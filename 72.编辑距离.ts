/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  let l1 = word1.length + 1;
  let l2 = word2.length + 1;

  // rows
  let dp = Array(l1)
    .fill(0)
    // cols
    .map((_) => Array(l2).fill(0));

  for (let r = 1; r < l1; r++) {
    dp[r][0] = r;
  }
  for (let c = 1; c < l2; c++) {
    dp[0][c] = c;
  }

  for (let r = 1; r < l1; r++) {
    for (let c = 1; c < l2; c++) {
      if (word1[r - 1] === word2[c - 1]) {
        dp[r][c] = dp[r - 1][c - 1];
      } else {
        dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]) + 1;
      }
    }
  }

  return dp[word1.length][word2.length];
}
// @lc code=end
