/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  const ans = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    // ans[i] = [];
    ans[i] = "";
  }
  const num = numRows * 2 - 2;
  for (let i = 0; i < s.length; i++) {
    let j = i % num;
    if (j < numRows) {
      // ans[j].push(s[i]);
      ans[j] += s[i];
    } else {
      // ans[num - j].push(s[i]);
      ans[num - j] += s[i];
    }
  }
  // return ans.reduce((sum, curr) => sum + curr.join(""), "");
  return ans.reduce((sum, curr) => sum + curr, "");
};
// @lc code=end
