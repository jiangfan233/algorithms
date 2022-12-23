/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n <= 3) return n;
  // const map = new Map();
  // map.set(1, 1).set(2, 2).set(3, 3);
  // return helper(map, n - 1) + helper(map, n - 2);

  if (n <= 3) return n;
  const dp = new Array(n+1);
  dp[1] = 1, dp[2] = 2, dp[3] = 3;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

function helper(map, n) {
  if (!map.has(n)) {
    const ans = helper(map, n - 1) + helper(map, n - 2);
    map.set(n, ans);
  }
  return map.get(n);
}

// @lc code=end
