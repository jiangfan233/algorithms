/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // !(x % 10) && x 大于0的10的倍数返回false；
  if(x < 0 || (!(x % 10) && x) ) return false;

  let tmp = x, num = 0;

  while(tmp) {
    num = num * 10 + tmp % 10;
    tmp = ~~(tmp / 10);
  }
  return num === x;
};
// @lc code=end

