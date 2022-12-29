/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, map = {}) {
  // if(n < 2) return n;
  // if(n === 2) return 1;
  // if (map[n] === undefined) {
  //   map[n] = tribonacci(n - 1, map) + tribonacci(n - 2, map) + tribonacci(n - 3, map);
  // }
  // return map[n];

  map = { 0: 0, 1: 1, 2: 1 };
  if(n <= 2) return map[n];
  for(let i = 3; i <= n; i++) {
    map[i] = map[i-1] + map[i-2] + map[i-3];
  }
  return map[n];
};


// @lc code=end
