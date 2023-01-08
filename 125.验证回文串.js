/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  // return s === s.split("").reverse().join("");

  const notValid = (c) => (c < "a" || c > "z") && (c < "0" || c > "9");
  s = s.toLowerCase();
  let l = 0,
    r = s.length - 1;
  while (l <= r) {
    while (notValid(s[l])) l++;
    while (notValid(s[r])) r--;
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
// @lc code=end


console.log(isPalindrome("race a car"))