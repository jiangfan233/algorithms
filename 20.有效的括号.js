/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let i=-1, len = s.length, stack = [];
  while(++i < len) {
    if(map[s[i]]) {
      stack.push(s[i]);
    } else {
      if(map[stack.pop()] !== s[i]) return false;
    }
  }

  return stack.length === 0;

  // let i = -1; len = Math.floor(s.length / 2);
  // while(++i < len) {
  //   s = s.replace("{}", "").replace("[]", "").replace("()", "");
  // }

  // return s=== "";
};
// @lc code=end

