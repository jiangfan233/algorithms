/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // nums.sort((a, b) => a - b);
  // let sum = 0;
  // for (let i = 0; i < nums.length; i += 2) {
  //   sum += nums[i];
  // }
  // return sum;

  return nums
    .sort((a, b) => a - b)
    .reduce((sum, curr, i) => (i % 2 === 0 ? sum + curr : sum), 0);
};
// @lc code=end

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
