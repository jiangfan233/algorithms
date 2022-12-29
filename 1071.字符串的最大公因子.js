/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // let short, long;
  // if(str1.length > str2.length) {
  //   short = str2;
  //   long = str1;
  // } else {
  //   short = str1;
  //   long = str2;
  // }

  // if(long.indexOf(short) !== 0) return "";
  // long = long.replace(short, "");
  // if(!long.length) return short;
  // return gcdOfStrings(short, long);
  // ******************************************

  // 判断str1和str2中是否存在公共部分
  if(str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
// @lc code=end

