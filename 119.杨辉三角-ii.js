/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // let prev, curr = [];
  
  // for (let i = 0; i <= rowIndex; i++) {
  //   prev = curr.slice();
  //   curr[0] = curr[i] = 1;
  //   for (let j = 1; j < i; j++) {
  //     curr[j] = prev[j] + prev[j - 1];
  //   }
  // }
  // return curr;

  const ans = new Array(rowIndex + 1);
  ans[0] = ans[rowIndex] = 1;
  for(let i=1, up = rowIndex; i<= rowIndex; i++, up--) {
    ans[i] = ans[i-1] * up / i;
  }
  return ans;
};
// @lc code=end

console.log(getRow(3))