/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let n = 0, curr = [], ans = [];
  while (n < numRows) {
    curr[0] = curr[n] = 1;
    for (let j = 1; j < n; j++) {
      curr[j] = ans[n - 1][j] + ans[n - 1][j - 1];
    }
    ans.push(curr);
    curr = [];
    n++;
  }
  return ans;
};
// @lc code=end

console.log(generate(4))