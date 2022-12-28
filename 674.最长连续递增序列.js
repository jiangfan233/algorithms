/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let count = 1;
  for(let l = 0, r = 1; r <= nums.length; r++) {
    if(nums[r] <= nums[r-1] || r === nums.length) {
      count = Math.max(count, r - l);
      l = r;
    }
  }
  return count;
};
// @lc code=end

console.log(findLengthOfLCIS([1,3,5,7]))
