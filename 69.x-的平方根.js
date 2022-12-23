/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */


var mySqrt = function(x) {
  if(x <= 1) return x;

  let left = 1, right = x >> 1;
  while(left <= right) {
    const mid = left + right >> 1;
    const tmp = mid * mid;
    if(tmp === x) return mid;
    if(tmp > x) right = mid - 1;
    if(tmp < x) left = mid + 1; 
  }
  return left-1;
};
// @lc code=end

