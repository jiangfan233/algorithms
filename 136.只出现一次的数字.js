/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((ans, curr) => ans ^ curr, 0);
};
// @lc code=end

console.log(singleNumber([4,1,2,1,2]))