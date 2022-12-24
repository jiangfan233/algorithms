/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // let len = s.length,
  //   left = 0,
  //   right = 0,
  //   ans = 0,
  //   map = new Map();

  // while (right < len) {
  //   // 把握下面这行判断语句
  //   if (map.get(s[right]) >= left) {
  //     ans = Math.max(ans, right - left);
  //     left = map.get(s[right]) + 1;
  //   }
  //   map.set(s[right], right);
  //   right++;
  // }
  // return Math.max(ans, right - left);

  let left = 0, map = {};

  return s.split("").reduce((max, curr, i) => {
    // 把握下面这行判断语句
    left = map[curr] >= left ? map[curr] + 1 : left; 
    map[curr] = i;
    return Math.max(max, i - left + 1);
  }, 0)
};
// @lc code=end
