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
  const search = (buffer, idx, lCount, rCount, stack) => {
  
    if (idx >= n * 2) return ans.push(buffer);
    if(lCount > n || rCount > n) return;

    if (lCount < n) {
      search(buffer + "(", idx + 1, lCount + 1, rCount, stack.concat("("));
    }

    if (rCount < n && stack[stack.length - 1] === "(") {
      stack.pop();
      search(buffer + ")", idx + 1, lCount, rCount + 1, stack);
    }
  };

  let ans = [];
  search("", 0, 0, 0, []);
  return ans;
};
// @lc code=end

console.log(generateParenthesis(2));
