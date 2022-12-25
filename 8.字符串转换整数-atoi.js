/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  // const isNum = ss => ss >= "0" && ss <= "9";
  // s = s.trim();
  // let i = 1;
  // while(i<s.length) {
  //   if(isNum(s[i])) {
  //     i++
  //   } else {
  //     break;
  //   }
  // }
  // s = parseInt(s.slice(0, i));
  // if(Number.isNaN(s)) return 0;
  // return s === ~~s ? s : s > 0 ? 2 ** 31 - 1 : -1 * 2 ** 31;

  s = parseInt(s) || 0;
  return s === ~~s ? s : s > 0 ? 2 ** 31 - 1 : -1 * 2 ** 31;
};
// @lc code=end

