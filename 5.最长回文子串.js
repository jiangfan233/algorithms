/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ll = 0,
    rr = 0;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j of [i, i + 1]) {
      for(let n=i, m=j; s[n] && s[m] && s[n] == s[m]; n--,m++) {
        [ll, rr] = m - n + 1 > rr - ll + 1 ? [n, m] : [ll, rr];
      }
    }
  }

  return s.substring(ll, rr + 1);
};
// @lc code=end
