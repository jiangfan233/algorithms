/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  
  let ans = [];
  const search = (buffer, idx, l, r) => {
    // console.log(buffer, idx, l, r);
    if(r == n) return ans.push(buffer);

    if(l < n) search(buffer + "(", idx + 1, l + 1, r);
    if(r < n && r < l) search(buffer + ")", idx + 1, l, r+1);

  }
  search("", 0, 0, 0)
  return ans;
};
// @lc code=end

console.log(generateParenthesis(3));
