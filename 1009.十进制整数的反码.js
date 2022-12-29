/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  // return parseInt(n.toString(2).split("").reduce((num, w) => `${num}${w === "1" ? "0" : "1"}`, ""), 2);

  return ((1 << n.toString(2).length) - 1) ^ n;
};
// @lc code=end


console.log(bitwiseComplement(5))
