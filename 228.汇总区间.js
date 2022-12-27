/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let l = 0,
    ans = [];
  for (let i = 0; i < nums.length; i++) {
    // 普适性更高
    if (nums[i + 1] - nums[l] !== i + 1 - l) {
      // if (nums[i + 1] !== nums[i] + 1) {
      ans.push(l === i ? nums[i].toString() : `${nums[l]}->${nums[i]}`);
      l = i + 1;
    }
  }
  return ans;
};
// @lc code=end
