/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // const xStr = x >= 0 ? String(x) : String(x).slice(1, );
  // const ans = parseInt(xStr.split("").reverse().join(""));
  // if(ans != ~~ans) return 0;
  // if(x < 0) return -1 * ans;
  // return ans;

  // const ans = parseInt(x.toString(10).split("").reverse().join(""));
  // if(ans != ~~ans) return 0;
  // if(x < 0) return -1 * ans;
  // return ans;

  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return ans === ~~ans ? ans : 0;
};
// @lc code=end
